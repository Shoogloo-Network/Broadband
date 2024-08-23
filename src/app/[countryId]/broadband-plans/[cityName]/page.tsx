import React from 'react'
import { Metadata, ResolvingMetadata } from 'next';

import { API_BROADBAND_PROVIDER_BY_NAME, API_FINDBY_CITY_NAME, api } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';

import CityComponent from '@/Components/City/CityComponent'
// import HomeSlider from '@/Components/HomeSlider';
// import TopAdComponents from '@/Components/Ad/TopAd';
// import ProductSecComponents from '@/Components/ProductSec';
// import ServiceBoxComponents from '@/Components/ProductSec/ServiceBox';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const pageSiteId = searchParams.pageSiteId;
  const { cityName }: any = params;

  const APIURL_META = `${api.API_URL}${API_FINDBY_CITY_NAME}/${cityName}?status=1`;
  const options = await ApiHeaders(pageSiteId, 'GET');

  const resp = await fetch(APIURL_META, options);
  const result = await resp.json();

  const meta = result?.payload?.city || { hide: true };

  return {
    title: meta.meta_title || `Broadband.asia | ${cityName}`,
    description: meta.meta_description || 'Broadband.asia | Compare all broadband plans',
    keywords: meta.meta_keyword || 'broadband.asia, compare plans'
  }
}

const getCityData = async (pageSiteId: any, cityName: any) => {
  try {

    const APIURL = `${api.API_URL}${API_FINDBY_CITY_NAME}/${cityName}?status=1`;
    const options = await ApiHeaders(pageSiteId, 'GET');
    const response = await fetch(APIURL, options);
    const resData = await response.json();
    if (resData && resData.statusCode == 200) {
      return {
        broadBandList: resData.payload.broadBandList,
        city: resData.payload.city
      }
    }

    return { broadBandList: [], city: null };

  } catch (error: any) {
    console.log("error", error);
    throw new Error(`Error : ${error.message}`)
  }
}

const CityMainPage = async ({ searchParams, params }: any) => {


  const { pageSiteId }: any = searchParams;
  //const pageSiteId = 3;
  const { cityName }: any = params;

  const changeTitleCase = (cityName: string) => {
    return cityName.charAt(0).toUpperCase() + cityName.slice(1);
  };

  const { broadBandList, city } = await getCityData(pageSiteId, cityName);
  const serviceData = { broadBandList, city };

  const meta = {
    tagline: 'rated #1 comparison site',
    headline: 'Broadband Plans in  ‘' + changeTitleCase(cityName) + '’',
    desc: 'Broadband.Asia Lets You Find And Compare All The Best Broadband Services and Deals Around You',
    formShow: false,
  };

  return (
    <>
      <CityComponent
        cityName={cityName}
        serviceData={serviceData}
        pageSiteId={pageSiteId}
      />

      {/* 
        <div className="productSliderWrap">
          <HomeSlider data={meta} siteId={pageSiteId} />
        </div>
        <section className="wrapContainer">
          <div className="serviceTopWrap">
            <TopAdComponents  siteId={serviceData[0].broadBand.siteId} />
          </div>
          
          {serviceData ? (
            <ProductSecComponents products={serviceData} />
          ) : (
            <ServiceBoxComponents nodata="nodata" />
          )}
        </section>
        */}
    </>
  )
}

export default CityMainPage