"use client"

import React, { useEffect, useMemo, useState } from "react";

import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import styles from "./provider.module.scss";
import Premium from "/public/assets/plans/001.png";
import wifiIcons1 from "/public/assets/plans/Wifiicon1.png";
import airtelIcon from "/public/assets/plans/airtel.png";
import popular from "/public/assets/plans/popular.png";
import checkAvail from "/public/assets/plans/CheckAvail.png";
import airteldeals from "/public/assets/plans/Seeallotherairtelplans.png";
import yourtime from "/public/assets/plans/saveyourtime.png";
import FreeExpertAdvice from "/public/assets/plans/FreeExpertAdvice.png";
import Getconnectedfast from "/public/assets/plans/Getconnectedfast.png";
import compareBroadband from "/public/assets/plans/compare-broadband.png";
import BroadbandPlan from "/public/assets/plans/broadbandplan.png";

import STBcard from "/public/assets/plans/STBcard.png";
import Highspeed from "/public/assets/plans/High-speed.png";
import TopProviderBox from "../TopProviderBox";
import ProviderListDataPages from "../ProviderListPage";
import LoaderComponent from "../Loader";
import CountryBlogSection from "../CountryBlogSection";
import { useQuery } from "react-query";
import debounce from "lodash.debounce";
import { useParams, useRouter } from "next/navigation";
import { clientSide } from "@/config";
import { ApiHeaders } from "@/helpers/setheaders";
import { Typeahead } from "react-bootstrap-typeahead";
import ProductSecComponents from "../ProductSec";


