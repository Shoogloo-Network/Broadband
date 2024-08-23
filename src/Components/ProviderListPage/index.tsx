"use client"

import { useContext, useEffect } from 'react';

import LeftProviderSec from './LeftProviderSec';
import RightFilerSection from '../ProductSec/RightSection';
import { SiteIdContext } from '@/context/SiteIdContextProvider';

const ProviderListDataPages = ({ providerData }: any) => {
  const siteId: number = providerData[0].broadBand.siteId;
  const products: any[] = providerData;

  const { updateSiteId }: any = useContext(SiteIdContext)

  useEffect(() => {
    updateSiteId(siteId);
  }, [])

  return (
    <div className="productWraper">
      <LeftProviderSec siteId={siteId} />
      <RightFilerSection products={products} showReview="yes" />
    </div>
  );
};

export default ProviderListDataPages;
