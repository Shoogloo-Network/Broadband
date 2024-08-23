import styles from './FeedBack.module.scss';
import React, { useState } from 'react';
import { clientSide } from '../../config';
import feedBackJson from '../../Data/feedback.json';

const FeedBackComponents = ({ data, onClose }: any) => {
  const projectId = data && data.projectId;
  const siteId = data && data.siteId;
  const entityId = data && data.entityId;
  const category = data && data.category;

  let [reviewTxt, setReviewTxt] = useState('');
  let [reviewSubmit, setReviewSubmit] = useState(false);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setReviewTxt(value);
  };
  const fetchAPICall = async (data: any) => {
    const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_APP_API_REPORTABOUSE_SAVE}`;
    const headers = {
      'Content-Type': 'application/json',
      Projectid: data.projectId,
      Siteid: data.siteId,
      Cache: '1',
    };
    const options: RequestInit = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };
    const callAPI = await fetch(APIURL, options);
    const resData = await callAPI.json();
    if (resData && resData.statusCode === 200) {
      setReviewSubmit(true);
    }
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    const submitData = {
      projectId: projectId,
      siteId: siteId,
      data: reviewTxt,
      reportDate: new Date().toJSON(),
      entityId: entityId, // plan or provider id
      category: category, // broadband or provider
    };
    fetchAPICall(submitData);
  };
  return (
    <div className={styles.feedbckWrap}>
      <div className={styles.feedbackSec}>
        <div className={styles.feedbckTop}>
          <h5>
            Report this Plan{' '}
            <span className={styles.feedbckClose} onClick={onClose}></span>
          </h5>
        </div>
        <div className={styles.feedbckForm}>
          <h4>What's wrong with this plan?</h4>
          {reviewSubmit ? (
            <p className={styles.thankMsg}>
              Thank you for reporting. We will investigate the matter and notify
              our team. Rest assured, appropriate action will be taken.
            </p>
          ) : (
            <form noValidate onSubmit={submitHandler}>
              {feedBackJson &&
                feedBackJson.data &&
                feedBackJson.data.length > 0 &&
                feedBackJson.data.map((item: any) => {
                  return (
                    <div key={item.id} className={styles.formGroup}>
                      <div className={styles.radioSec}>
                        <input
                          type="radio"
                          defaultValue={item.label}
                          name="feedback"
                          id={`radio_${item.id}`}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <label htmlFor={`radio_${item.id}`}>{item.label}</label>
                    </div>
                  );
                })}

              <div className={`${styles.formGroup} ${styles.formGroupBtn}`}>
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedBackComponents;
