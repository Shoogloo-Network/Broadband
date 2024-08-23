"use client"
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useParams, useRouter } from "next/navigation";

import { Typeahead } from 'react-bootstrap-typeahead';
import styles from "./country.module.scss";
import SliderCountry from "@/Components/Slider/sliderCountry";
import compareBroadband from "/public/assets/plans/compare-broadband.png";
import BroadbandPlan from "/public/assets/plans/Bar01.png";
import STBcard from "/public/assets/plans/STBcard.png";
import Highspeed from "/public/assets/plans/High-speed.png";
// import Mumbai from "/public/assets/plans/mumbai.png";
// import DelhiNCR from "/public/assets/plans/ncr.png";
// import Bengaluru from "/public/assets/plans/bang.png";
// import Hyderabad from "/public/assets/plans/hyd.png";
// import Ahmedabad from "/public/assets/plans/ahd.png";
// import Chandigarh from "/public/assets/plans/chen.png";
// import Chennai from "/public/assets/plans/chen.png";
// import Pune from "/public/assets/plans/pune.png";
// import Kolkata from "/public/assets/plans/kolk.png";
// import Kochi from "/public/assets/plans/koch.png";
import Choose from "/public/assets/plans/TopInternetSpeed.png";
import Choose2 from "/public/assets/plans/Satisfiedcustomer.png";
import Choose3 from "/public/assets/plans/unlimitedsurfing.png";

import AccordionCountry from "@/Components/Accordion/AccordionCountry";
import ProductSecComponents from "../ProductSec";
import ServiceBoxComponents from "../ProductSec/ServiceBox";
import LatestOfferComponents from "../LatestOffer";
import debounce from "lodash.debounce";
import { clientSide } from "@/config";
import { ApiHeaders } from "@/helpers/setheaders";
import CountryBlogSection from "../CountryBlogSection";

