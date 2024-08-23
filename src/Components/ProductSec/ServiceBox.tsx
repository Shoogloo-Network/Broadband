"use client"

import React, { useState, useEffect } from 'react';

import styles from './Product.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import ShareComponents from '../SharePage';
import FeedBackComponents from '../FeedBack';
import QueryPostForm from '../QueryForm';
import { UseServiceppContext } from '../../ContextAPI/Context';
import { getTinyUrl } from '../../utils/common';
import CurrencyDisplay from '../CurrencyDisplay';
import {
  BsStarFill,
  BsWifi,
  BsTelephone,
  BsShare,
  BsUiChecks,
  BsBoxArrowUpRight,
  BsExclamationOctagon,
} from 'react-icons/bs';
import { useParams } from 'next/navigation';

const ServiceBoxComponents = (props: any) => {

  const { countryId } = useParams();

  let contextFunction: any = UseServiceppContext();
  const { state, dispatch } = contextFunction;
  const [shortUrl, setShortUrl] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showQueryPopup, setShowQueryPopup] = useState(false);
  const [queryFeedBackData, setQueryFeedBackData] = useState({});
  const [popupData, setPopupData] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackData, setFeedbackData] = useState({});
  const [mwebShowContent, setMwebShowContent] = useState(false);

  const pdData = props && props.productData ? props.productData : {};
  const broadBand = pdData && pdData.broadBand ? pdData.broadBand : {};
  const broadAttri =
    pdData && pdData.broadbandAttribute ? pdData.broadbandAttribute : {};
  const provider = pdData && pdData.provider ? pdData.provider : {};
  const broadAttriMaster =
    pdData && pdData.broadbandAttributeMaster
      ? pdData.broadbandAttributeMaster
      : {};

  const topAttribute =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'TOP' && item.type === 'btn'
        )
      : [];
  const bottomAttribute =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'BOTTOM' && item.type === 'btn'
        )
      : [];
  const topIconLists =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'ICON' && item.type === 'icon'
        )
      : [];

  const ottAvailable =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'OTT' && item.type === 'ott'
        )
      : [];

  const name = broadBand.name || '';
  const logoPic = provider.logo || '/assets/faded_logo.png';
  const providerId = provider.id || '';
  const planLink = provider.link || '';
  const planId = broadBand.id || '';
  const seoName = broadBand.seoName || '';
  const rating = broadBand && broadBand.rating ? broadBand.rating : '';
  const speed = broadBand && broadBand.speed ? broadBand.speed : '';
  const speedScale =
    broadBand && broadBand.speedScale ? broadBand.speedScale : '';
  const bandwidth =
    broadBand && broadBand.bandwidth && broadBand.bandwidth
      ? broadBand.bandwidth
      : '';
  const bandwidthSpeedScale =
    broadBand && broadBand.bandwidthSpeedScale
      ? broadBand.bandwidthSpeedScale
      : '';
  const bandwidthDurationScale =
    broadBand && broadBand.bandwidthDurationScale
      ? broadBand.bandwidthDurationScale
      : '';
  const cost = broadBand && broadBand.cost ? broadBand.cost : '';
  const currency = broadBand && broadBand.currency ? broadBand.currency : '';
  const costDurationScale =
    broadBand && broadBand.costDurationScale ? broadBand.costDurationScale : '';
  const contractLength =
    broadBand && broadBand.contractLength !== null
      ? broadBand.contractLength
      : '';
  const contractLengthDuration =
    broadBand && broadBand.contractLengthDuration
      ? broadBand.contractLengthDuration
      : '';
  const status = broadBand && broadBand.status ? broadBand.status : '';
  const dealUrl = broadBand && broadBand.dealUrl ? broadBand.dealUrl : '';
  const sponsored =
    broadBand && broadBand.sponsored !== null ? broadBand.sponsored : '';

  const basePrice =
    broadBand && broadBand.basePrice !== null ? broadBand.basePrice : '0';
  const installation =
    broadBand && broadBand.installation !== null ? broadBand.installation : '0';
  const setupCost =
    broadBand && broadBand.setupCost !== null ? broadBand.setupCost : '0';
  const others =
    broadBand && broadBand.others !== null ? broadBand.others : '0';

  // hard code data here
  const data = props.productData;
  const cartDetails =
    data &&
    data.cartDetails &&
    data.cartDetails.type &&
    data.cartDetails.type.length > 0
      ? data.cartDetails.type
      : [];

  const handleClick = () => {
    const customeShareUrl = `${window.location.origin}/broadband-plan/${seoName}/${planId}`;
    const urlShare = name;
    setPopupData(urlShare);
    setShareUrl(customeShareUrl);
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  const viewDealPlanHandler = () => {
    const queryData: any = {
      projectId: broadBand.projectId || 3,
      siteId: broadBand.siteId || 1,
      entityId: planId || 0,
    };
    setQueryFeedBackData(queryData);
    setShowQueryPopup(true);
  };
  const handleFeedbackClick = () => {
    const shareFeedBack: any = {
      projectId: broadBand.projectId || 3,
      siteId: broadBand.siteId || 1,
      entityId: planId || 0,
      category: provider.categoryId || 2,
    };
    setFeedbackData(shareFeedBack);
    setShowFeedback(true);
  };
  const handleFeebackClose = () => {
    setShowFeedback(false);
  };
  const handlerCompareClick = () => {
    let comparePlanId = planId;
    const pdData = props.productData;
    // Check if the plan is already in the compare list
    const compareData = state.comparePlanData;
    const isPlanAlreadyCompared = compareData.some(
      (data: any) => data.broadBand.id === pdData.broadBand.id
    );
    if (isPlanAlreadyCompared) {
      // Show a toast or notification indicating the plan is already compared
      alert(
        'This plan is already in the compare list. Please select another plan.'
      );
      return;
    }
    dispatch({
      type: 'ADD_COMPARE_PLAN_DATA',
      payload: pdData,
    });
  };
  const getHostName = (hrefUrl: string) => {
    const url = hrefUrl;
    const regex = /^https?:\/\/(?:www\.)?([^/?]+)/i;
    const match = url.match(regex);
    const hostname = match ? match[1] : '';
    return hostname;
  };
  useEffect(() => {
    const fetchShortUrl = async () => {
      try {
        const shortenedUrl = await getTinyUrl(planLink);
        setShortUrl(shortenedUrl);
      } catch (error) {
        // Handle the error accordingly in your application
      }
    };

    if (planLink !== '') {
      //fetchShortUrl();
      const hostname = getHostName(planLink);
      setShortUrl(hostname);
    }
  }, [planLink]);
  const mwebHanderClickShowTomore = () => {
    setMwebShowContent(!mwebShowContent);
  };
  if (props && props.nodata && props.nodata === 'nodata') {
    return (
      <>
        <div className={`${styles.boxWrap} ${styles.nodata}`}>
          No broadband plan exists for the selected criteria
        </div>
      </>
    );
  }
// console.log("+++++++++++",seoName);
// console.log("======================",logoPic);
  return (
    <>
      <div className={styles.boxWrap}>
        <span
          className={`${styles.mwebArrowToggle} ${
            mwebShowContent ? styles.active : ''
          }`}
          onClick={mwebHanderClickShowTomore}
        ></span>
        <div className={`${styles.serviceTopWrap} ${styles.posrel}`}>
          <span title='Included Ott Plans'
            className={`${styles.mwebArrowToggle} ${
              mwebShowContent ? styles.active : ''
            }`}
            onClick={mwebHanderClickShowTomore}
          ></span>
          <ul className={styles.serviceListItem}>
            {topAttribute.length > 0
              ? topAttribute.map((item: any) => {
                  return (
                    <li key={item.id}>
                      <span
                        data-tooltip-id="broadband-tooltip"
                        data-tooltip-content={item.toolTip}
                        className={`${styles[item.colorCode]} ${styles.btn}`}
                      >
                        {item.name}
                      </span>
                    </li>
                  );
                })
              : ''}
          </ul>
          {topIconLists.length > 0 ? (
            <ul className={styles.iconItem}>
              {topIconLists.map((item: any, index: number) => {
                return (
                  <li
                    className={`${styles[item.colorCode]} iconBtn`}
                    key={item.id}
                    data-tooltip-id="broadband-tooltip"
                    data-tooltip-content={item.toolTip}
                  >
                    {item.name === 'Wifi' ? (
                      <BsWifi />
                    ) : item.name === 'Phone' ? (
                      <BsTelephone />
                    ) : (
                      ''
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            ''
          )}
          <div className={styles.bottomWrap}>
            <div className={styles.topBox}>
              <div className={styles.leftBox}>
                <div className={styles.imgBox}>
                  <div className={styles.imgSec}>
                    <Link href={`/${countryId}/broadband-plan/${seoName}/`}>
                      {logoPic && logoPic !== '' ? (
                        <Image
                          loading="lazy"
                          decoding="async"
                          quality={75}
                          className={styles.merchantImg}
                          src={logoPic}
                          alt={name ? name : 'broadband'}
                          title={name ? name : 'broadband'}
                          width={100}
                          height={80}
                        />
                      ) : (
                        ''
                      )}
                    </Link>
                  </div>
                  <div className={styles.link}>
                    <Link href={planLink} target="_blank">
                      <span className={styles.linkIcon}>
                        <BsBoxArrowUpRight />
                      </span>
                      {shortUrl}
                    </Link>
                  </div>

                  {/* <Link href="providers/23" className={styles.link}>airtelextream.com</Link> */}
                </div>
              </div>
              <div className={styles.rightBox}>
                <h3>
                  <Link href={`/${countryId}/broadband-plan/${seoName}/`}>
                    {name}
                  </Link>
                </h3>
                <ul className={styles.listProduct}>
                  <li>
                    {speedScale === 'unlimited' ? (
                      <span className={styles.boldTxt}>Unlimited</span>
                    ) : (
                      <>
                        <span className={styles.boldTxt}>{speed}</span>
                        <span className={styles.normalTxt}>{speedScale}</span>
                      </>
                    )}
                    <span className={styles.btmTxt}>Speed</span>
                  </li>

                  <li>
                    {bandwidthSpeedScale === 'unlimited' ? (
                      <span className={styles.boldTxt}>Unlimited</span>
                    ) : (
                      <>
                        <span className={styles.boldTxt}>{bandwidth}</span>
                        <span className={styles.normalTxt}>
                          {bandwidthSpeedScale}
                        </span>
                      </>
                    )}
                    <span className={styles.btmTxt}>Data</span>
                  </li>
                  {contractLength &&
                  contractLength !== '' &&
                  contractLengthDuration &&
                  contractLengthDuration !== '' ? (
                    <li>
                      <span className={styles.boldTxt}>{contractLength}</span>
                      <span className={styles.normalTxt} style={{ display: 'none' }}>
                        {bandwidthDurationScale}
                      </span>
                      <span className={styles.btmTxt}>
                        {contractLengthDuration}
                      </span>
                    </li>
                  ) : (
                    ''
                  )}
                </ul>
                <ul className={styles.offerItemList}>
                  {rating && rating !== '' ? (
                    <li className={styles.rating}>
                      <span className={styles.ratingIcon}>
                        <BsStarFill />
                      </span>
                      <span className={styles.ratingTxt}>{rating}</span>
                    </li>
                  ) : (
                    ''
                  )}
                  {bottomAttribute.length > 0
                    ? bottomAttribute.map((item: any) => {
                        return (
                          <li
                            key={item.id}
                            data-tooltip-id="broadband-tooltip"
                            data-tooltip-content={item.toolTip}
                          >
                            <span>{item.name}</span>
                          </li>
                        );
                      })
                    : ''}
                </ul>
              </div>
            </div>
            {/* only Mweb show to this section start code here */}
            {mwebShowContent ? (
              <>
                {/* <ul className={`${styles.offerItemList} ${styles.}`}>
                  {rating && rating !== '' ? (
                    <li className={styles.rating}>
                      <span className={styles.ratingIcon}>
                        <BsStarFill />
                      </span>
                      <span className={styles.ratingTxt}>{rating}</span>
                    </li>
                  ) : (
                    ''
                  )}
                  {bottomAttribute.length > 0
                    ? bottomAttribute.map((item: any) => {
                        return (
                          <li key={item.id}>
                            <span>{item.name}</span>
                          </li>
                        );
                      })
                    : ''}
                </ul> */}
                {ottAvailable.length > 0 ? (
                  <div className={styles.mwebOttHead}>
                    Included with this Plan
                  </div>
                ) : (
                  ''
                )}

                <ul className={styles.mwebOttpSec}>
                  {ottAvailable.length > 0
                    ? ottAvailable.map((item: any) => {
                        return (
                          <li key={item.id}>
                            <Image
                              loading="lazy"
                              decoding="async"
                              fill
                              quality={75}
                              style={{ objectFit: 'contain' }}
                              src={item.imageUrl}
                              alt={item.name}
                              title={item.name}
                            />
                          </li>
                        );
                      })
                    : ''}
                </ul>
              </>
            ) : (
              ''
            )}

            {/* only Mweb show to this sectoin end code here */}
          </div>
        </div>
        {/* currency section */}
        <div className={styles.right}>
          <div className={styles.topCard}>
            <ul className={styles.cardList}>
              <li className={`${styles.priceList} cardIcon`}>
                <BsUiChecks />
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
              </li>
              <li className="cardIcon" onClick={handleClick}>
                <BsShare />
              </li>
              <li
                className={`${styles.rightWrap} cardIcon`}
                onClick={handleFeedbackClick}
              >
                <BsExclamationOctagon />
              </li>
            </ul>

            {/* {
                            cartDetails.length > 0 ? <ul className={styles.cardList}>{cartDetails.map((item:any, index:number)=>{
                                return (
                                    <li key={index} className={`${styles[item]} cardIcon`}>
                                        {
                                            item === 'share' ? <BsShare /> : item === 'block' ? <BsExclamationOctagon /> : item === 'card' ? <BsUiChecks /> : item
                                        }
                                        
                                    
                                    </li>
                                )
                            }) }</ul>: ''
                        } */}
          </div>
          <div className={styles.price}>
            <span
              data-symbl={currency}
              className={`${styles.boldTxt} ${styles[currency]}`}
            >
              <span className={styles.currSymbl}>
                  <CurrencyDisplay currency={currency} />
                </span>
              {cost}
            </span>
            <span className={styles.monthTxt}>/{costDurationScale}</span>
            <span className={styles.priceTxt}>
              {broadBand.siteId == 1 ? "inc.GST" : "VAT"}
            </span>
          </div>
          <div className={styles.tbsection}>
            {/* <Link
              className={`${styles.deal} ${styles.tbBtn}`}
              target={dealUrl !== '' ? '_blank' : ''}
              href={
                dealUrl === ''
                  ? `/broadband-plan/${seoName}/${planId}`
                  : dealUrl
              }
            >
              <strong>
                {status && status === '1' ? 'View Deal' : 'Unavailable'}
              </strong>
            </Link> */}
            {dealUrl === '' || dealUrl == 'https://' ? (
              <span
                className={`${styles.deal} ${styles.tbBtn}`}
                onClick={viewDealPlanHandler}
              >
                View Deal
              </span>
            ) : (
              <Link
                href={dealUrl}
                target="_blank"
                className={`${styles.deal} ${styles.tbBtn}`}
              >
                View Deal
              </Link>
            )}

            <span
              onClick={handlerCompareClick}
              className={`${styles.compare}  ${styles.tbBtn}`}
            >
              Add to Compare
            </span>
          </div>
        </div>
      </div>
      {showPopup && (
        <ShareComponents
          data={popupData}
          _shareUrl={shareUrl}
          onClose={handleClose}
        />
      )}
      {showFeedback && (
        <FeedBackComponents data={feedbackData} onClose={handleFeebackClose} />
      )}
      {showQueryPopup && (
        <QueryPostForm
          data={queryFeedBackData}
          onClose={() => setShowQueryPopup(false)}
        />
      )}
    </>
  );
};

export default ServiceBoxComponents;
