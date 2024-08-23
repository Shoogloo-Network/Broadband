import heroImage from '../../../public/assets/images/bloghero.png';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Blog.module.scss';
const BlogHeroTopComponents = ()=>{
    return (
        <>
            <div className={styles.blogHeroSec}>
                <div className={styles.heroTop}>
                    <div className={styles.heroTopLeft}>
                        <span>Guide</span>
                        <span>4 Min read</span>
                    </div>
                    <div className={styles.heroTopRight}>
                        Apr 16, 2017
                    </div>
                </div>
                <h2>How much data do you need? Know your Usage.</h2>
                <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,...</p>
                <div className={styles.imgSection}>
                    <Link href="/blog/12/how-much-data-do-you-need">
                        <Image src={heroImage} alt="my Hero video"/>
                        <span className={`${styles.mobileTag} ${styles.desktopHide}`}>Guide</span>
                    </Link>
                </div>
                
                
                <h2 className={`${styles.mobleHead} ${styles.desktopHide}`}>How much data do you need? Know your Usage.</h2>
                <div className={`${styles.mobileReadMoreSec} ${styles.desktopHide}`}>
                    <span className={styles.readMore}>Read More</span>
                </div>
            </div> 
        </>
    )
}

export default BlogHeroTopComponents;