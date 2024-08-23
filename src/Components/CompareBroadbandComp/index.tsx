"use client"

import React, { useEffect } from 'react'

import { UseServiceppContext } from '@/ContextAPI/Context';

import TopAdComponents from '@/Components/Ad/TopAd';
import ProductSecComponents from '@/Components/ProductSec';

const CompareBroadbandComp = ({ data, meta }: any) => {

    let storeData: any = UseServiceppContext();
    const { dispatch } = storeData;

    const serviceData: any = data || [];

    useEffect(() => {
        dispatch({
          type: 'SET_PRODUCT_DATA',
          payload: serviceData,
        });
    }, [dispatch, serviceData]);

    if(!serviceData) return null;

    return (
        <section className="wrapContainer">
            <div className="serviceTopWrap">
            <TopAdComponents
                siteId={serviceData.siteId}
            />
            </div>
            <ProductSecComponents products={serviceData} />
            
        </section>
    )
}

export default CompareBroadbandComp