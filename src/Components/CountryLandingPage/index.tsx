"use client"

import React, { useContext, useEffect, useState } from 'react'
// import HomeSlider from '../HomeSlider'
// import TopServiceComponents from '../TopService'
// import LatestOfferComponents from '../LatestOffer'
// import ComparePlansComponents from '../ComparePlans'
// import HowItWorksComponents from '../HowItWorks'
// import HowToCompareComponents from '../HowToCompare'
// import HomepageSection from '../HomepageSection'
// import NewsLetterSubscribe from '../Newsletter'
// import GuideSectionComponents from '../GuideSection'
import { SiteIdContext } from '@/context/SiteIdContextProvider'
import CountryComponent from '../Country'

const CountryLandingPage = ({ data, siteId }: any) => {

    const { updateSiteId }: any = useContext(SiteIdContext);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true)
    }, [])

    useEffect(() => {
        updateSiteId(siteId);
    }, [])

    const LatestPlanOfferSet =
    data.latestOfferPlan && data.latestOfferPlan.length > 0
      ? data.latestOfferPlan.slice(0, 6)
      : [];

    const LatestPlanOfferSetFull =
    data.latestOfferPlan && data.latestOfferPlan.length > 0
      ? data.latestOfferPlan
      : [];


      if(!isClient) return null;

      return (
        <>
          <CountryComponent
            siteId={siteId ? siteId : 8}
            topProviders={data.topProviders ? data.topProviders : null}
            serviceData={LatestPlanOfferSet ? LatestPlanOfferSet : null}
            serviceDataFull={LatestPlanOfferSetFull ? LatestPlanOfferSetFull : null}
            />
        </>
      )
}

export default CountryLandingPage