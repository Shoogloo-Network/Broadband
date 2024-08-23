import styles from './HowitWorks.module.scss';
import { generalsans, belfast } from '../../utils/fonts';
const HowItWorksComponents = () => {
  return (
    <>
      <section className={`blackBg ${generalsans.className}`}>
        <div className={`${styles.wraperSection} wrapContainer`}>
          <h5>help us find the right broadband for you</h5>
          <h4 className={belfast.className}>How it Works</h4>
          <div className={styles.boxContainer}>
            <ul className={styles.workListItem}>
              <li>
                <span className={`${styles.step_1} ${styles.step}`}></span>
                <span className={styles.btnWrap}>Step 1.</span>
                <h4>Check Availability</h4>
                <p>
                  Search your City and check which internet options are
                  available in your area.
                </p>
              </li>
              <li>
                <span className={`${styles.step_2} ${styles.step}`}></span>
                <span className={styles.btnWrap}>Step 2.</span>
                <h4>Compare Plans</h4>
                <p>
                  Compare the plans of all the providers available in your area.
                </p>
              </li>
              <li>
                <span className={`${styles.step_3} ${styles.step}`}></span>
                <span className={styles.btnWrap}>Step 3.</span>
                <h4>Choose your Plan!</h4>
                <p>After comparing, choose the plan that suits you the best!</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksComponents;
