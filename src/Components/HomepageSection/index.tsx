import styles from './HomeSectionp.module.scss';
const HomepageSection = ({ data }: { data: string;}) => {
    return (
        <>
            <section>
                <div className={`${styles.homeSectionp} wrapContainer`}>
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                </div>
            </section>
        </>
    )
}

export default HomepageSection;