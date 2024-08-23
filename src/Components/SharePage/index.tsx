import styles from './SharePage.module.scss';
import Image from 'next/image';
import { BsIntersect} from 'react-icons/bs';
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton} from 'react-share'


const ShareComponents = ({data, onClose, _shareUrl }:any)=>{
    const copyTxt = ()=>{
        navigator.clipboard.writeText(_shareUrl)
    }
    return(
        <div className={styles.shareWrap}>
            <div className={styles.shareSec}>
                <div className={styles.shareTop}>
                    <h5>Share {data}<span className={styles.shareClose}  onClick={onClose}></span></h5>
                </div>
                <div className={styles.shareList}>
                    <div className={styles.socialShare}>
                        <WhatsappShareButton url={_shareUrl}>
                            <Image width={55} height={55} alt='' src="/assets/images/logoIcon/whatUpIcon.png" />
                            <p>Whatsapp</p>
                        </WhatsappShareButton>
                        
                    </div>
                    <div className={styles.socialShare}>
                        <FacebookShareButton url={_shareUrl}>
                            <Image width={55} height={55} alt='' src="/assets/images/logoIcon/facebookIcon.png" />
                            <p>Facebook</p>
                        </FacebookShareButton>
                    </div>
                    <div className={styles.socialShare}>
                        <TwitterShareButton url={_shareUrl}>
                            <Image width={55} height={55} alt='' src="/assets/images/logoIcon/twitterIcon.png" />
                            <p>Twitter</p>
                        </TwitterShareButton>
                    </div>
                    {/* <div className={styles.socialShare}>
                        <Image width={55} height={55} alt='' src="/assets/images/logoIcon/googleIcon.png" />
                        <p>Google</p>
                    </div> */}
                    <div className={styles.socialShare}>
                        <LinkedinShareButton url={_shareUrl}>
                            <Image width={55} height={55} alt='' src="/assets/images/logoIcon/linkIcon.png" />
                            <p>Linkedin</p>
                        </LinkedinShareButton>
                    </div>
                    <div className={styles.socialShare}>
                        <EmailShareButton  url={_shareUrl}>
                            <Image width={55} height={55} alt='' src="/assets/images/logoIcon/mailIcon.png" />
                            <p>E-mail</p>
                        </EmailShareButton>
                    </div>
                </div>
                <div className={styles.shareForm}>
                    <div className={styles.form}>{_shareUrl}</div>
                    <span onClick={copyTxt} className={styles.copySec}>Copy <span className={styles.shareCopy}><BsIntersect /></span></span>
                </div>
            </div>
        </div>
    )
}

export default ShareComponents;