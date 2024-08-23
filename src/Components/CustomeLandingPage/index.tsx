"use client"

import { useContext, useEffect } from 'react';
import ComparePlansComponents from '../ComparePlans';
import GuideSectionComponents from '../GuideSection';
import HowItWorksComponents from '../HowItWorks';
import HowToCompareComponents from '../HowToCompare';
import HomeSliderCustome from './HomeSlider';
import WhySectionComponents from './whysection';
import { SiteIdContext } from '@/context/SiteIdContextProvider';

const CustomeLandingPage = ({ viewBlogData, topSlider, siteId }: any) => {
  const { updateSiteId }: any = useContext(SiteIdContext);

  useEffect(() => {
    updateSiteId(siteId ? +siteId : 8)
  }, [])

  return (
    <>
      <HomeSliderCustome data={topSlider} />
      <WhySectionComponents />
      <ComparePlansComponents />
      <HowItWorksComponents />
      <HowToCompareComponents />
      <GuideSectionComponents viewBlogData={viewBlogData} />
    </>
  );
};

export default CustomeLandingPage;
