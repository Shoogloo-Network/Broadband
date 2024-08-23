"use client"
import Link from 'next/link';
import React from 'react';
import styles from './Compare.module.scss';
import ItemListComponents from './ItemList';
import CompareData from '../../Data/comparePlan.json';
import { UseServiceppContext } from '../../ContextAPI/Context';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
//import {ServiceAppContextData} from '@/ContextAPI/compareData';
const ComparePageComponenets = () => {
 // let contextFunction: any = useContext(ServiceAppContextData);
 let contextFunction : any = UseServiceppContext();
  const { state, dispatch } = contextFunction;
  const comparePlanData = state.comparePlanData;
  const _data = CompareData.data;
  // const cmpdata= useContext(ServiceAppContextData);
  // console.log("cmpdata",cmpdata);
  const removeThisPlan = (planId: any) => {
    dispatch({
      type: 'SINGEL_PLAN_REMOVE',
      payload: planId,
    });
  };
  console.log("data",comparePlanData);
  const handlerClearAllPlan = (e: any) => {
    e.preventDefault();
    dispatch({
      type: 'CLEAR_COMPARE_PLAN_DATA',
    });
  };
  const history = useRouter();
 
  const goBackHandler = () => {
    window.history.back(); // This will navigate to the previous page
  };
  return (
    <>
      <div className={`whiteBg`}>
        <main className={`${styles.compareWrap} wrapContainer`}>
          <div className={styles.topSec}>
            <div className={styles.backSec}>
              <Link href="#goBackHandler" onClick={goBackHandler} className={styles.backBtn}>
                Back
              </Link>
            </div>
            <div className={styles.clearSec}>
              <span onClick={handlerClearAllPlan} className={styles.clrBtn}>
                Clear Compare List
              </span>
            </div>
          </div>
          {comparePlanData && comparePlanData.length > 0 ? (
            <div className={styles.compareWrapSec}>
              {comparePlanData.map((item: any) => {
                return (
                  <ItemListComponents
                    removeThisPlan={removeThisPlan}
                    key={item.broadBand.id}
                    data={item}
                  />
                );
              })}
            </div>
          ) : (
            <p className={styles.noplanCompare}>
              There are no items currently selected for comparison. Please go to
              the plan page and select the plans you wish to compare. Once you
              have selected the plans, the comparison results will be displayed.
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default ComparePageComponenets;
