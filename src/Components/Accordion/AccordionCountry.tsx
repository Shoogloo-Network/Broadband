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

function AccordionCountry() {
  const accordionData = [
    { title: 'Why should I choose JioFiber for an internet connection?', content: <>Here are the reasons why you must choose JioFiber.
    SET-TOP BOX:
    4K Set-top Box worth Rs. 6,000 at no extra cost for JioFiber Postpaid connection (Rs. 1,000 refundable security deposit only for JioFiber Prepaid connection)
    Free subscriptions to upto 16+ paid OTT apps like Netflix, Amazon Prime Video, Disney+ Hotstar, Universal+, Lionsgate Play, SonyLiv, Zee5, SunNxt, Hoichoi, Voot Kids etc. 
    starting for Rs.499 and above.
    ALWAYS ON-SERVICE:
    With JioFiber Postpaid always stay connected 24x7 without any service disruptions even after your bill date.
    Highest quality service with 99.9% uptime</> },
    { title: 'Which is the best WiFi plan?', content:  <>currently there is no free trial available for JioCinema Premium Plan.</> },
    { title: 'What are the features and benefits of JioFiber?', content: <>The JioCinema Premium Plan is billed at the beginning of buying the service and is non-refundable. It is a recurring subscription, i.e, you will have to renew it after every 12 months. As for in-app purchases on iTunes, you must check your payment history and renewal dates.</> },
    { title: 'What are the features and benefits of JioFiber?', content: <>No, currently you can only register using your active mobile number and OTP verification.</> },
    { title: 'What is the applicable security deposit for the JioFiber Postpaid connection?', content:  <>For any other questions or problems with your subscription, you can write to them at support@jiocinema.com, providing your order ID, payment reference number, invoice, or a screenshot/image of the payment.</> },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default AccordionCountry;