const CountryComponent = ({ serviceData, serviceDataFull, topProviders, siteId, viewBlogData }: any) => {

  const router = useRouter();
  const { countryId } = useParams();
  const initialContent =
  "Every TV will now be SMART! Jio Set-top box brings together 550+ on-demand live channels, thousands of videos and movies, OTT content from 16+ OTT apps, 200+ apps from JioStore, and 150+ interactive games in one place.OTT content from 16+ OTT apps, 200+ apps from JioStore, and 150+ interactive games in one place.200+ apps from JioStore, and 150+ interactive games in one place.200+ apps from JioStore, and 150+ interactive games in one place.";
  
  const [city, setCity] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [country, setCountry] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);
  const [displayContent, setDisplayContent] = useState(
    initialContent.slice(0, 200)
  );
  const [selectedOption, setSelectedOption]: any = useState(null);

  const handleToggle = () => {
    setShowMore(!showMore);
    setDisplayContent(showMore ? initialContent.slice(0, 200) : initialContent);
  };

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
  const debounceFn2 = useMemo(() => debounce(handleDebounceFn, 300), []);

  const getCities = (cityName: string) => {
    debounceFn(cityName)
  }
  const getCities2 = (cityName: string) => {
    debounceFn2(cityName)
  }

  const getFilteredData = (parsedData: any, sortOrder: any) => {
    let filterItOut = parsedData.filter((item: any) => item.sortingOrder == sortOrder && item.status ===1)
    return filterItOut.length ? filterItOut[0].description : '';
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
  const handleChange2 = (selected: any) => {
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
  const handlerFormSubmit2 = (e: any) => {
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
    async function getCountryName () {
      const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}/admin/country/list`;
      const options = await ApiHeaders(siteId, 'GET');
      const data = await fetch(APIURL, options);
      const resData = await data.json();

      if (resData.payload) {
        let foundCountry = resData.payload.filter((country: any) => country.siteId == siteId);
        setCountry(foundCountry[0]);
      }
    }

    getCountryName();
  }, [siteId])

  useEffect(() => {
    async function widardData() {
      let response = await fetch(`https://www.parislondrestrain.fr/admin/wizard/list`, {
        headers: {
          "siteId": siteId,
          "projectId": ""
        }
      })
 
      let result = await response.json();

      if(result.payload) {

        let filteredPageData = result.payload.filter((item: any) => item.entityId == 0);
        setPageData(filteredPageData);
      }
    }
    widardData();
  }, [])
 

  return (
    <div>
      
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
      <section className={styles.planBg}>
        <div className={styles.planHead}>
          FIND YOUR PERFECT
          <br />
          INTERNET PLAN IN {country?.name}
        </div>
        <p className={styles.cityPara}>
          Broadband.asia helps you search and compare hundreds of different <br />
          Broadband Internet plans so that you can choose the best package for <br />
          your Home or Office!
        </p>
        

        <form className={styles.findPlace} onSubmit={handlerFormSubmit}>
          <Typeahead
            id="city-typeahead"
            labelKey="label"
            onChange={handleChange2}
            onInputChange={(e) => getCities(e)}
            options={city}
            placeholder="Choose your location"
            emptyLabel="Choose your location"
          />
          <Link href="#">Find Your Place</Link>
        </form>

        {/* <div className={styles.findLocation}>
          <div className={styles.locationTxt}>Detect my location</div>
          <div className={styles.locationIcon}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.65 1.5C11.65 1.08579 11.3142 0.75 10.9 0.75C10.4858 0.75 10.15 1.08579 10.15 1.5V3.68832C6.7449 4.03827 4.03831 6.74487 3.68835 10.15H1.5C1.08579 10.15 0.75 10.4858 0.75 10.9C0.75 11.3142 1.08579 11.65 1.5 11.65H3.68835C4.03831 15.0551 6.7449 17.7617 10.15 18.1117V20.5C10.15 20.9142 10.4858 21.25 10.9 21.25C11.3142 21.25 11.65 20.9142 11.65 20.5V18.1117C15.0551 17.7617 17.7617 15.0551 18.1117 11.65H20.5C20.9142 11.65 21.25 11.3142 21.25 10.9C21.25 10.4858 20.9142 10.15 20.5 10.15H18.1117C17.7617 6.74487 15.0551 4.03827 11.65 3.68832V1.5ZM5.15002 10.9C5.15002 7.72436 7.72439 5.14999 10.9 5.14999C14.0757 5.14999 16.65 7.72436 16.65 10.9C16.65 14.0756 14.0757 16.65 10.9 16.65C7.72439 16.65 5.15002 14.0756 5.15002 10.9ZM8.45001 10.9C8.45001 9.5469 9.54691 8.45 10.9 8.45C12.2531 8.45 13.35 9.5469 13.35 10.9C13.35 12.2531 12.2531 13.35 10.9 13.35C9.54691 13.35 8.45001 12.2531 8.45001 10.9ZM10.9 6.95C8.71849 6.95 6.95001 8.71847 6.95001 10.9C6.95001 13.0815 8.71849 14.85 10.9 14.85C13.0815 14.85 14.85 13.0815 14.85 10.9C14.85 8.71847 13.0815 6.95 10.9 6.95Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div> */}
        <div className={styles.PopularCitiesBox}>
          <div className={styles.PopularCities}>
            <div className={styles.PopularCitiesinner}>
             <span className={styles.PopularCitieshead}>Popular Cities</span>
             {/* <ul className={styles.PopularCitieslist}
               dangerouslySetInnerHTML={{ __html: popCities.description }}
             />   */}
             <div 
                dangerouslySetInnerHTML={{
                  __html: getFilteredData(pageData, 1)
                }}
             />
            </div>
          </div>
        </div>
        <div className={styles.clear}></div>
      </section>

      <section className={`${styles.broadband} ${styles.pb0}`}>
        <div className={styles.wrapContainer}>
          <div className={styles.head}>Top Providers in Country</div>
          <div>
            <SliderCountry topProviders={topProviders} />
          </div>
          <p 
            dangerouslySetInnerHTML={{
              __html: getFilteredData(pageData, 2)
            }}
          />
          {/* <p className={styles.mt24}>
          We have compiled all the latest broadband plan in {country?.name} and have made the job of choosing your perfect internet plan easy for you!
        You can search and use our filters to finalise the best deal for your new broadband internet connection or maybe plan an upgrade.
        Still not able to find the best plan? Click here to get our team in touch with you
          </p> */}
        </div>
      </section>
 
      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div className={styles.head}>Top Broadband Plans in {country?.name}</div>
          <div>
            {serviceDataFull ? (
              <ProductSecComponents products={serviceDataFull} />
            ) : (
              <ServiceBoxComponents nodata="nodata" />
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: getFilteredData(pageData, 3)
            }}
          />
        </div>
        <div className={styles.BroadbandPlan}>
          <Link href="#">
            <Image src={BroadbandPlan} alt={`Icon`} />
          </Link>
        </div>
      </section>
      <section className={`${styles.broadband}`}>
        <div className={styles.wrapContainer}>
          <div 
            dangerouslySetInnerHTML={{
              __html: getFilteredData(pageData, 4)
            }}
          />
          <div className={styles.chooseUs}>
            <div className={styles.chooseUsInner}>
              <div
                dangerouslySetInnerHTML={{
                  __html: getFilteredData(pageData, 5)
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.clear}></div>
      </section>


      <section className={styles.broadband}>
        <div className={styles.wrapContainer}>
          <div className={styles.col7}>
            <div 
              dangerouslySetInnerHTML={{
                __html: getFilteredData(pageData, 6)
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
              {/* <input type="text" placeholder="Enter your City" /> */}
              <form onSubmit={handlerFormSubmit2}>
                <Typeahead
                  id="city-typeahead2"
                  labelKey="label"
                  onChange={handleChange}
                  onInputChange={(e) => getCities2(e)}
                  options={city}
                  placeholder="Enter your City"
                  emptyLabel="Enter your City"
                />
                <Link href="#">Find it</Link>
              </form>
              <div className={styles.clear}></div>
            </div>
            <div className={styles.planDeals}>
              <div 
                dangerouslySetInnerHTML={{
                  __html: getFilteredData(pageData, 7)
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
          {/* <div className={styles.blogBox}>
            <div className={styles.blogBoxlist}>
              <div>
                <Image src={STBcard} alt={`Icon`} />
              </div>
              <div className={styles.date}>31/10/2023</div>
              <div className={styles.text}>
                Watch and learn how to install Jio Set-top Box in 3 easy steps
              </div>
              <div className={styles.date}>NBN</div>
            </div>
            <div className={styles.blogBoxlist}>
              <div>
                <Image src={Highspeed} alt={`Icon`} />
              </div>
              <div className={styles.date}>30/10/2023</div>
              <div className={styles.text}>
                Use voice commands on JioRemote to control your TV
              </div>
              <div className={styles.date}>NBN</div>
            </div>
            <div className={styles.blogBoxlist}>
              <div>
                <Image src={STBcard} alt={`Icon`} />
              </div>
              <div className={styles.date}>24/10/2023</div>
              <div className={styles.text}>
                Watch and learn how to install Jio Set-top Box in 3 easy steps
              </div>
              <div className={styles.date}>Latest News</div>
            </div>
            <div className={styles.blogBoxlist}>
              <div className={styles.date}>16/10/2023</div>
              <div className={styles.text}>
                Use voice commands on JioRemote to control your TV
              </div>
              <div className={styles.txtreadMore}>{displayContent}</div>
              {initialContent.length > 200 && (
                <button onClick={handleToggle} className={styles.toggleButton}>
                  {showMore ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div> */}
        </div>
        <div className={styles.clear}></div>
      </section>
      <section className={styles.broadband}>
        <div className={styles.wrapContainer}
          dangerouslySetInnerHTML={{
            __html: getFilteredData(pageData, 8)
        }}
        />
        <div className={styles.clear}></div>
      </section>

      <LatestOfferComponents data={serviceData} />
      <div className={styles.mb24}></div>
      {/* <section className={styles.faq}>
        <div className={styles.wrapContainer}>
          <div className={`${styles.head} ${styles.mb12}`}>Faq</div>
          <AccordionCountry />
          <div 
            dangerouslySetInnerHTML={{
              __html: getFilteredData(pageData, 9)
            }}
          />
        </div>
        <div className={styles.clear}></div>
      </section> */}
    </div>
  );
};

export default CountryComponent;
