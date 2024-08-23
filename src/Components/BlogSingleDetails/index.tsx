import styles from './SingleBlogDetails.module.scss';
import LeftSideBlogDetails from './LeftSection';
import RightSideBlogDetails from './RightSection';
import { generalsans } from '../../utils/fonts';
const SingleBlogDetails = () => {
  return (
    <>
      <div className={`whiteBg  ${generalsans.className}`}>
        <main className={`${styles.singleBlogWraper} wrapContainer`}>
          <div className={styles.blogLeftWraper}>
            <LeftSideBlogDetails />
          </div>
          <div className={styles.blogRightWraper}>
            <RightSideBlogDetails />
          </div>
        </main>
      </div>
    </>
  );
};

export default SingleBlogDetails;
