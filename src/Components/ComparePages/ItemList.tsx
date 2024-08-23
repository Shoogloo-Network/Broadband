import styles from './Compare.module.scss';
import {
  BsCurrencyRupee,
  BsWifi,
  BsTelephone,
  BsBroadcastPin,
} from 'react-icons/bs';
import CurrencyDisplay from '../CurrencyDisplay';
const ItemListComponents = (props: any) => {
  const data = props.data;
  const provider =
    data.broadBand && data.broadBand.name ? data.broadBand.name : '';
  const recomendedPlan = data.recomendedPlan ? data.recomendedPlan : false;

  const contractLengthDuration =
    data.broadBand && data.broadBand.contractLengthDuration
      ? data.broadBand.contractLengthDuration
      : '';
  const contractLength =
    data.broadBand && data.broadBand.contractLength !== null
      ? data.broadBand.contractLength
      : '';
  const bandwidthDurationScale =
    data.broadBand && data.broadBand.bandwidthDurationScale
      ? data.broadBand.bandwidthDurationScale
      : '';
  const speed =
    data.broadBand && data.broadBand.speed ? data.broadBand.speed : '';
  const speedScale =
    data.broadBand && data.broadBand.speedScale
      ? data.broadBand.speedScale
      : '';
  const bandwidth =
    data.broadBand && data.broadBand.bandwidth && data.broadBand.bandwidth
      ? data.broadBand.bandwidth
      : '';
  const bandwidthSpeedScale =
    data.broadBand && data.broadBand.bandwidthSpeedScale
      ? data.broadBand.bandwidthSpeedScale
      : '';
  const cost = data.broadBand && data.broadBand.cost ? data.broadBand.cost : '';
  const currency =
    data.broadBand && data.broadBand.currency ? data.broadBand.currency : '';
  const costDurationScale =
    data.broadBand && data.broadBand.costDurationScale
      ? data.broadBand.costDurationScale
      : '';

  const topIconLists = (data && data.broadbandAttribute) || [];
  const wifiAvailable = topIconLists.find((item: any) => item.name === 'Phone');
  const broadbandAvailable = topIconLists.find(
    (item: any) => item.name === 'Wifi'
  );
  const planId = data && data.broadBand && data.broadBand.id;

  const ottService = topIconLists.filter((item: any) => item.type === 'ott');
  const handleClickRemovePlan = () => {
    props.removeThisPlan(planId);
  };
  return (
    <>
      <div className={styles.boxWraper}>
        <div className={styles.topTxt}>
          <span className={styles.headTxt}>{provider} </span>
          {recomendedPlan ? (
            <span className={styles.btnWrap}>
              <span className={styles.recoBtnPlan}>Recommended Plan</span>
            </span>
          ) : null}
        </div>

        <ul className={styles.infoList}>
          <li>
            <span className={styles.boldTxt}>{speed}</span>
            <span className={styles.normalTxt}>{speedScale}</span>
          </li>
          {/* <li>
                        <span className={styles.boldTxt}>{bandwidth}</span>
                        <span className={styles.normalTxt}>{bandwidthSpeedScale}</span>
                    </li> */}

          <li>
            {bandwidthSpeedScale === 'unlimited' ? (
              <>
                <span className={styles.boldTxt}>Unlimited</span>
                <span className={styles.normalTxt}>Data</span>
              </>
            ) : (
              <>
                <span className={styles.boldTxt}>{bandwidth}</span>
                <span className={styles.normalTxt}>{bandwidthSpeedScale}</span>
              </>
            )}
            {/* <span className={styles.maxTxt}>Data Limit</span> */}
          </li>

          {contractLength &&
          contractLength !== '' &&
          contractLengthDuration &&
          contractLengthDuration !== '' ? (
            <li>
              <span className={styles.boldTxt}>{contractLength}</span>
              <span className={styles.normalTxt}>{bandwidthDurationScale}</span>
            </li>
          ) : (
            ''
          )}
        </ul>

        <div className={styles.broadBandSec}>
          <span className={styles.broadBtn}>
            <span>
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

            {broadbandAvailable && broadbandAvailable.name ? 'Internet' : ''}
            {broadbandAvailable &&
            broadbandAvailable.name &&
            wifiAvailable &&
            wifiAvailable.name
              ? ' + '
              : ''}
            {wifiAvailable && wifiAvailable.name ? 'Calling' : ''}
          </span>
        </div>

        {}
        <div className={styles.ottWrap}>
          {ottService && ottService.length > 0 ? (
            <span>{ottService.length} OTT Services Included </span>
          ) : (
            ''
          )}
        </div>

        <div className={styles.bottomWrap}>
          <div className={styles.left}>
            <span className={styles.rsTxt}>

              <span className={styles.inr}>
                <CurrencyDisplay currency={currency} />
              </span>
              
              {cost}
            </span>
            <span className={styles.monthTxt}>{costDurationScale}</span>
            <span className={styles.gstTxt}>inc.GST</span>
          </div>
          <div className={styles.right}>
            <span
              onClick={handleClickRemovePlan}
              className={styles.removePlanBtn}
            >
              Remove From Compare
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListComponents;
