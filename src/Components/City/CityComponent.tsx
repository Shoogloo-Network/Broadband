"use client"

import Script from "next/script";
import { useState, useEffect, useMemo, useContext } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Typeahead } from 'react-bootstrap-typeahead';
import styles from "./city.module.css";
import compareBroadband from "/public/assets/plans/compare-broadband.png";
import BroadbandPlan from "/public/assets/plans/Bar01.png";
import STBcard from "/public/assets/plans/STBcard.png";
import Highspeed from "/public/assets/plans/High-speed.png";
import AccordionCity from '@/Components/Accordion/AccordionCity';
import ProductSecComponents from "../ProductSec";
import ServiceBoxComponents from "../ProductSec/ServiceBox";
import LatestOfferComponents from "../LatestOffer";
import CountryBlogSection from "../CountryBlogSection";
import { ApiHeaders } from "@/helpers/setheaders";
import { clientSide } from "@/config";
import debounce from "lodash.debounce";
import { SiteIdContext } from "@/context/SiteIdContextProvider";


const CityComponent = ({ cityName, serviceData, pageSiteId, viewBlogData }: any) => {

  console.log("serviceData",serviceData);
  const router = useRouter();
  const { countryId } = useParams();
  const [siteId, setSiteId] = useState(pageSiteId);
  const formattedName = serviceData.city.name

  const initialContent =
  "Every TV will now be SMART! Jio Set-top box brings together 550+ on-demand live channels, thousands of videos and movies, OTT content from 16+ OTT apps, 200+ apps from JioStore, and 150+ interactive games in one place.OTT content from 16+ OTT apps, 200+ apps from JioStore, and 150+ interactive games in one place.200+ apps from JioStore, and 150+ interactive games in one place.200+ apps from JioStore, and 150+ interactive games in one place.";
  
  const [city, setCity] = useState([]);
  const [selectedOption, setSelectedOption]: any = useState(null);

  const [showMore, setShowMore] = useState(false);
  const [displayContent, setDisplayContent] = useState(
    initialContent.slice(0, 200)
  );

  const { siteId: pagginId , updateSiteId }: any = useContext(SiteIdContext);

  const handleToggle = () => {
    setShowMore(!showMore);
    setDisplayContent(showMore ? initialContent.slice(0, 200) : initialContent);
  };
  
  const LatestPlanOfferSet =
    serviceData.broadBandList && serviceData.broadBandList.length > 0
    ? serviceData.broadBandList.slice(0, 6)
    : [];

  const [pageData, setPageData] = useState([]);
  const [cityId, setCityId] = useState([]);

  const getFilteredData = (parsedData: any, sortOrder: any) => {
    let filterItOut = parsedData.filter((item: any) => item.sortingOrder == sortOrder)
    return filterItOut.length ? filterItOut[0].description : '';
  }

  const handleDebounceFn = async (query: string) => {
    
    if(!query) return;
    // axios call;
    const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}/admin/city/searchByName?name=${query}`;
    const options = await ApiHeaders(siteId, 'GET');
    const data = await fetch(APIURL, options);
    const resData = await data.json();
    if (resData && resData.payload) {
      let cities = resData.payload.map((item: any) => {
        console.log("=====================",item.seoName);
        return { value: item.seoName, label: item.name };
      });
      setCity(cities);
    }
  
  };

  useEffect(() => {
    async function widardData() {
      // to get cityID
      let res = await fetch (`https://www.parislondrestrain.fr/admin/city/searchByName/${cityName}`, {
        headers: {
          "siteId": pageSiteId,
          "projectId": ""
        }
      })
      let ris = await res.json();
      if (ris.payload){
        setCityId(ris?.payload[0]?.id)
      }
      
      // wiz list
      let response = await fetch(`https://www.parislondrestrain.fr/admin/wizard/list`, {
        headers: {
          "siteId": pageSiteId,
          "projectId": ""
        }
      })

      let result = await response.json();

      if(result.payload) {

        let filteredPageData = result.payload.filter((item: any) => item.entityId == cityId);
        setPageData(filteredPageData);
      }
    }
    widardData();
  }, [cityId])


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

  useEffect(() => {
    updateSiteId(pageSiteId);
  }, [pagginId])

  return (
    <>
    <Script
        dangerouslySetInnerHTML={{
          __html: `
          function toggleContent(sectionId) {
            
            var allSections = document.querySelectorAll(".content-section");
            allSections.forEach(function (section) {
              section.classList.add("displayNone");
            });
        
            
            var selectedSection = document.getElementById(sectionId);
            selectedSection.classList.remove("displayNone");
          }
          `,
        }}
      />
    <div>

      <section className={styles.planBg}>
        <div className={styles.planHead}>
          Find the Best <br />
          Internet Plan in<span className={styles.fletterCap}> {formattedName.toUpperCase()} </span>
        </div>
        <p className={styles.cityPara}>
          Get the Best Broadband Deals in<span className={styles.fletterCap}> {formattedName} </span> and enjoy the
          <br />
          unlimited deals catered by various broadband companies
        </p>
        <div className={styles.clear}></div>
      </section>
      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div className={styles.head}>Find the Best Deals in<span className={styles.fletterCap}> {formattedName} </span></div>
          <div
            dangerouslySetInnerHTML={{
              __html: getFilteredData(pageData, 1)
            }}
          />
         
        </div>
      </section>

      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div className={styles.headBlack}>
            Various Popular Broadband Deals in your city
          </div>
          {serviceData.broadBandList ? (
            <ProductSecComponents products={serviceData.broadBandList} />
          ) : (
            <ServiceBoxComponents nodata="nodata" />
          )}
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
            <div
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 2)
              }}
            />
            
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
            <div className={styles.planDeals}>
              <div
                dangerouslySetInnerHTML={{
                  __html: getFilteredData(pageData, 3)
                }}
              />
              
            </div>
          </div>
          <div className={styles.clear}></div>
        </div>
      </section>
      <section className={`${styles.Mancheering} ${styles.broadband}`}>
        <div className={styles.wrapContainer}>
          <div className={`${styles.head} ${styles.textCenter}`}>
            Latest Guides & Articles
          </div>
          <CountryBlogSection viewBlogData={viewBlogData} />
          
        </div>
        <div className={styles.clear}></div>
      </section>
      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
        <div
            dangerouslySetInnerHTML={{
              __html: getFilteredData(pageData, 4)
            }}
          />
          
        </div>
        <div className={styles.clear}></div>
      </section>

      <LatestOfferComponents 
        data={LatestPlanOfferSet}
      />
      <div className={styles.mb24}></div>
      {/* <section className={styles.faq}>
        <div className={styles.wrapContainer}>
            <div className={`${styles.head} ${styles.mb12}`}>Faq</div>
            <AccordionCity />
            <div
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 6)
              }}
            />
        </div>
        <div className={styles.clear}></div>
      </section> */}
    </div>
  </>
  )
}

export default CityComponent

