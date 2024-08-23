
import styles from './Error.module.scss';
import ErrorImage from '../../../public/assets/images/404.png';
import Image from 'next/image';

const ErrorPageNotFound = ()=>{
    return (
        <>
            <div className={`blackBg`}>
                <main className={`${styles.errorWrap} wrapContainer`}>
                    <div className={styles.imgSection}>
                        <Image 
                            src={ErrorImage}
                            alt='Errro Page'
                        />
                    </div>
                    <p className={styles.errorTxt}>The Page you're looking for was either removed or doesn't exist</p>
                    <div className={styles.errorBtnSec}>
                        <span className={styles.btnError}>
                        Keep Looking
                        </span>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ErrorPageNotFound;