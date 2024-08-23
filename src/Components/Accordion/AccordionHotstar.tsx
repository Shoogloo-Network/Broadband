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
    { title: ' What is Disney+ Hotstar? ', content: 'Disney+ Hotstar is a popular subscription-based streaming platform that offers a wide variety of content, including Disney, Marvel, Star Wars, and National Geographic shows and movies, along with a range of regional and international content. ' },
    { title: 'What videos are available on Disney+ Hotstar?', content: 'Disney+ Hotstar offers a wide range of videos, including movies, TV shows, sports events, news, and original content. Users can access a diverse library of Indian and international content, spanning various genres and languages, making it a popular streaming platform for entertainment and sports enthusiasts.' },
    { title: 'Where is Disney+ Hotstar available?  ', content: 'Disney+ Hotstar, now rebranded as Disney+ Hotstar, is available in India, the United States, Canada, the United Kingdom, and some other countries. It offers a wide range of streaming content, including movies, TV shows, and sports, catering to diverse international audiences.  ' },
    { title: 'How long is the membership valid? ', content: "The validity of a Disney+ Hotstar membership can vary depending on the subscription plan chosen. Typically, memberships are offered on a monthly or annual basis, but specific durations may differ based on the user's location and plan selection. " },
    { title: 'Can I watch Disney+ Hotstar on my Smart TV?', content: "Yes, you can watch Disney+ Hotstar on your Smart TV by downloading the Disney+ Hotstar app from your TV's app store and logging in with your Disney+ Hotstar account. Disney+ Hotstar offers a wide range of streaming content, including movies, TV shows, and live sports, making it a popular choice for Smart TV users.  " },
    { title: 'How do I contact Disney+ Hotstar? ', content: 'You can contact Hotstar customer support through their website or mobile app. Look for the "Help" or "Contact Us" section, where you can find options for email or chat support. They also offer assistance through their social media channels and phone support, which may vary by region.' },
    { title: ' How am I getting billed for my subscription?  ', content: <>You are billed for your Disney+ Hotstar subscription through the payment method you provided during sign-up. This can be a credit card, debit card, PayPal, or other authorized payment options. The subscription fee is typically charged on a recurring basis, such as monthly or annually, depending on your chosen plan.</> },
    { title: 'What are the different payment methods available for the membership? ', content: <>Hotstar offers various payment methods for its membership, including credit and debit cards, net banking, UPI, Google Pay, Apple Pay, and gift cards. Users can choose their preferred method to subscribe to the platform and access its content, sports, and premium features. </> },
    { title: 'How do I cancel the subscription?', content: <>To cancel your Hotstar subscription, log in to your Hotstar account, go to the "My Account" or "Subscription" section, and follow the cancellation instructions provided. Be sure to confirm the cancellation to stop further billing. Contact Hotstar support for any issues or questions regarding the cancellation process.</> },

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
