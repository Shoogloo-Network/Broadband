import React, { useState } from 'react';
import styles from './ReviewPost.module.scss';
import { clientSide } from '../../config';

const ReviewPost = ({ planDetails }: any) => {
  const projectId = planDetails && planDetails.projectId;
  const siteId = planDetails && planDetails.siteId;
  const name = 'Anonymous';
  const status = 0;
  const entityId = planDetails && planDetails.entityId;
  const category = planDetails && planDetails.categoryId;

  let [reviewTxt, setReviewTxt] = useState('');
  let [reviewSubmit, setReviewSubmit] = useState(false);
  const fetchAPICall = async (data: any) => {
    const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_APP_API_REVIEW_SAVE}`;
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
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    const submitData = {
      projectId: projectId,
      siteId: siteId,
      name: name,
      review: reviewTxt,
      reviewDate: new Date().toJSON(),
      status: status,
      entityId: entityId, // plan or provider id
      category: category, // broadband or provider
    };
    fetchAPICall(submitData);
  };
  return (
    <div className={styles.reviewSecForm}>
      {reviewSubmit ? (
        <p className={styles.feedbackSec}>
          Thank you for submitting your review. We have received it
          successfully, and our team will review your message before making it
          public.
          <br />
          We appreciate your feedback and will take it into consideration. If
          you have any further comments or questions, please feel free to reach
          out.
        </p>
      ) : (
        <form onSubmit={handlerSubmit}>
          <div className={styles.revFormGroup}>
            <textarea
              onChange={(e) => setReviewTxt(e.target.value)}
              value={reviewTxt}
              placeholder="Write a reviews..."
            ></textarea>
            <div className={styles.btnTxt}>as Anonymous</div>
          </div>
          <div className={styles.postBtn}>
            <button type="submit" className={styles.postBtn}>
              <span>Post</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default ReviewPost;
