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
    { title: 'What is SonyLIV?', content: 'SonyLIV is an Over-The-Top (OTT) streaming platform brought to you by Sony Pictures Networks India. It offers a wide variety of entertainment content, including TV shows, movies, live sports, original series, and more. ' },
    { title: 'How can I access SonyLIV?', content: 'You can access SonyLIV through its official website, mobile apps for iOS and Android devices, as well as on smart TVs and streaming devices like Amazon Fire TV, Apple TV, and others. ' },
    { title: 'Is there a free version of SonyLIV? ', content: 'Yes, SonyLIV offers a free plan that provides access to a limited selection of content. However, it is ad-supported. ' },
    { title: 'What is included in the Premium subscription plan? ', content: 'The Premium subscription plan unlocks the entire library of content on SonyLIV, including exclusive originals, live sports, and a vast collection of movies and TV shows. It also comes with an ad-free viewing experience. ' },
    { title: 'Are there special subscription plans available? ', content: 'Yes, SonyLIV often introduces special subscription plans during major events or festivals, offering unique discounts and benefits for a limited time. Keep an eye out for these special offers. ' },
    { title: 'Can I download content for offline viewing? ', content: 'Yes, SonyLIV allows you to download your favorite shows and movies for offline viewing. This feature is especially useful for watching content without an internet connection. ' },
    { title: 'Does SonyLIV offer content in multiple languages? ', content: 'Yes, SonyLIV provides content in various languages, including Hindi, English, Marathi, Tamil, Telugu, and more. Subtitles are also available for many shows and movies. ' },
    { title: 'Is parental control available on SonyLIV? ', content: 'Yes, SonyLIV includes parental control features that allow parents to restrict content that may not be suitable for children, ensuring a family-friendly viewing experience. ' },
    { title: 'What kind of sports content can I watch on SonyLIV?', content: 'SonyLIV offers live streaming of various sporting events, including cricket, football, wrestling, and more. It is known for being the exclusive platform for streaming the Indian Premier League (IPL) and other cricket content. ' },
    { title: 'Are there original series and movies on SonyLIV? ', content: <>Yes, SonyLIV produces a variety of original series and movies, offering exclusive content that you won't find anywhere else. These originals feature renowned actors and directors, ensuring high-quality entertainment. </> },
    { title: 'Can I use SonyLIV outside of India? ', content: <>While SonyLIV primarily caters to the Indian audience, it may have limited international availability. Check the platform's official website or app for information on international access and content availability. </> },
    { title: 'How do I contact SonyLIVs customer support?', content: <>You can typically find customer support contact details on SonyLIV's official website or app. They may offer options such as email, live chat, or a customer support hotline for assistance with any issues or inquiries. </> },

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
