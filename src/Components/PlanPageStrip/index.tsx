import styles from './PlanPageStrip.module.scss';
import Link from 'next/link';
import React, {useState} from 'react';
import QueryPostForm from '../QueryForm';
import CurrencyDisplay from '../CurrencyDisplay';
const PlanPageStripComponents = ({ data }: any) => {
  const [showQueryPopup, setShowQueryPopup] = useState(false);
  const [queryFeedBackData, setQueryFeedBackData] = useState({});
  const cost = data.cost;
  const currency = data.currency;
  const costDurationScale = data.costDurationScale;
  const basePrice = data.basePrice;
  const installation = data.installation ;
  const setupCost = data.setupCost;
  const others = data.others;
  const dealUrl = data.dealUrl;
  const projectId = data.projectId;
  const siteId = data.siteId;
  const planId = data.planId;
  
  const viewDealPlanHandler = () => {
    const queryData: any = {
      projectId:projectId,
      siteId: siteId,
      entityId: planId,
    };
    setQueryFeedBackData(queryData);
    setShowQueryPopup(true);
  };
  return (
    <>
      <div className={styles.wrapStrip}>
        <div className={styles.stripPageWrap}>
          <div className={styles.wrapSec}>
            <div className={styles.left}>
              <div className={styles.dealTxt}> 
                <div className={styles.topText}>
                  <span className={styles.priceAmount}>
                  <span className={styles.currSymbl}>
                    <CurrencyDisplay currency={currency} />
                  </span>
                  
                      
                      {basePrice}
                    </span>
                    <span>/{costDurationScale}</span>
                </div>
                <div className={styles.bottomText}>inc.GST</div>
              </div>
              <div className={styles.priceDropDown}>
                <div className={styles.priceWrapSec}>
                  <ul>
                      <li>
                        <h5>Price Breakdown</h5>
                      </li>
                      <li>
                        <span className={styles.priceTxt}>Base price</span>
                        <span className={styles.priceAmount}>
                        <span className={styles.currSymbl}>
                          <CurrencyDisplay currency={currency} />
                        </span>
                          {basePrice}
                        </span>
                      </li>
                      <li>
                        <span className={styles.priceTxt}>Installation</span>
                        <span className={styles.priceAmount}>
                        <span className={styles.currSymbl}>
                          <CurrencyDisplay currency={currency} />
                        </span>
                          {installation}
                        </span>
                      </li>
                      <li>
                        <span className={styles.priceTxt}>Setup Cost</span>
                        <span className={styles.priceAmount}>
                        <span className={styles.currSymbl}>
                          <CurrencyDisplay currency={currency} />
                        </span>
                          {setupCost}
                        </span>
                      </li>
                      <li>
                        <span className={styles.priceTxt}>Security Deposit</span>
                        <span className={styles.priceAmount}>
                        <span className={styles.currSymbl}>
                          <CurrencyDisplay currency={currency} />
                        </span>
                          {others}
                        </span>
                      </li>
                      <li className={styles.totalAmount}>
                        <span className={styles.priceTxt}>Total</span>
                        <span className={styles.priceAmount}>
                        <span className={styles.currSymbl}>
                          <CurrencyDisplay currency={currency} />
                        </span>
                          {cost}
                        </span>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <span onClick={viewDealPlanHandler} className={styles.comTxt}>
                Want Better Deals?
              </span>

              {dealUrl === '' ? (
                <span
                  className={`${styles.compareBtn}`}
                  onClick={viewDealPlanHandler}
                >
                  Get this Plan
                </span>
              ) : (
                <Link
                  href={dealUrl}
                  target="_blank"
                  className={`${styles.compareBtn}`}
                >
                  Get this Plan
                </Link>
              )}

              {/* <span onClick={handleClickGetThisPlan} className={styles.compareBtn}>
                Get this Plan
              </span> */}
            </div>
          </div>
        </div>
      </div>
      {showQueryPopup && (
        <QueryPostForm
          data={queryFeedBackData}
          onClose={() => setShowQueryPopup(false)}
        />
      )}
    </>
  );
};

export default PlanPageStripComponents;
