import type { Metadata, ResolvingMetadata } from 'next';

import React from 'react'

import { API_PAGE_KEY_BASE, API_CHEAPESTPLAN_PATH, api } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';
import CheapestPlansComponent from '@/Components/CheapestPlans/CheapestPlansComponent';

export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<Metadata> {

  // read route params
  const pageSiteId = searchParams.pageSiteId;

  const APIURL_META = `${api.API_URL}${API_PAGE_KEY_BASE}cheapestplan`;
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


const CheapestPlans = ({ searchParams, params }: any) => {


  return (

    <CheapestPlansComponent
      searchParams={searchParams}
      params={params}
    />
  )
}

export default CheapestPlans;