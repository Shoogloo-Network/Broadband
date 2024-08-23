import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type AccordionItemProps = {
    title: string; 
    content: any;
  };

  function AccordionItem({ title, content }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
          <div className={`${styles.accordionItemHeader} ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <span className={styles.accordionIcon}>
        {isOpen ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
      </span>
      {title}
    </div>
      {isOpen && <div className="accordionItemContent">{content}</div>}
    </div>
  );
}

function Accordion() {
  const accordionData = [
    { title: 'Can I register using my email id?', content: 'No, currently you can only register using your active mobile number and OTP verification. ' },
    { title: 'How am I billed for my subscription?', content: 'The JioCinema Premium Plan is billed at the beginning of buying the service and is non-refundable. It is a recurring subscription, i.e, you will have to renew it after every 12 months. As for in-app purchases on iTunes, you must check your payment history and renewal dates.' },
    { title: 'Is there a Free Trial Available?', content: 'currently there is no free trial available for JioCinema Premium Plan.' },
    { title: 'How Do I cancel my Jio Subscription', content: <><p>Here are shorter paragraphs for the information about canceling subscriptions on JioCinema:</p>
    <h5>For Gift Cards, Partner Promos, or Partner Recharges:</h5>
    <p>No need to cancel. They automatically expire at the end of the current subscription period.</p>
    <h5>One-time Subscriptions:</h5>
    <p>No cancellation option, as they naturally expire at the end of the subscription period.</p>
    <h5>To Cancel Recurring Subscriptions:</h5>
    <h5 className={styles.planBoxtxtitalic}>For Debit Card/Credit Card/UPI:</h5>
    <p>1. Log in and tap More at the bottom right.</p>
    <p>2. Choose Manage Subscriptions.</p>
    <p>3. Click Cancel Subscription to end your subscription.</p>
    <h5 className={styles.planBoxtxtitalic}>For Apple iTunes store:</h5>
    <p>1. On your iOS device, tap the Settings icon.</p>
    <p>2. Select iTunes & App Store.</p>
    <p>3. Click on Apple ID, then tap View Apple ID.</p>
    <p>4. Choose Subscriptions and select JioCinema.</p>
    <p>5. Tap Cancel Subscription.</p>
    <h5 className={styles.planBoxtxtitalic}>For PlayStore:</h5>
    <p>1. Open Google PlayStore.</p>
    <p>2. Click on Profile / Payments and subscriptions / Subscriptions / JioCinema.</p>
    <p>3. Click Cancel Subscription to discontinue.</p>
    <h4 className={styles.planBoxtxtpl18}>Important Notes on Cancellation:</h4>
    <p>- iTunes recurring plans can only be canceled via an iOS device or iTunes Account.</p>
    <p>- All plans are non-refundable.</p>
    <p>- Cancellation doesnt result in a refund but prevents renewal charges.</p>
    <p>- You maintain access until the current billing period ends, even if you cancel midway.</p>
    <h4 className={styles.planBoxtxtpl18}>For Other Subscription Queries or Issues:</h4>
    <p>For any other questions or problems with your subscription, you can write to them at support@jiocinema.com, providing your order ID, payment reference number, invoice, or a screenshot/image of the payment.</p>
    <h4 className={styles.planBoxtxtpl18}>Reviews by JioCinema Users</h4>
    <p>“Very easy to use app, a lot of content available in the library. Loved watching Tanu Weds Manu, laughed a lot” Mohini from Pune</p>
    <p>“Best watch to stream cricket on!! Saw All IPL MATCHES on JioCinema, there was no buffering and quality was amazing 4K resolution. Best part was I could watch it in my regional language as well with my parents” Sahil from Bangalore</p>
    <p>“Fantastic streaming app to view anything and everything. I love their HBO collection. A big fan of White Lotus, I was extremely curious to watching this piece and was so happy Jio offered it. Best subscription I have ever purchased, superb international content library” Riya from Delhi</p>
    <h4 className={styles.planBoxtxtpl18}>Conclusion:</h4>
    <p>The JioCinema app is an all content inclusive app that offers its users the diversity of movies and TV Shows. With a vast content library and seamless streaming experience, JioCinema is leaving a mark in the video-on-demand industry. </p></> },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
