import styles from './OfferCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CurrencyDisplay from '../CurrencyDisplay';
import { useParams } from 'next/navigation';
const OfferCardComponents = ({ data }: any) => {
  const {countryId} = useParams();
  const broadAttri =
    data && data.broadbandAttribute ? data.broadbandAttribute : {};
  const broadBand = data && data.broadBand ? data.broadBand : {};
  const type = data.type;
  const logo = data?.provider?.logo
    ? data.provider.logo
    : '/assets/faded_logo.png';
  const providerName = data?.provider?.name;
  const ottListItem =
    broadAttri && broadAttri.length > 0
      ? broadAttri.filter(
          (item: any) => item.position === 'OTT' && item.type === 'ott'
        )
      : [];
  const OTTLISTITEM =
    ottListItem && ottListItem.length > 0 ? ottListItem.slice(0, 4) : [];
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
  const cost = broadBand && broadBand.cost ? broadBand.cost : '';
  const currency = broadBand && broadBand.currency ? broadBand.currency : '';
  const costDurationScale =
    broadBand && broadBand.costDurationScale ? broadBand.costDurationScale : '';
  const planId = broadBand.id || '';
  const seoName = broadBand.seoName || '';
  const providerId = data?.provider?.id || '';
  const providerSeoName = data?.provider?.seoName || '';
  return (
    <>
      <div className={`${styles.offerWrap} ${styles[type]}`}>
        <div className={styles.topSec}>
          <Link
            //href={`/provider/${providerSeoName}/${providerId}`}
            href={`/${countryId}/provider/${providerSeoName}`}
            className={styles.left}
          >
            <Image
              src={logo}
              width={100}
              height={80}
              className={styles.offerImg}
              alt={providerName ? providerName : 'broadband'}
              title={providerName ? providerName : 'broadband'}
            />
          </Link>
          <div className={styles.right}>
            <h4>
              {speedScale === 'unlimited' ? (
                <span className={styles.unlimitedTxt}>Unlimited</span>
              ) : (
                <>
                  <span className={styles.bandWidTxt}>{speed}</span>
                  <span>{speedScale}</span>
                </>
              )}
            </h4>
            <p>Speed</p>
            <h4>
              {bandwidthSpeedScale === 'unlimited' ? (
                <span className={styles.unlimitedTxt}>Unlimited</span>
              ) : (
                <>
                  <span className={styles.bandWidTxt}>{bandwidth}</span>

                  <span>{bandwidthSpeedScale} </span>
                </>
              )}
            </h4>
            <p>Data Limit</p>
          </div>
        </div>
        {OTTLISTITEM && OTTLISTITEM.length > 0 ? (
          <div className={styles.middle}>
            {OTTLISTITEM.map((item: any) => {
              return (
                <span
                  key={item.id}
                  data-tooltip-id="broadband-tooltip"
                  data-tooltip-content={item.toolTip}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        ) : (
          <div className={styles.noOttp}></div>
        )}

        <div className={styles.bottom}>
          <span data-symbl={currency} className={`${styles.monthPrice}`}>

          <span className={styles.currSymbl}>
            <CurrencyDisplay currency={currency} />
          </span>
            {cost}/{costDurationScale}
          </span>
          <Link
            href={`/${countryId}/broadband-plan/${seoName}`}
            className={styles.moreBtnDetails}
          >
            More Details
          </Link>
        </div>
        {type && type === 'nonfree' ? (
          <span className={styles.limitedOffer}>limited period offer</span>
        ) : (
          ''
        )}
        {type && type === 'paid' ? (
          <span className={styles.paid}>prime customers only</span>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default OfferCardComponents;
