import styles from './Blog.module.scss';
import BlogRightSectionComponents from './BlogRightSection';
import BlogHeroTopComponents from './BlogHeroTop';
import BlogPostSingleItem from './BlogPostSingle';
import { belfast } from '../../utils/fonts';
const BlogPage = () => {
  return (
    <>
      <div className={`whiteBg ${styles.contact} ${belfast.className}`}>
        <main className={`${styles.blogWraper} wrapContainer`}>
          <div className={styles.topSection}>
            <h1>Blogs</h1>
            <div className={styles.formGroup}>
              <select>
                <option value="latest">Latest</option>
                <option value="old">Old</option>
              </select>
            </div>
          </div>
          <div className={styles.blogSection}>
            <div className={styles.left}>
              <BlogHeroTopComponents />
              <ul className={styles.blogListSec}>
                <li>
                  <BlogPostSingleItem />
                </li>
                <li>
                  <BlogPostSingleItem />
                </li>
                <li>
                  <BlogPostSingleItem />
                </li>
                <li>
                  <BlogPostSingleItem />
                </li>
              </ul>
            </div>
            <BlogRightSectionComponents />
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogPage;
