"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { getTinyUrl } from '@/utils/common';
import styles from "./TopProviderBox.module.scss";
import RatingGenrate from "../Rating";

const TopProviderBox = ({ details }: { details: any }) => {
  const [shortUrl, setShortUrl] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);


  const imgLink = (details && details.logo) || "";
  const name = (details && details.name) || "";
  const rating = (details && details.rating) || "";
  const description = (details && details.description) || "";
  const planLink = details.link || "";

  const getHostName = (hrefUrl: string) => {
    const url = hrefUrl;
    const regex = /^https?:\/\/(?:www\.)?([^/?]+)/i;
    const match = url.match(regex);
    const hostname = match ? match[1] : '';
    return hostname;
  };

  useEffect(() => {
    setIsClient(true);
    const fetchShortUrl = async () => {
      try {
        const shortenedUrl = await getTinyUrl(planLink);
        //const hostName = await getLocation(planLink)
        setShortUrl(shortenedUrl);
      } catch (error) {
        // Handle the error accordingly in your application
      }
    };

    if (planLink !== '') {
      //fetchShortUrl();
      const hostname = getHostName(planLink);
      setShortUrl(hostname);
    }
  }, [planLink]);

  if(!isClient) {
    return null;
  } 

  return (
    <div id={styles.topProviderBox}>
      <div className={styles.topProviderSection}>
        <div className={`${styles.topProviderLeft} `}>
          <Image
            src={imgLink}
            width={90}
            height={110}
            alt={name}
            title={name}
            style={{objectFit: "none"}}
          />
          <div className={styles.logoTxtLink}>
            <Link href={planLink} target="_blank">
              <span className={styles.linkIcon}>
                <BsBoxArrowUpRight />
              </span>
              {shortUrl}
            </Link>
          </div>
          <div className={styles.ratingList}>
            <RatingGenrate rating={rating} />
          </div>
        </div>

        <div className={styles.topProviderRight}>
          {description && description !== '' ? (
            <div className={styles.aboutTxt}>
              {/* <h2 style={{ marginBottom: "15px" }}>More About {name}</h2> */}
              <p
                style={{ marginBottom: "10px", lineHeight: "22px" }}
                className={styles.articleTxt}
                dangerouslySetInnerHTML={{ __html: !isReadMore ? description.slice(0, 450).concat(" ...") : description }}
              />
            </div>
          ) : (
            ''
          )}
          <a href="#" onClick={() => setIsReadMore(!isReadMore)}>{!isReadMore ? `Read More...` : `...Show Less`}</a>
        </div>
      </div>
    </div>
  );
};

export default TopProviderBox;
