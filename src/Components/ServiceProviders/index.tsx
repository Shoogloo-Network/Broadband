"use client"

import styles from './ServiceProvider.module.scss';
import LeftSectionProvider from './LeftSection';
import Image from 'next/image';
import RatingGenrate from '../Rating';
import { BsWifi, BsTelephone, BsBroadcastPin } from 'react-icons/bs';
import ReviewPost from '../ReviewPost';
import Link from 'next/link';
import PlanPageStripComponents from '../PlanPageStrip';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const ServiceProvider = (props: any) => {
  const {countryId} = useParams();
  const [aboutTxt, setAboutTxt] = useState('');
  const planDetail = (props && props.data) || {};
  const reviews = (props && props.reviews) || [];

  const planImg =
    (planDetail && planDetail.provider && planDetail.provider.image) || '';
  const planTitle =
    (planDetail && planDetail.broadBand && planDetail.broadBand.name) || '';
  const planRatingTxt =
    (planDetail &&
      planDetail.broadBand &&
      planDetail.broadBand.rating &&
      planDetail.broadBand.rating) ||
    '';

  const topIconLists =
    planDetail.broadbandAttribute && planDetail.broadbandAttribute.length > 0
      ? planDetail.broadbandAttribute.filter(
          (item: any) => item.position === 'ICON' && item.type === 'icon'
        )
      : [];
  const wifiAvailable = topIconLists.find((item: any) => item.name === 'Phone');
  const broadbandAvailable = topIconLists.find(
    (item: any) => item.name === 'Wifi'
  );

  const broadBand =
    planDetail && planDetail.broadBand ? planDetail.broadBand : {};
  const broadAttri =
    planDetail && planDetail.broadbandAttribute
      ? planDetail.broadbandAttribute
      : {};
  const provider = planDetail && planDetail.provider ? planDetail.provider : {};

  const providerId = provider?.id || '';
  const providerSeoName = provider?.seoName || '';

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
  const contractLength =
    broadBand && broadBand.contractLength !== null
      ? broadBand.contractLength
      : '';
  const contractLengthDuration =
    broadBand && broadBand.contractLengthDuration
      ? broadBand.contractLengthDuration
      : '';
  const bottomAttribute =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'BOTTOM' && item.type === 'btn'
        )
      : [];
  const bottomOttpAttribute =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'OTT' && item.type === 'ott'
        )
      : [];

  useEffect(() => {
    const newAboutTxt = (broadBand?.description || '') + (provider?.description || '');
    setAboutTxt(newAboutTxt);
  }, [broadBand, provider]);

  const planDetails = {
    entityId: (broadBand && broadBand.providerId) || 0,
    projectId: (broadBand && broadBand.projectId) || 3,
    siteId: (broadBand && broadBand.siteId) || 1,
    categoryId: (provider && provider.categoryId) || 11,
  };
  const planStripData = {
    cost: broadBand && broadBand.cost ? broadBand.cost : '',
    currency: broadBand && broadBand.currency ? broadBand.currency : '',
    costDurationScale: broadBand && broadBand.costDurationScale ? broadBand.costDurationScale : '',
    basePrice: broadBand && broadBand.basePrice !== null ? broadBand.basePrice : '0',
    installation: broadBand && broadBand.installation !== null ? broadBand.installation : '0',
    others: broadBand && broadBand.others !== null ? broadBand.others : '0',
    setupCost: broadBand && broadBand.setupCost !== null ? broadBand.setupCost : '0',
    dealUrl: broadBand && broadBand.dealUrl ? broadBand.dealUrl : '',
    projectId: broadBand.projectId,
    siteId: broadBand.siteId,
    planId: broadBand.id
  };

  return (
    <>
      <div className={`whiteBg`}>
        <main className={`${styles.serviceProviderWrap} wrapContainer`}>
          <div className={styles.left}>
            <div className={styles.top}>
              <Link
                href={`/${countryId}/provider/${providerSeoName}/`}
                className={styles.leftImg}
              >
                <Image src={planImg} width={173} height={105} alt={planTitle} />
              </Link>
              <div className={styles.topHeadSec}>
                <h1>{planTitle}</h1>
                <ul className={styles.rating}>
                  <li className={styles.startRating}>
                    <RatingGenrate rating={planRatingTxt} />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.topBtnWrap}>
              <span className={styles.btnBandWifi}>
                <span className={styles.iconSection}>
                  {broadbandAvailable &&
                  broadbandAvailable.name &&
                  wifiAvailable &&
                  wifiAvailable.name ? (
                    <BsBroadcastPin />
                  ) : broadbandAvailable && broadbandAvailable.name ? (
                    <BsTelephone />
                  ) : wifiAvailable && wifiAvailable.name ? (
                    <BsWifi />
                  ) : (
                    ''
                  )}
                </span>
                {broadbandAvailable && broadbandAvailable.name
                  ? 'Internet '
                  : ''}
                {broadbandAvailable &&
                broadbandAvailable.name &&
                wifiAvailable &&
                wifiAvailable.name
                  ? ' + '
                  : ''}
                {wifiAvailable && wifiAvailable.name ? 'Calling' : ''}
              </span>
            </div>
            <ul className={styles.prividerInfo}>
              <li>
                <span className={styles.bandWidth}>{speed}</span>
                <span className={styles.monthTxt}>{speedScale}</span>
                <span className={styles.maxTxt}>Speed</span>
              </li>
              <li>
                {bandwidthSpeedScale === 'unlimited' ? (
                  <span className={styles.bandWidth}>Unlimited</span>
                ) : (
                  <>
                    <span className={styles.bandWidth}>{bandwidth}</span>
                    <span className={styles.monthTxt}>
                      {bandwidthSpeedScale}
                    </span>
                  </>
                )}
                <span className={styles.maxTxt}>Data Limit</span>
              </li>

              {contractLength &&
              contractLength !== '' &&
              contractLengthDuration &&
              contractLengthDuration !== '' ? (
                <li>
                  <span className={styles.boldTxt}> {contractLength}</span>
                  <span className={styles.normalTxt} style={{ display: 'none' }}>
                    {bandwidthDurationScale}
                  </span>
                  <span className={styles.btmTxt} style={{ paddingLeft: '5px' }}>
                    {contractLengthDuration}
                  </span>
                </li>
              ) : (
                ''
              )}
            </ul>
            <ul className={styles.featureList}>
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
            {bottomOttpAttribute && bottomOttpAttribute.length > 0 ? (
              <div className={styles.inculdePlan}>
                <h4>Included with this Plan</h4>
                <ul className={styles.primeSection}>
                  {bottomOttpAttribute.map((item: any) => {
                    return (
                      <li
                        key={item.id}
                        data-tooltip-id="broadband-tooltip"
                        data-tooltip-content={item.toolTip}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={167}
                          height={55}
                          title={item.name}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ''
            )}

            <div className={styles.aboutPlan}>
              <h2 className={styles.head2}>About this Plan</h2>
              <div className={styles.praTxt}>
                <div dangerouslySetInnerHTML={{ __html: aboutTxt }} />
              </div>
              <h2 className={`${styles.head2} ${styles.mt32}`}>Reviews</h2>
              <ul className={styles.reviews}>
                <li>
                  {reviews.review} <br />
                  {reviews.name}
                </li>
              </ul>
              <ReviewPost planDetails={planDetails} />
            </div>
          </div>
          <LeftSectionProvider />
        </main>
      </div>
      <PlanPageStripComponents data={planStripData}/>
    </>
  );
};

export default ServiceProvider;

