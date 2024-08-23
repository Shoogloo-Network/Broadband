"use client"

import styles from './HomeSlider.module.scss';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import Select from 'react-select';
import { clientSide } from '../../config';
import { ApiHeaders } from '../../helpers/setheaders';
import { useRouter } from 'next/navigation';
import { generalsans, belfast } from '../../utils/fonts';
import { Typeahead } from 'react-bootstrap-typeahead';
import debounce from 'lodash.debounce';

import SpeedTest from '../../Components/Header/SpeedTest'

const HomeSlider = ({ data, siteId = 1 }: any) => {
  const filterBy = () => true;

  const [city, setCity] = useState([]);
  const [selectedOption, setSelectedOption]: any = useState(null);
  const router = useRouter();
  const showHeader = data.hide ? false : true;
  const tagline =
    data && data.tagline && data.tagline !== '' ? data.tagline : '';
  const headline =
    data && data.headline && data.headline !== '' ? data.headline : '';
  const desc = data && data.desc && data.desc !== '' ? data.desc : '';
  const stat1 = data && data.stat1 && data.stat1 !== '' ? data.stat1 : '';
  const stat1label =
    data && data.stat1label && data.stat1label !== '' ? data.stat1label : '';
  const stat2 = data && data.stat2 && data.stat2 !== '' ? data.stat2 : '';
  const stat2label =
    data && data.stat2label && data.stat2label !== '' ? data.stat2label : '';
  const formShow =
    data && data.formShow && data.formShow !== '' ? data.formShow : false;

  const fetchAllCity = async () => {
    
  };

  const handleDebounceFn = async (query: string) => {
    if(!query) return;

    // axios call;
    const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}/admin/city/searchByName?name=${query}`;
    //const reqHeadersHost: any = window.location.host;
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
      router.push(`/${'in'}/broadband-plans/${cityname}`);
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
      router.push(`/${'in'}/broadband-plans/${cityname}`);
    } else {
      alert('Please choose city name');
    }
  };
  useEffect(() => {
    if (formShow) {
      fetchAllCity();
    }
  }, [formShow]);
  
  return (
    <section className={`blackBg ${generalsans.className}`}>
      {!!showHeader ? (
        <div className={`${styles.sliderWrap} wrapContainer`}>
          <div className={`${styles.topSecBtn} ${generalsans.className}`}>
            <button>{tagline}</button>
          </div>
          <div className={styles.ltsize}>
            <h2 className={belfast.className}>{headline}</h2>
            <p className={generalsans.className}>{desc}</p>
          </div>
          {formShow ? (
            <div className={styles.topForm}>
              <form onSubmit={handlerFormSubmit}  className={styles.chooseInput}>
                <div className={styles.formGroup}>
                  <div className={styles.serachCity}>
                    <Typeahead
                      id="city-typeahead"
                      labelKey="label"
                      onChange={handleChange}
                      onInputChange={(e) => {
                        getCities(e)
                      }}
                      options={city}
                      placeholder="Choose your location"
                    />
                  </div>
                  <button type="submit" className={styles.submitForm}>
                    Find Providers
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ''
          )}
          <div className='speed-testbox'>
            <SpeedTest />
          </div>
          {stat1 != '' && stat1label != '' ? (
            <div className={styles.sliderBottomWrap}>
              <h2>
                {stat1}
                <span>{stat1label}</span>
              </h2>
              {stat2 != '' && stat2label != '' ? (
                <h2>
                  {stat2}
                  <span>{stat2label}</span>
                </h2>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default HomeSlider;
