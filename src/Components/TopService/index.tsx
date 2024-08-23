import styles from './TopServices.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CurrencyDisplay from '../CurrencyDisplay';
import { generalsans, belfast } from '../../utils/fonts';
const TopServiceComponents = ({ data }: any) => {
  return (
    <>
      <section className={`whiteBg ${generalsans.className}`}>
        <div className={`${styles.wraperSection} wrapContainer`}>
          <h2 className="head2">Top Service Providers.</h2>
          <h3 className={`head3 ${belfast.className}`}>Best Plans.</h3>
          <ul className={styles.plansList}>
            {data && data.length > 0
              ? data.map((item: any) => {
                  return (
                    <li key={item.id} className={styles.jio}>
                      <Link
                        href={`/provider/${item.seoName}/`}
                        className={styles.imgSec}
                      >
                        <Image
                          className={styles.providerImg}
                          alt={item.name}
                          src={item.logo}
                          width={100}
                          height={100}
                        />
                      </Link>
                    </li>
                  );
                })
              : ''}
          </ul>
          <p className={styles.txtPragCenter}>
            {/* Checkout Unlimited Plans Starting at just{' '}
            <span>
              <span className={styles.currency}>
              <CurrencyDisplay currency='' />
              </span>
              399/month
            </span> */}
            Checkout Unlimited Plans & Great offers
          </p>
          <div className={styles.btnWrap}>
            <Link href={'/high-speed-plans'} className={styles.btnPlan}>
              Find Plans
            </Link>
          </div>
          <p className={styles.txtCenterHome}>
            Broadband.asia compares and shows the Plans listed by the above
            providers and helps you make the right choice. Few exclusive plans
            might not be listed on Broadband.asia and all the plans listed
            might not be available depending on your location or ISPs coverage
            area.
          </p>
        </div>
      </section>
    </>
  );
};

export default TopServiceComponents;
