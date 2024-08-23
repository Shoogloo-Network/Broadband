import Head from 'next/head';
import { headers } from 'next/headers';

import { API_PAGE_KEY_BASE, api } from "@/config";
import { ApiHeaders } from '@/helpers/setheaders';
import type { Metadata, ResolvingMetadata } from 'next';
import AboutUsPage from '@/Components/AboutPage';

interface MyPageProps {
  data: any; // Adjust the type according to your data structure
}
export const dynamic = 'auto'

const getAboutPageServer = async () => {
  try {

    const headersList = headers();
    const reqHeadersHost: any = headersList.get('host');
    const APIURL = `${api.API_URL}${API_PAGE_KEY_BASE}aboutus`;
    const options = await ApiHeaders(reqHeadersHost, 'GET');
    const response = await fetch(APIURL, options);
    if (response && response.status !== 200) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    return data?.payload?.value
      ? JSON.parse(data.payload.value)
      : { hide: true };

  } catch (error) {
    return [];
  }
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const APIURL_META = `${api.API_URL}${API_PAGE_KEY_BASE}aboutus`;
  const options = await ApiHeaders(8, 'GET');

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

const AboutUs = async (props: any) => {
  const data: any = await getAboutPageServer();

  return (
    <>
      {/* <AboutUsPage data={data} /> */}
    </>
  );
};

export default AboutUs;
