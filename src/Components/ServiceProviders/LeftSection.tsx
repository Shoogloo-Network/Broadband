import styles from './ServiceProvider.module.scss';
import LeftAdComponents from '../Ad/LeftAd';
const LeftSectionProvider = () => {
  return (
    <>
      <div className={styles.right}>
        {/* <h3 className={styles.head3}>Similar Plans</h3>
                <LeftSingleProduct /> */}
        <div className="rightAdSec">
          <LeftAdComponents />
        </div>
        {/* <LeftSingleProduct /> */}
        {/* <div className={styles.couponsWrap}>
                    <h3 className={styles.head3}>Coupons for ACT Fiber</h3>
                    <ul className={styles.couponProduct}>
                        <li>
                            <h5 className={styles.topTxt}>
                                <span>Get 20% off </span>on your first plan subscription
                            </h5>
                            <div className={styles.txtCopy}>
                                ACTASIA50 <span className={styles.copyIcon}></span>
                            </div>
                        </li>
                        <li>
                            <h5 className={styles.topTxt}>
                                <span>Get 20% off </span>on your first plan subscription
                            </h5>
                            <div className={styles.txtCopy}>
                                ACTASIA50 <span className={styles.copyIcon}></span>
                            </div>
                        </li>
                        <li>
                            <h5 className={styles.topTxt}>
                                <span>Get 20% off </span>on your first plan subscription
                            </h5>
                            <div className={styles.txtCopy}>
                                ACTASIA50 <span className={styles.copyIcon}></span>
                            </div>
                        </li>
                    </ul>
                </div> */}
      </div>
    </>
  );
};

export default LeftSectionProvider;
