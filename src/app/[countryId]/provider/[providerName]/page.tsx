
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { api, API_BROADBAND_PROVIDER_BY_NAME, API_PAGE_KEY_BASE } from '@/config'
import { ApiHeaders } from '@/helpers/setheaders'

import ProviderListDataPages from '@/Components/ProviderListPage'
import TopProviderBox from '@/Components/TopProviderBox'
import ServiceBoxComponents from '@/Components/ProductSec/ServiceBox'
import LoaderComponent from '@/Components/Loader'
import ProviderPageComponent from '@/Components/ProviderPage/ProviderPageComponent'
import ProductSecComponents from '@/Components/ProductSec'

const getProviderData = async (pageSiteId: any, providerName: any) => {
  try {

    const APIURL = `${api.API_URL}${API_BROADBAND_PROVIDER_BY_NAME}/${providerName}`;
    const options = await ApiHeaders(pageSiteId, 'GET');
    const response = await fetch(APIURL, options);
    const resData = await response.json();
    if (resData && resData.statusCode == 200) {
      return resData.payload;
    } else{
      console.error(`Error fetching data: ${resData.statusCode}`);
      return [];
    }
    
  } catch (error: any) {
    console.log("error", error);
    throw new Error(`Error : ${error.message}`)
  }
}

export async function generateMetadata( 
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const pageSiteId = searchParams.pageSiteId;
  const { providerName }: any = params;
  
  const APIURL_META = `${api.API_URL}${API_BROADBAND_PROVIDER_BY_NAME}/${providerName}`;
  const options = await ApiHeaders(pageSiteId, 'GET');

  const resp = await fetch(APIURL_META, options);
  const result = await resp.json();

  const meta = result?.payload && result?.payload.length
          ? result.payload[0].provider
          : { hide: true };

  return {
    title: meta.meta_title || 'Broadband.asia',
    description: meta.meta_description || 'Broadband.asia | Compare all broadband plans',
    keywords: meta.meta_keyword || 'broadband.asia, compare plans'
  }
}

const ProviderPage = async ({ searchParams, params }: any) => {

  const { pageSiteId }: any = searchParams;
  const { providerName }: any = params;
  
  const data = await getProviderData(pageSiteId, providerName);
 
  if(data && !data.length) {
    return (
      <section className="wrapContainer">
        <ServiceBoxComponents nodata="nodata" />
      </section>
    )
  }

  //const leftProviderData = (data && data[0] && data[0].provider) || '';
  return (
    <>
        
      <ProviderPageComponent 
        data={data}
        providerName={providerName}
        pageSiteId={pageSiteId}
      />
   
      {/* <section className="wrapContainer">
        {leftProviderData ? (
        <TopProviderBox 
          details={leftProviderData}
        />
        ) : null}
        {data ? (
          <ProviderListDataPages
            providerData={data || ""}
          />
        ) : (
          <LoaderComponent />
        )}
        
      </section> */}
    </>
  )
}

export default ProviderPage