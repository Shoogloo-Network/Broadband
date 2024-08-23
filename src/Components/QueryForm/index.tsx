import styles from './QueryPostForm.module.scss';
import React, { useState } from 'react';
import { clientSide } from '../../config';
import feedBackJson from '../../Data/feedback.json';

const QueryPostForm = ({ data, onClose }: any) => {
  const projectId = data && data.projectId;
  const siteId = data && data.siteId;
  const entityId = data && data.entityId;

  let [formData, setFormData] = useState({
    email: '',
    phone: '',
    city: '',
    zip: '',
    name: '',
    newConnection: 1,
  });
  let [reviewSubmit, setReviewSubmit] = useState(false);
  const handleChangeValue = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const fetchAPICall = async (data: any) => {
    const APIURL = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_APP_API_LEADFORM_SAVE}`;
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
    const dataPost = {
      ...formData,
      projectId: projectId,
      siteId: siteId,
      submitFormDate: new Date().toJSON(),
      formName: entityId, // plan or provider id
    };
    if (!validateName(formData.name)) {
      alert('Please provide us correct name');
    } else if (!validateEmail(formData.email)) {
      alert('Please provide us correct email id ');
    } else if (!validateName(formData.phone)) {
      alert('Please provide us correct mobile no ');
    } else if (!validateName(formData.city)) {
      alert('Please provide us correct city name ');
    } else {
      fetchAPICall(dataPost);
    }
  };
  // Email validation function
  const validateEmail = (email: string) => {
    // Use a regular expression or any other validation logic
    // Here's a simple email validation regex example:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Name validation function
  const validateName = (name: any) => {
    // Use any validation logic as per your requirements
    // Here's a simple example that checks if the name has at least 2 characters:
    return name.length >= 2;
  };
  return (
    <div className={styles.feedbckWrap}>
      <div className={styles.feedbackSec}>
        <div className={styles.feedbckTop}>
          <h5>
            Get the latest deal and offers on your Broadband plans{' '}
            <span className={styles.feedbckClose} onClick={onClose}></span>
          </h5>
        </div>
        <div className={styles.feedbckForm}>
          <div className={styles.tophead_1}>
            Fields marked with an <span className={styles.red}>*</span> are
            required{' '}
          </div>

          {reviewSubmit ? (
            <p className={styles.thankMsg}>
              ‘Thank you for showing interest in getting the best broadband
              connection with <b>Broadband.asia</b>, our team will work to get
              the best offers and plans for you!’
            </p>
          ) : (
            <form noValidate onSubmit={submitHandler}>
              <div className={`${styles.formGroup} ${styles.slectMenu}`}>
                <div className={`${styles.label}`}>
                  <label htmlFor="providerConnection">
                    Getting a new connection or upgrading to new broadband
                    provider?<span className={styles.red}>*</span>
                  </label>
                </div>
                <div className={styles.input}>
                  <select
                    onChange={handleChangeValue}
                    value={formData.newConnection}
                    name="newConnection"
                    id="providerConnection"
                  >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
              </div>

              <div className={styles.formWraper}>
                <div className={`${styles.formGroup}`}>
                  <div className={`${styles.label}`}>
                    <label htmlFor="fname">
                      First Name <span className={styles.red}>*</span>
                    </label>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="text"
                      onChange={handleChangeValue}
                      id="fname"
                      value={formData.name}
                      placeholder=""
                      name="name"
                    />
                  </div>
                </div>
                <div className={`${styles.formGroup}`}>
                  <div className={`${styles.label}`}>
                    <label htmlFor="email">
                      Email <span className={styles.red}>*</span>
                    </label>
                  </div>
                  <div className={styles.input}>
                    <input
                      onChange={handleChangeValue}
                      type="email"
                      id="email"
                      value={formData.email}
                      placeholder=""
                      name="email"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formWraper}>
                <div className={`${styles.formGroup}`}>
                  <div className={`${styles.label}`}>
                    <label htmlFor="phone">
                      Phone <span className={styles.red}>*</span>
                    </label>
                  </div>
                  <div className={styles.input}>
                    <input
                      onChange={handleChangeValue}
                      type="phone"
                      id="phone"
                      value={formData.phone}
                      placeholder=""
                      name="phone"
                    />
                  </div>
                </div>
                <div className={`${styles.formGroup}`}>
                  <div className={`${styles.label}`}>
                    <label htmlFor="city">
                      City <span className={styles.red}>*</span>
                    </label>
                  </div>
                  <div className={styles.input}>
                    <input
                      onChange={handleChangeValue}
                      type="text"
                      id="city"
                      value={formData.city}
                      placeholder=""
                      name="city"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formWraper}>
                <div className={`${styles.formGroup}`}>
                  <div className={`${styles.label}`}>
                    <label htmlFor="zip">Postal Code</label>
                  </div>
                  <div className={styles.input}>
                    <input
                      onChange={handleChangeValue}
                      type="zip"
                      id="zip"
                      value={formData.zip}
                      placeholder=""
                      name="zip"
                    />
                  </div>
                </div>
              </div>

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

export default QueryPostForm;
