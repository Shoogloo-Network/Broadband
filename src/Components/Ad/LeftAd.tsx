import Link from 'next/link';
import TopAddImage from '/public/assets/ad/ad_broadband_left-in.png';
// import TopAddImage2 from '/public/assets/ad/ad_broadband_left-sg.png';
// import TopAddImage3 from '/public/assets/ad/ad_broadband_left-me.png';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { SiteIdContext } from '@/context/SiteIdContextProvider';


const LeftAdComponents = () => {
  const siteId = useContext(SiteIdContext);
  console.log("siteId", siteId);
  // if(siteId === 1) {
  //   return (
  //     <>
  //      <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // }else if(siteId === 3) {
  //   return (
  //     <>
  //      <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage2} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // }
  // else if(siteId === 11) {
  //   return (
  //     <>
  //       <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage3} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // }
  // else if(siteId === 12) {
  //   return (
  //     <>
  //      <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage3} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // }
  // else if(siteId === 13) {
  //   return (
  //     <>
  //       <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage3} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // }
  // else if(siteId === 14) {
  //   return (
  //     <>
  //      <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage3} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // }
  // else if(siteId === 15) {
  //   return (
  //     <>
  //      <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
  //        <Image src={TopAddImage3} alt={`Top Add`} width={300} height={230} />
  //      </Link>
  //     </>
  //   )
  // } else {
  //   return null;
  // }
  const [pageData, setPageData] = useState([]);
 
  const getFilteredData = (parsedData: any, sortOrder: any) => {
    let filterItOut = parsedData.filter((item: any) => item.sortingOrder == sortOrder)
    return filterItOut.length ? filterItOut[0].image : '';
  }
 
  useEffect(() => {
    async function widardData() {
      let response = await fetch(`https://www.parislondrestrain.fr/admin/wizard/list`, {
        headers: {
          "siteId":""+siteId?.siteId ,
          "projectId": ""
        }
      })
 
      let result = await response.json();
 
      if(result.payload) {
 
        let filteredPageData = result.payload.filter((item: any) => item.entityId == 0);
        setPageData(filteredPageData);
      }
    }
    widardData();
  }, [])
 
  console.log("PageData", pageData);
 
 console.log("image -------",getFilteredData);





  return (
    <>
      {/* <Link href="/provider/airtel-xstream-basic-plan/" className="ad320_400">
        <Image src={TopAddImage} alt={`Top Add`} width={300} height={230} />
      </Link> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: getFilteredData(pageData, 150)
        }}
      /> */}
    </>
  );
};

export default LeftAdComponents;
