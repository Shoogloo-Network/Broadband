import styles from './GuideSection.module.scss';
import Image from 'next/image';
import BallImage from '../../../public/assets/images/photo.png';
import { generalsans, belfast } from '../../utils/fonts';
import Link from 'next/link';
import SliderComponent from '../../Components/Slider/SliderComponent';

const GuideSectionComponents = ({ viewBlogData }: any) => {
  return (
    <>
      <section className={`wrapSection whiteBg ${generalsans.className}`}>
        <div className={`${styles.howToGuide} wrapContainer`}>
          <div className={styles.left}>
            <h2 className={`head2 ${belfast.className}`}>Check out our blog</h2>
            <div className={styles.leftBtn}>
              <Link
                href="https://blog.broadband.asia/"
                target="_blank"
                className={styles.moreBtn}
              >
                More Guides
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <SliderComponent viewBlogData={viewBlogData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GuideSectionComponents;
