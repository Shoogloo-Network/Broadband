import Image from 'next/image';
import styles from './CustomeLandingPage.module.scss';
import { generalsans, belfast } from '../../utils/fonts';

import easyOne from '../../../public/assets/homelanding/easy-1.png';
import authenticOne from '../../../public/assets/homelanding/authentic-1.png';
import cityOne from '../../../public/assets/homelanding/city-1.png';
import latestOne from '../../../public/assets/homelanding/latest-1.png';

const WhySectionComponents = () => {
  return (
    <>
      <section className={`whiteBg ${generalsans.className}`}>
        <div className={`${styles.wraperSection} wrapContainer`}>
          <div id={styles.whyUssection}>
            <h2>Why BroadBand.asia ?</h2>
            <p>So here a few reasons why our<br />
              valued users choose us-</p>
            <ul className={styles.whyUsList}>
              <li>
                  <div>
                    <Image 
                      src={easyOne}
                      alt="Easy Comparison"
                      width={30}
                      height={23}
                    />
                  </div>
                  <div>
                      <h4>Easy Comparison</h4>
                      <p>Compare all the plans <br />
                          with ease with our<br />
                          Rich filter Menu.
                      </p>
                  </div>
              </li>
              <li>
                  <div>
                  <Image 
                      src={latestOne}
                      alt="Easy Comparison"
                      width={30}
                      height={27}
                    />
                  </div>
                  <div>
                      <h4>Latest Offers</h4>
                      <p>Grab Latest plans<br />
                      and exclusive offers<br />
                      by signing up!
                  </p>
                      
                  </div>
              </li>
              <li>
                  <div>
                  <Image 
                      src={cityOne}
                      alt="Easy Comparison"
                      width={30}
                      height={29}
                    />
                  </div>
                  <div>
                      <h4>City Search</h4>
                      <p>Search all the<br />
                            serviceable providers<br />
                            based on your Region</p>
                  </div>
              </li>
              <li>
                  <div>
                  <Image 
                      src={authenticOne}
                      alt="Easy Comparison"
                      width={30}
                      height={28}
                    />
                  </div>
                  <div>
                      <h4>Authentic Reviews</h4>
                      <p>Read the reviews of the <br />
                          Broadband providers to <br />
                          make your smart choice!</p>
                  </div>
              </li>
            </ul>
        </div>
          {/* <div className={styles.extraSec}>
              <ul className={styles.infoListItem}>
                <li>It is along established fact that a reader will be dis</li>
                <li>It is along established fact that a reader will be dis</li>
                <li>It is along established fact that a reader will be dis</li>
                <li>It is along established fact that a reader will be dis</li>
              </ul>
              <div className={styles.rightSecImg}></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default WhySectionComponents;