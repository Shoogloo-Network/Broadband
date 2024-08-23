import styles from './NotifiEmail.module.scss';
import { useState } from 'react';

const NotifiComponents = () => {
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
      <div className={styles.notifiWrap}>
        <h3>Get Notified</h3>
        <p>Drop us your e-mail ID so that you dont miss our latest blogs.</p>
        {state == 2 ? (
          <p>
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
                  placeholder="examplemail@broadband.asia"
                  id=""
                  defaultValue=""
                />
              </div>
              <div className={styles.formSubmitBtn}>
                <button type="submit">Get email Updates</button>
              </div>
              {state === 3 ? <p>{errorMsg}</p> : ''}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default NotifiComponents;
