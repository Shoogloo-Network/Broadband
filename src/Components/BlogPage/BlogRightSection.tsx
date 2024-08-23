import styles from './Blog.module.scss';
import BlogPostSingleItem from './BlogPostSingle';
import NotifiComponents from './NotifiEmailComponents';

const BlogRightSectionComponents = ()=>{
    return (
        <>
            <div className={styles.right}>
                <BlogPostSingleItem />
                <NotifiComponents />
            </div>
        </>
    )
}

export default BlogRightSectionComponents;
