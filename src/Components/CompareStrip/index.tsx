"use client"
import styles from './CompareStrip.module.scss';
import { SiteIdContext } from '@/context/SiteIdContextProvider';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UseServiceppContext } from '@/ContextAPI/Context';
import { CompareContextDatac } from '@/context/CompareContextData';
const CompareStripComponents = ({ data, onClose }: any) => {
  const router = useRouter();
  let contextFunction: any = UseServiceppContext();
 // let contextFunction1 :any = useContext(ServiceAppContextData);
  // const siteId = useContext(SiteIdContext);
  // console.log("siteId", siteId)
  const { state, dispatch } = contextFunction;
  const comparePlanData = state.comparePlanData;
  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch({
      type: 'CLEAR_COMPARE_PLAN_DATA',
    });
  };
  const handleClickCompareBtn = () => {
    if (comparePlanData.length > 1) {
      router.push('/compare');
    } else {
      alert(
        'To compare plans, please make sure to select at least two plans. Only then can the comparison be initiated.'
      );
    }
  };
  return (
    <div className={styles.wrapStrip}>
      <div className={styles.wrapSec}>
        <div className={styles.left}>
          <span className={styles.dealTxt}>{comparePlanData.length} Deals</span>
          <span className={styles.dealPrtxt}> added to Compare List</span>
        </div>
        <div className={styles.right}>
          <span onClick={submitHandler} className={styles.comTxt}>
            Clear Compare List
          </span>
          <span onClick={handleClickCompareBtn} className={styles.compareBtn}>
            Compare
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompareStripComponents;
