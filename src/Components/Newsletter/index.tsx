"use client"

import styles from './Newsletter.module.scss';
import { useState } from 'react';
import { generalsans, belfast } from '../../utils/fonts';
const NewsLetterSubscribe = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const subscribe = async (e: any) => {
    e.preventDefault();

    setState(1);
    setErrorMsg('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e: any) {
      setErrorMsg(e);
      setState(3);
    }
  };
  return (
    <>
      <div className={`${styles.notifiWrap} blackBg`}>
        <div className={`${styles.newseWrapSec} wrapContainer`}>
          <div className={styles.textSec}>
            <h2
              className={`head2 ${styles.headNewsletter} ${belfast.className}`}
            >
              Subscribe to our Newsletter
            </h2>
          </div>
          <div className={styles.newsletterWrap}>
            {state == 2 ? (
              <p className={styles.thanksMessage}>
                Thanks for subscribing, you will receive mail once we launch our
                website.
              </p>
            ) : (
              <form onSubmit={subscribe}>
                <div className={styles.formGroup}>
                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      id=""
                      defaultValue=""
                    />
                  </div>
                  <div className={styles.formSubmitBtn}>
                    <button type="submit">Get Email Updates</button>
                  </div>
                  {state === 3 ? <p>{errorMsg}</p> : ''}
                </div>
              </form>
            )}
            <p className={styles.ptext}>
              We'll send you weekly newsletters about lastest updates, new plans
              and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterSubscribe;
