

import styles from './Contact.module.scss';

const ContactUsPage = ({data}:any)=>{
    return (
        <>
             <div className={`blackBg`}>
                <main className={`${styles.contactWrap} wrapContainer`}>
                    <div className={styles.topSec}>
                        <h2>Get In Touch</h2>
                        <h4>
                            We'd love to hear from you.<br />
                            Our friendly team is always here to chat.
                        </h4>
                    </div>
                    <div className={styles.listSec}>
                        <ul className={styles.boxList}>
                            {
                                data && data.length > 0 && data.map((item:any)=>{
                                    return (
                                        <li key={item.label}>
                                            <h2 className={styles.chat}>
                                                {item.label}
                                            </h2>
                                            <h5>
                                                {item.desc}
                                            </h5>
                                            <p className={styles.textLink}>
                                                {item.value}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ContactUsPage;