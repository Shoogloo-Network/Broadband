import styles from './ComparePlans.module.scss';
import { generalsans, belfast } from '../../../utils/fonts';
const ComparePlansComponents = () => {
  return (
    <>
      <section className={`whiteBg ${generalsans.className}`}>
        <div className={`${styles.wraperSection} wrapContainer`}>
          <h2 className="head2">Why Compare</h2>
          <h3 className={`head3 ${belfast.className}`}>Broadband Plans?</h3>
          <div className={styles.boxContainer}>
            <ul className={styles.comparePlans}>
              <li className={styles.compareIcon}>
                <h4>Cost Savings</h4>
                <p>
                  Comparing broadband plans allows you to find the most
                  cost-effective option for your needs. By comparing plans, you
                  can identify the best deal available in terms of speed, data
                  allowance, and pricing.
                </p>
              </li>
              <li className={styles.betterFeIcon}>
                <h4>Better Features</h4>
                <p>
                  Different broadband plans come with different features, such
                  as free installation or a free Wi-Fi router. By comparing
                  plans, you can see which provider offers the best features for
                  your needs.
                </p>
              </li>
              <li className={styles.hiddenFeeIcon}>
                <h4>Avoid Hidden Fees</h4>
                <p>
                  Some broadband plans come with hidden fees or charges that may
                  not be evident upfront. By comparing plans, you can identify
                  any potential additional costs and make an informed decision.
                </p>
              </li>
              <li className={styles.reviewCustomerIcon}>
                <h4>Customer Support</h4>
                <p>
                  Good customer support is essential when it comes to broadband
                  plans. By comparing plans, you can identify providers with
                  good customer support and avoid any potential issues in the
                  future.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparePlansComponents;
