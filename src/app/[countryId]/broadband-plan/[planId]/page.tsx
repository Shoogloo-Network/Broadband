import React from 'react'
import { Metadata, ResolvingMetadata } from 'next';

import { API_SINGLE_PLAN_DETAILS_NEW, API_REVIEW_FIND_WITH_ID, api } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';

import BroadbandPlanPageComponent from '@/Components/BroadbandPlanPageComponent'
import ServiceProvider from '@/Components/ServiceProviders';

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const pageSiteId = searchParams.pageSiteId;
    console.log("hhhhhhhh",pageSiteId);
    const { planId }: any = params;
    
    const APIURL_META = `${api.API_URL}${API_SINGLE_PLAN_DETAILS_NEW}/${planId}`;
    const options = await ApiHeaders(pageSiteId, 'GET');
  
    const resp = await fetch(APIURL_META, options);
    const result = await resp.json();

    const meta = result?.payload?.broadBand
            ? result.payload.broadBand
            : { hide: true };
  
    
   
    return {
      title: meta.meta_title || `Broadband.asia | ${planId}`,
      description: meta.meta_description || 'Broadband.asia | Compare all broadband plans',
      keywords: meta.meta_keyword || 'broadband.asia, compare plans'
    }
}

const getPlanDetails = async (pageSiteId: any, planId: any) => {
    try {

        const APIURL = `${api.API_URL}${API_SINGLE_PLAN_DETAILS_NEW}/${planId}?status=1`;
        const options = await ApiHeaders(pageSiteId, 'GET');
        const response = await fetch(APIURL, options);
        const resData = await response.json();
        if (resData && resData.statusCode == 200) {
          return resData.payload;
        } 
    
        return [];
        
      } catch (error: any) {
        console.log("error", error);
        throw new Error(`Error : ${error.message}`)
      }
}

const BroadbandPlanPage = async ({ searchParams, params }: any) => {

    const { pageSiteId }: any = searchParams;
    //const pageSiteId = 3;
    const { planId }: any = params;

    const data = await getPlanDetails(pageSiteId, planId);

    return (
        <>
            <ServiceProvider 
                providerId={planId}
                data={data}
                reviews={[]}
            />
            {/* <BroadbandPlanPageComponent 
                planId={planId}
                serviceData={data}
                pageSiteId={pageSiteId}
            /> */}
        </>
    )
}

export default BroadbandPlanPage