import { clientSide } from '@/config';

const fetchDomains = async () => {
  const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_API_DOMAIN_LIST}`;
  const data = await fetch(APIURL, {
    headers: { 'Content-Type': 'application/json', "cache": "0" },
  });
  const resData = await data.json();
  if (resData && resData.payload) {
    // Drop in cookies
    return resData.payload;
  }
};

const getSiteId = async (countryCode: string) => {
  //Check if availbale in cookies else use fetchDomain
  if(!countryCode) {
    return;
  }
  const domain_list = await fetchDomains();
  let filteredDomain = domain_list.filter((item: any) => item.id == countryCode);
  // let filterDomainList = domain_list.filter(function (item: any) {
  //   return item.domainName == reqHeadersHost;
  // });

  return filteredDomain.length ? filteredDomain[0].id : 8;
};

export const ApiHeaders = async (countryCode: any, method: string) => {
  if(!countryCode) return;

  const SITE_ID: any = await getSiteId(countryCode);
  const headers = {
    'Content-Type': 'application/json',
    cache:'no-cache',
    Projectid: '3',
    Siteid: SITE_ID,
  };

  const options: RequestInit = {
    method: method,
    headers: headers,
  };
  return options;
};
