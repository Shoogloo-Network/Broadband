"use client"

import React, { useContext, useEffect } from 'react'
import { useQuery } from 'react-query';

import { SiteIdContext } from '@/context/SiteIdContextProvider';

import HomeSlider from '@/Components/HomeSlider';
import TopAdComponents from '@/Components/Ad/TopAd';
import ProductSecComponents from '@/Components/ProductSec';

import { clientSide } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';
import ServiceBoxComponents from '@/Components/ProductSec/ServiceBox';
import { UseServiceppContext } from '@/ContextAPI/Context';

const CheapestPlansComponent = ({ searchParams, params }: any) => {

  const { pageSiteId }: any = searchParams;
  const { providerName }: any = params;
  const { updateSiteId }: any = useContext(SiteIdContext);

  let storeData: any = UseServiceppContext();
  const { dispatch } = storeData;

  const { data, isLoading, isError, error }: any = useQuery("get-high-speed-plans", async () => {

    try {

      const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_API_CHEAPESTPLAN_PATH}`;
      const APIURL_META = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_API_PAGE_KEY_BASE}cheapestplan`;
      const options = await ApiHeaders(pageSiteId, 'GET');

      const [response1, response2] = await Promise.all([
        fetch(APIURL, options),
        fetch(APIURL_META, options),
      ]);

      let data1: any = null;
      let data2: any = null;

      if (response2 && response2.status === 200) {
        data2 = await response2.json();
      }

      if (response1 && response1.status === 200) {
        data1 = await response1.json();
      }

      return {
        data: data1?.payload || [],
        meta: data2?.payload?.value
          ? JSON.parse(data2.payload.value)
          : { hide: true },
      };

    } catch (error: any) {
      console.log("error", error);
      return {
        data: [],
        meta: [],
      };
    }

  });

  useEffect(() => {
    updateSiteId(pageSiteId);
  }, [])

  useEffect(() => {
    dispatch({
      type: 'SET_PRODUCT_DATA',
      payload: data ? data.data : [],
    });
  }, [dispatch, data]);

  if (isLoading) return <>Loading...</>
  if (isError) return <>{error.message}</>

  if (data.data.length < 1) {
    return (
      <section className="wrapContainer">
        <ServiceBoxComponents nodata="nodata" />
      </section>
    )
  }

  return (
    <>
      <div className="productSliderWrap">
        <HomeSlider data={data.meta} />
      </div>
      <section className="wrapContainer">
        <div className="serviceTopWrap">
          <TopAdComponents
            siteId={pageSiteId}
          />
        </div>
        <ProductSecComponents products={data.data} />
      </section>
    </>
  )
}

export default CheapestPlansComponent

