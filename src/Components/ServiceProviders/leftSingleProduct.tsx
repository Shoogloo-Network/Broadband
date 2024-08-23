
import styles from './ServiceProvider.module.scss';
import fakeLogo from '../../../public/assets/images/frame.png';
import Image from 'next/image';
import Link from 'next/link';
const LeftSingleProduct = ()=>{
    return (
        <>
        <div className={styles.productWrap}>
                    <div className={styles.top}>
                        <div className={styles.leftPic}>
                            <Image 
                            src={fakeLogo}
                            alt='fake logo'/>
                        </div>
                        <div className={styles.rightTxt}>
                            <h2><Link href={`/providers/1`}>Fiber Net Plan 5</Link></h2>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <ul className={styles.prividerInfo}>
                            <li>
                                <span className={styles.bandWidth}>150</span>
                                <span className={styles.monthTxt}>Mb/s</span>
                            </li>
                            <li>
                                <span className={styles.bandWidth}>1000</span>
                                <span className={styles.monthTxt}>Gb</span>
                            </li>
                            <li>
                                <span className={styles.bandWidth}>18</span>
                                <span className={styles.monthTxt}>Months</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <span className={styles.compareBtn}>Add to Compare</span>
                        <span className={styles.viewDealBtn}>View Deal</span>
                    </div>
                </div>
        </>
    )
}

export default LeftSingleProduct;