import styles from './SingleBlogDetails.module.scss';
import BlogPostSingleItem from '../BlogPage/BlogPostSingle';
import NotifiComponents from '../BlogPage/NotifiEmailComponents';
const RightSideBlogDetails = ()=>{
    return (
        <>
            <div className={styles.leftWrapSec}>
                <h3>Suggested Plans</h3>
                <BlogPostSingleItem />
                <NotifiComponents />
                <div className={styles.addSection}>
                AD SPACE
                </div>
                <BlogPostSingleItem />
            </div>
        </>
    )
}


export default RightSideBlogDetails;