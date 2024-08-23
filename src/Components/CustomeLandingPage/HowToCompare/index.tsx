import styles from './HowToCompare.module.scss';
import { generalsans, belfast } from '../../../utils/fonts';
const HowToCompareComponents = () => {
  return (
    <>
      <section className={`wrapSection whiteBg ${generalsans.className}`}>
        <div className={`${styles.howToCompare} wrapContainer`}>
          <h2 className="head2">How to Compare different</h2>
          <h3 className={`head3 ${belfast.className}`}>Broadband Plans?</h3>
          <ul className={styles.listItem}>
            <li>
              <div className={styles.imgWrap}>
                <span
                  className={`${styles.compare_1} ${styles.compareImg}`}
                ></span>
              </div>
              <h3>Determine Your Needs</h3>
              <p>
                The first step in comparing broadband plans is to identity your
                specific needs. Whether you need internet for working from home?
                or gaming ? or just streaming Netflix? ETC.
              </p>
            </li>
            <li>
              <div className={styles.imgWrap}>
                <span
                  className={`${styles.compare_2} ${styles.compareImg}`}
                ></span>
              </div>
              <h3>Check availability </h3>
              <p>
                Once you know your requirements, check the availability of
                broadband plans in your area. Not all providers offer their
                services in all locations, so it's important to check what's
                available in your region.
              </p>
            </li>
            <li>
              <div className={styles.imgWrap}>
                <span
                  className={`${styles.compare_3} ${styles.compareImg}`}
                ></span>
              </div>
              <h3>Compare Plans</h3>
              <p>
                Once you have identified the available plans in your area,
                compare them based on their pricing, speed, data allowance, OTT
                offers, and any additional features they offer.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HowToCompareComponents;
