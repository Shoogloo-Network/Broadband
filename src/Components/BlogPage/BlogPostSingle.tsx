import Image from 'next/image';
import SampleImage from '../../../public/assets/images/blog-1.png';
import Link from 'next/link';

import styles from './Blog.module.scss';
const BlogPostSingleItem = ()=>{
    return (
        <>
            <div className={styles.blogSingleWrap}>
                <div className={styles.imgSection}>
                    <Link href="/blog/12/how-much-data-do-you-need">
                        <Image 
                        src={SampleImage}
                        alt="Blog sample pic"
                        />
                        <span className={`${styles.mobileTag} ${styles.desktopHide}`}>Guide</span>
                    </Link>
                </div>
                <h2>How much data do you need? Know your Usage.</h2>
                <p>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum...
                </p>
                <div className={styles.bottomSec}>
                    <div className={styles.left}>
                        <span>Guide</span>
                        <span>4 Min read</span>
                    </div>
                    <div className={styles.right}>Apr 16, 2017</div>
                </div>
                <div className={`${styles.mobileReadMoreSec} ${styles.desktopHide}`}>
                    <span className={styles.readMore}>Read More</span>
                </div>
            </div>
        </>
    )
}

export default BlogPostSingleItem;