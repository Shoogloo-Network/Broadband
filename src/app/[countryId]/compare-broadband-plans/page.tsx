import React from 'react'
import { Metadata, ResolvingMetadata } from 'next';

import { API_PAGE_KEY_BASE, API_PLAN_PATH, api } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';
import CompareBroadbandComp from '@/Components/CompareBroadbandComp';

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const pageSiteId = searchParams.pageSiteId;
    
    const APIURL_META = `${api.API_URL}${API_PAGE_KEY_BASE}comparebroadband?status=1`;
    const options = await ApiHeaders(pageSiteId, 'GET');
  
    const resp = await fetch(APIURL_META, options);
    const result = await resp.json();
  
    const meta = result?.payload?.value
            ? JSON.parse(result.payload.value)
            : { hide: true };
   
    return {
      title: meta.meta_title,
      description: meta.meta_description,
      keywords: meta.meta_keyword
    }
}

const getCompareData = async (pageSiteId: any) => {
    try {

        const APIURL = `${api.API_URL}${API_PLAN_PATH}`;
        const APIURL_META = `${api.API_URL}${API_PAGE_KEY_BASE}comparebroadband?status=1`;

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
            props: {
              data: [],
              meta: [],
            },
        };
    }
}
  

const CompareBroadbandPlans = async ({ searchParams }: any) => {

    const { pageSiteId }: any = searchParams;

    const { data, meta } = await getCompareData(pageSiteId);

    return (
        <CompareBroadbandComp 
            siteId={pageSiteId}
            data={data}
            meta={meta}
        />
    )
}

export default CompareBroadbandPlans