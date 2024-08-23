import styles from './HomeSlider.module.scss';
import React from 'react';
import Image from 'next/image';
import IndiaFlag from '../../../../public/assets/homelanding/indian-flag.png';
import SingaporeFlag from '../../../../public/assets/homelanding/singapore-flag.png';
import SaudiFlag from '../../../../public/assets/homelanding/saudi-arab.png';
import QatarFlag from '../../../../public/assets/homelanding/qatar.png';
import UaeFlag from '../../../../public/assets/homelanding/UAE.png';
import BahrainFlag from '../../../../public/assets/homelanding/bahrain.png';
import KuwaitFlag from '../../../../public/assets/homelanding/kuwait.png';
import { generalsans, belfast } from '../../../utils/fonts';
import Link from 'next/link';
const HomeSliderCustome = ({ data }: any) => {
  const tagline =
    data && data.tagline && data.tagline !== '' ? data.tagline : '';
  const headline =
    data && data.headline && data.headline !== '' ? data.headline : '';
  const desc = data && data.desc && data.desc !== '' ? data.desc : '';
  const stat1 = data && data.stat1 && data.stat1 !== '' ? data.stat1 : '';
  const stat1label =
    data && data.stat1label && data.stat1label !== '' ? data.stat1label : '';
  const stat2 = data && data.stat2 && data.stat2 !== '' ? data.stat2 : '';
  const stat2label =
    data && data.stat2label && data.stat2label !== '' ? data.stat2label : '';
  const formShow =
    data && data.formShow && data.formShow !== '' ? data.formShow : false;

  return (
    <section className={`blackBg ${generalsans.className}`}>
      <div className={`${styles.sliderWrap} wrapContainer`}>
        <div className={`${styles.topSecBtn} ${generalsans.className}`}>
          <button>{tagline}</button>
        </div>
        <div className={styles.ltsize}>
          <h2 className={belfast.className}>{headline}</h2>
          <p className={generalsans.className}>{desc}</p>
          <p>Pick your region-</p>
        </div>

        <ul className={styles.imgList}>
          <li>
            <Link href="https://broadband.asia/in/" title='India' target="_blank">
              <Image src={IndiaFlag} alt="India Flag" width={80} height={55} />
            </Link>
          </li>
          <li>
            <Link href="https://broadband.asia/sg/" title='Singapore' target="_blank">
              <Image
                src={SingaporeFlag}
                alt="SingaporeFlag"
                width={80}
                height={55}
              />
            </Link>
          </li>
          <li>
            <Link href="https://broadband.asia/sa/" title='Saudi Arabia' target="_blank">
              <Image src={SaudiFlag} alt="SaudiFlag" width={80} height={55} />
            </Link>
          </li>
          <li>
            <Link href="https://broadband.asia/qa/" title='Qatar' target="_blank">
              <Image src={QatarFlag} alt="QatarFlag" width={80} height={55} />
            </Link>
          </li>
          <li>
            <Link href="https://broadband.asia/ae/" title='UAE' target="_blank">
              <Image src={UaeFlag} alt="UaeFlag" width={80} height={55} />
            </Link>
          </li>
          <li>
            <Link href="https://broadband.asia/bh/" title='Bahrain' target="_blank">
              <Image src={BahrainFlag} alt="BahrainFlag" width={80} height={55} />
            </Link>
          </li>
          <li>
            <Link href="https://broadband.asia/kw/" title='Kuwait' target="_blank">
              <Image src={KuwaitFlag} alt="KuwaitFlag" width={80} height={55} />
            </Link>
          </li>
        </ul>

        {stat1 != '' && stat1label != '' ? (
          <div className={styles.sliderBottomWrap}>
            <h2>
              {stat1}
              <span>{stat1label}</span>
            </h2>
            {stat2 != '' && stat2label != '' ? (
              <h2>
                {stat2}
                <span>{stat2label}</span>
              </h2>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default HomeSliderCustome;
