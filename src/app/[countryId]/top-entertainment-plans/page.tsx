import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

import { API_PAGE_KEY_BASE, API_TOPENTPLAN_PATH, api } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';
import TopEntertainmentComponent from '@/Components/TopEntertainment';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const pageSiteId = searchParams.pageSiteId;
  
  const APIURL_META = `${api.API_URL}${API_PAGE_KEY_BASE}topentertainmentplan`;
  const options = await ApiHeaders(pageSiteId, 'GET');

  const resp = await fetch(APIURL_META, options);
  const result = await resp.json();

  const meta = result?.payload?.value
          ? JSON.parse(result.payload.value)
          : { hide: true };

  
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: meta.meta_title,
    description: meta.meta_description,
    keywords: meta.meta_keyword
  }
}


const TopEntertainmentPlans = ({ searchParams, params }: any) => {
  return (
    <>
      <TopEntertainmentComponent
        searchParams={searchParams}
        params={params}
      />
    </>
  )
}

export default TopEntertainmentPlans