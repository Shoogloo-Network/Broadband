"use client"

import LeftFilterSection from './LeftSection';
import RightFilerSection from './RightSection';
import { UseServiceppContext } from '../../ContextAPI/Context';
import React, { useEffect, useState } from 'react';

const ProductSecComponents = ({ products }: any) => {
  
  let storeData: any = UseServiceppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [allProduct, setAllProduct] = useState(products);
  const [filterProductsData, setFilterProductsData] = useState(products);
  const { state, dispatch } = storeData;
  const filterMenuDataJson = storeData.state.filterMenuJson;
  const [speedFilter, setSpeedFilter]: any = useState('');
  const [providerFilter, setProviderFilter]: any = useState('');
  const [ottFilter, setOttFilter]: any[] = useState([]);
  const [mwebFilterShow, setMwebFilterShow] = useState(false);
  let uniqueArray: any[] = [];
  let uniqueIds = new Set();

  for (const obj of products) {
    if (obj && obj.provider && obj.provider.id) {
      let providerId = obj.provider.id;
      if (!uniqueIds.has(providerId)) {
        uniqueIds.add(providerId);
        uniqueArray.push(obj);
      }
    }
  }

  const productFilterHanderRun = () => {
    setIsLoading(true);
    let filterData = [...allProduct];
  
    if (!!providerFilter) {
      filterData = filterData.filter(function (item: any) {
        return item.provider?.id == Number(providerFilter);
      });
    }

    if (!!speedFilter) {
      if (speedFilter === 'below_100mbps') {
        filterData = filterData.filter(function (item: any) {
          return (
            item.broadBand.speed <= 100 && item.broadBand.speedScale == 'mbps'
          );
        });
      } else if (speedFilter === 'above_100mbps') {
        filterData = filterData.filter(function (item: any) {
          return (
            item.broadBand.speed >= 100 && item.broadBand.speedScale == 'mbps'
          );
        });
      } else if (speedFilter === 'above_1gbps') {
        filterData = filterData.filter(function (item: any) {
          return (
            item.broadBand.speed >= 1 && item.broadBand.speedScale == 'gbps'
          );
        });
      }
    }
    
      
    if (ottFilter && ottFilter.length !== -1) {
      const ottSubscriptions = ottFilter.indexOf('ottSubscriptions');
      const unlimitedData = ottFilter.indexOf('unlimitedData');
      const freeInstallation = ottFilter.indexOf('freeInstallation');
      const specialOfferPlansOnly = ottFilter.indexOf('specialOfferPlansOnly');
      // only OTT filer here
      if ( ottSubscriptions!== -1 ) {
        try{
        filterData = filterData.filter(function (item: any) {
          return item.broadbandAttribute.find(function (o: any) {
            console.log("data1",filterData);
            return o.position === 'OTT';
          });
        });
      }
      catch(Exception){}
      }
      // only unlimited data here
      if (unlimitedData !== -1) {
       
        try{
        filterData = filterData.filter(function (item: any) {
          return item.broadBand.bandwidth == -1;
        });
      }
      catch(Exception){}
      }
      console.log("adff2",freeInstallation);
      // only free intstallation
      if ( freeInstallation !== -1 ) { 
        try{
        filterData = filterData.filter(function (item: any) {
          return item.broadBand.installation === null ;
          });
        
      }catch(Exception ){}
      }
      // only special offer only
      if ( specialOfferPlansOnly!== -1) {
        try{
        filterData = filterData.filter(function (item: any) {
          return item.broadbandAttribute.find(function (o: any) {
            return o.name === 'Special Offer';
          });
        });
      }
      catch(Exception){}
      }
    }
  // }
  // catch(Exception ){
  //  // console.log
  // }
    setFilterProductsData(filterData);
    setIsLoading(false);
  };
  
  const clickHandlerFitlerMenu = (data: any) => {
    if (data && data.filterType === 'speed') {
      setSpeedFilter(data.filterValue);
    } else if (data && data.filterType === 'providerlist') {
      setProviderFilter(data.filterValue);
    } else if (data && data.filterType === 'attribute') {
      const checkOttExist = ottFilter.indexOf(data.filterValue);
      if (data.filterCheck && checkOttExist === -1) {
        setOttFilter([...ottFilter, data.filterValue]);
      } else if (!data.filterCheck && checkOttExist > -1) {
        const updatedOttFilter = ottFilter.filter(
          (filter: any) => filter !== data.filterValue
        );
        setOttFilter(updatedOttFilter);
      }
    }
  };
  
  const resetHandlerClick = () => {
    setSpeedFilter('');
    setProviderFilter('');
    setOttFilter([]);
  };
  
  const handleClickMweb = () => {
    if (window.innerWidth < 787) {
      setMwebFilterShow(!mwebFilterShow);
    }
  };
  
  useEffect(() => {
    productFilterHanderRun();
  }, [speedFilter, providerFilter, ottFilter]);


  return (
    <>
      <div className="productWraper">
        <LeftFilterSection
          clickOnFilter={clickHandlerFitlerMenu}
          totalCount={allProduct.length}
          filterCount={filterProductsData.length}
          _data={filterMenuDataJson}
          uniqueProvidersArray={uniqueArray}
          resetHandler={resetHandlerClick}
          handleClickMweb={handleClickMweb}
          mwebFilterShow={mwebFilterShow}
        />
        {filterProductsData.length ? (
          <RightFilerSection
            products={filterProductsData}
            isloading={isLoading}
            mwebFilterShow={mwebFilterShow}
          />
        ) : null}
        
      </div>
    </>
  );
};

export default ProductSecComponents;