const ProviderPageComponent = ({ data, pageSiteId, providerName, viewBlogData }: any) => {
  console.log("--++++++++++",data);
  const router = useRouter();
  const { countryId } = useParams();
  const [siteId, setSiteId] = useState(pageSiteId);
  const [city, setCity] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [providerId, setProviderId] = useState([]);
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    setIsClient(true)
  }, [])

  const { data: newData, isLoading, error, isError }: any = useQuery("get-provider-data", async () => {
      try {
        const resp = await axios(`https://www.parislondrestrain.fr/admin/broadband/listPrivder/${providerName}`, {
          headers: {
            "siteId": pageSiteId,
            "projectId": "3"
          }
        });

        if(resp.status == 200) {
          let payload = resp.data.payload;
          setProviderId(resp.data.payload[0].provider.id)
          return payload;
        }

        return [];
        
      } catch (error) {
        console.log("error", error)
      }
  })

  useEffect(() => {
    async function wizData() {

      let response = await fetch(`https://www.parislondrestrain.fr/admin/wizard/list`,{
        headers: {
          "siteId": pageSiteId,
          "projectId": "",
        }
      })

      let result = await response.json();
      if (result.payload) {
        let filteredPageData = result.payload.filter((item: any) => item.entityId == providerId && item.entityName === "provider");
        setPageData(filteredPageData);
    }
    }
    wizData();
  },[providerId]);

  const getFilteredData = (parsedData: any, sortOrder: any) => {
    let filterItOut = parsedData.filter((item: any) => item.sortingOrder == sortOrder)
    if (filterItOut.length) {
      return {
        description: filterItOut[0].description? filterItOut[0].description : '',
        title: filterItOut[0].title || ''
      }
    }
  }
  const [selectedOption, setSelectedOption]: any = useState(null);

  const handleDebounceFn = async (query: string) => {
    
    if(!query) return;

    // axios call;
    const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}/admin/city/searchByName?name=${query}`;
    const options = await ApiHeaders(siteId, 'GET');
    const data = await fetch(APIURL, options);
    const resData = await data.json();
    if (resData && resData.payload) {
      let cities = resData.payload.map((item: any) => {
        return { value: item.seoName, label: item.name };
      });
      setCity(cities);
    }
  };

  const debounceFn = useMemo(() => debounce(handleDebounceFn, 300), []);

  const getCities = (cityName: string) => {
    debounceFn(cityName)
  }
  const handleChange = (selected: any) => {
    setSelectedOption(selected);
    const cityName =
      selected[0] && selected[0].value && selected[0].value != ''
        ? selected[0].value
        : '';
    if (cityName !== '') {
      let cityname = cityName.toLowerCase();
      router.push(`/${countryId}/broadband-plans/${cityname}`);
    }
  };

  const handlerFormSubmit = (e: any) => {
    e.preventDefault();
    const cityName =
      selectedOption[0] &&
      selectedOption[0].value &&
      selectedOption[0].value != ''
        ? selectedOption[0].value
        : '';
    if (cityName !== '') {
      let cityname = cityName.toLowerCase();
      router.push(`/${countryId}/broadband-plans/${cityname}`);
    } else {
      alert('Please choose city name');
    }
  };
  
  if(!isClient) return null;
  if(!newData) return null;

  const providerData = newData[0]?.provider;

  if (!providerData) return null;
  const {
    provider_top_banner_color,
    logo,
    field1,
    provider_top_banner_txt,
    provider_top_banner_plans,
    faq
  } = providerData;
console.log("ghjghjkhj", providerData);
  if(isLoading) return (
    <>Loading....</>
  )
  const headerText = "Discover the ultimate broadband experience with Airtel, the leading and widely recognized provider in the industry. Offering a comprehensive selection of plans, Airtel has become the go-to choice for countless users. Immerse yourself in a world of seamless connectivity, entertainment, and convenience.";
  
  return (
    <div>
      <section className={styles.planBg} style={{ backgroundColor: provider_top_banner_color }}>
        <div className={styles.wrapContainer}>
          {/* <div className={styles.leftIcon}>
            <Link href="#" className={styles.Premium}>
              <Image src={Premium} alt={`Icon`} />
            </Link>
          </div> */}
          <h1 className={styles.planHead}>
            Compare <Image src={wifiIcons1} alt={`Icon`} />
            <br />
            {newData[0]?.provider?.name || "Name"} broadband
          </h1>
          <div className={styles.rightIcon}>
            <Image
              src={logo || ""}
              alt={`Logo`}
              width={100}
              height={100}
            />
          </div>
          
          <div className={styles.plansBox}>
            <div className={styles.choosePlans}>
              <div>Why choose {(newData[0]?.provider?.name) || "Name"} Broadband?</div>
              
              <p dangerouslySetInnerHTML={{__html: provider_top_banner_txt}} />
              <div className={styles.btnBox}>
                {/* <Link href="#">
                  <Image src={checkAvail} alt={`Icon`} /> check availability
                </Link> */}
                <Link href="#Seeplans">
                  <Image src={airteldeals} alt={`Icon`} /> See all {(newData[0]?.provider?.name) || "Name"} deals
                </Link>
              </div>
            </div>
            <div className={styles.popularPlan}>
              <div>
                <Image src={popular} alt={`Icon`} />
              </div>
              <div className={styles.popularPlanlist}>
                <p dangerouslySetInnerHTML={{__html: provider_top_banner_plans}} />
              </div>
            </div>
            <div className={styles.clear}></div>
          </div>
          <div className={styles.clear}></div>
        </div>
      </section>
      {/* <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div
            dangerouslySetInnerHTML={{ __html: newData[0]?.provider?.field1 }}
          />
        </div>
      </section> */}
      
      <section className={styles.Mancheering}>
        <div className={styles.wrapContainer} 
          dangerouslySetInnerHTML={{__html:  newData[0]?.provider?.field3}} 
        />
        {pageData && pageData.length ? (
          <div className={styles.wrapContainer}>
          <div className={styles.MancheeringCont}>
            <Image src={yourtime} alt={`Icon`} />
            <div
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 501)?.title
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 501)?.description
              }}
            />
          </div>
          <div className={styles.MancheeringCont}>
            <Image src={FreeExpertAdvice} alt={`Icon`} />
            <div
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 502)?.title
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 502)?.description
              }}
            />
          </div>
          <div className={styles.MancheeringCont}>
            <Image src={Getconnectedfast} alt={`Icon`} />
            <div
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 503)?.title
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 503)?.description
              }}
            />
          </div>
        </div>
        ): null }
        
        <div className={styles.clear}></div>
      </section>
      <section className={styles.broadband}>
          <div className={styles.wrapContainer} id="Seeplans">
            <div className={styles.head}>Find the Best Deals Now </div>
            <p dangerouslySetInnerHTML={{__html: field1 ? field1 : headerText}} />
            
            <div className={styles.hideSomeField}>
              {/* {data ? (
                  <ProviderListDataPages
                      providerData={data || ""}
                  />
              ) : (
                  <LoaderComponent />
                  )} */}

              <ProductSecComponents products={data} />
            </div>
          </div>
          <div className={styles.BroadbandPlan}>
            <Link href="#">
                <Image src={BroadbandPlan} alt={`Icon`} />
            </Link>
          </div>
      </section>
      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div className={styles.col7}>
            <div className={styles.head}>
              Benefits of using {newData[0]?.provider?.name || "Name"} Broadband
            </div>
            <p dangerouslySetInnerHTML={{ __html: newData[0]?.provider?.description }}/>
          </div>
          <div className={styles.col3}>
            <div className={styles.head}>
              <div className={styles.headdeals}>
                Compare broadband deals in your area
              </div>
              <Image src={compareBroadband} alt={`Icon`} />
            </div>
            <div className={styles.pinCode}>
              {/* <input type="text" placeholder="Enter your City" />
              <Link href="#">Find it</Link> */}
              <form onSubmit={handlerFormSubmit}>
                <Typeahead
                  id="city-typeahead"
                  labelKey="label"
                  onChange={handleChange}
                  onInputChange={(e) => getCities(e)}
                  options={city}
                  placeholder="Enter your City"
                  emptyLabel="Enter your City"
                />
                <Link href="#">Find it</Link>
              </form>
            </div>
            <div className={styles.planDeals} style={{ backgroundColor: provider_top_banner_color }}>
              <div className={styles.headWhite}>
                Compare broadband, TV & phone deals
              </div>
              <Link href="#" className={styles.btnDeals}>
                Broadband Deals
              </Link>
              <Link href="#" className={styles.btnDeals}>
                Fibre Broadband Deals
              </Link>
              <Link href="#" className={styles.btnDeals}>
                Fastest Broadband Deals
              </Link>
              <Link href="#" className={styles.btnDeals}>
                Broadband and TV Deals
              </Link>
              <Link href="#" className={styles.btnDeals}>
                Broadband only Deals
              </Link>
            </div>
          </div>
          <div className={styles.clear}></div>
        </div>
      </section>
      {/* <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div className={styles.headRed}>
            Checkout latest deals from provider
          </div>
        </div>
      </section> */}
      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div>
            <div className={styles.head}>Frequently asked questions</div>
            <p dangerouslySetInnerHTML={{__html: faq}} />
            
          </div>
          <div className={styles.clear}></div>
        </div>
      </section>
      <section className={`${styles.MancheeringBg} ${styles.broadband}`}>
        <div className={styles.wrapContainer}>
          <div>
                <div className={`${styles.headBlack} ${styles.textCenter}`}>
                    Watch more about high speed internet
                </div>
                <CountryBlogSection viewBlogData={viewBlogData} />
                
          </div>
          <div className={styles.clear}></div>
        </div>
      </section>
      
    </div>
  );
};

export default ProviderPageComponent;