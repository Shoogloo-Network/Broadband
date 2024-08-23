import Link from 'next/link';
import styles from './SingleBlogDetails.module.scss';
import BlogSingleImage from '../../../public/assets/images/blogsingle.png';
import Image from 'next/image';

const LeftSideBlogDetails = ()=>{
    return (
        <>
        <div className={styles.topSection}>
            <Link href="/blog">
                <span className={styles.backBtn}>Back</span>
            </Link>
        </div>
        <h1 className={styles.head1}>How much data do you need? Know your Usage.</h1>
        <div className={styles.topTagWrap}>
            <ul className={styles.tagList}>
                <li>
                    <span>Guide</span>
                </li>
                <li>
                    <span>4 Min read</span>
                </li>
            </ul>
            <span className={styles.rightDate}>Apr 16, 2017</span>
        </div>
        <div className={styles.blogDetailsTxt}>
            <p>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </p>
            <div className={styles.imgSection}>
                <Image 
                    src={BlogSingleImage}
                    alt="Blog Details image"
                />
            </div>
            <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
            <div className={styles.imgSection}>
                <Image 
                    src={BlogSingleImage}
                    alt="Blog Details image"
                />
            </div>
            <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
            <div className={styles.imgSection}>
                <Image 
                    src={BlogSingleImage}
                    alt="Blog Details image"
                />
            </div>
            <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>

        </div>
        <div className={styles.blogFooter}>
            <Link href="/blog/100/next-blog-for-sample-list">
                <span className={styles.nextReadBtn}>Next Read </span>
            </Link>
        </div>
        </>
    )
}


export default LeftSideBlogDetails;