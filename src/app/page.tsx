
import type { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers';

import { API_PAGE_KEY_BASE, API_PLAN_LATEST_OFFER, API_PLAN_TOP_PROVIDERS, api } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';
import CustomeLandingPage from '@/Components/CustomeLandingPage';
import Head from 'next/head';

export const dynamic = 'auto';

const getLandingPageData = async () => {
  try {
    const headersList = headers();
    // /api/blog
    const reqHeadersHost: any = headersList.get('host');

    const blogViewPostAPIURLOrigin =
      reqHeadersHost == 'localhost:3000' || 'localhost:3001' ? 'http://' : 'https://';

    const APIURL_TOPSLIDER = `${api.API_URL}${API_PAGE_KEY_BASE}homepage`;
    const APIURL_LATEST_OFFER = `${api.API_URL}${API_PLAN_LATEST_OFFER}`;
    const APIURL_TOP_PROVIDERS = `${api.API_URL}${API_PLAN_TOP_PROVIDERS}`;
    const APIURL_BLOGView = `${blogViewPostAPIURLOrigin}${reqHeadersHost}/api/blog`;
    const options = await ApiHeaders(8, 'GET');
    
    //const resp = fetch(APIURL_TOP_PROVIDERS, options);
    const [response1, response2, response3, response4] = await Promise.all([
      fetch(APIURL_TOPSLIDER, options),
      fetch(APIURL_LATEST_OFFER, options),
      fetch(APIURL_TOP_PROVIDERS, options),
      fetch(APIURL_BLOGView),
    ]);

    let topSlider: any = null;
    let latestOffer: any = null;
    let topProviders: any = null;
    let blogPostData: any = null;

    if (response1 && response1.status === 200) {
      topSlider = await response1.json();
    }

    if (response2 && response2.status === 200) {
      latestOffer = await response2.json();
    }

    if (response3 && response3.status === 200) {
      topProviders = await response3.json();
    }

    if (response4 && response4.status === 200) {
      blogPostData = await response4.json();
    }

    const payload = topSlider?.payload?.value
      ? JSON.parse(topSlider.payload.value)
      : { hide: true };
    payload['formShow'] = true;

    return {
      topSlider: payload,
      latestOfferPlan: latestOffer?.payload || null,
      topProviders: topProviders?.payload || null,
      blogData: blogPostData || [],
      //blogData: [],
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      topSlider: [], // Set data to null or an appropriate default value
      latestOfferPlan: [],
      topProviders: [],
      blogData: [],
    }
  }
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const pageSiteId = searchParams.pageSiteId;
  
  const APIURL_META = `${api.API_URL}${API_PAGE_KEY_BASE}homepage`;
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

const Home = async (props: any) => {

  const data = await getLandingPageData();

  if(!data) return null;
  return (
    <>
      <CustomeLandingPage 
        viewBlogData={data.blogData} 
        topSlider={data.topSlider} 
        siteId={props.searchParams.pageSiteId}
      />
    </>
  )
}

export default Home;