"use client"

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderCountry.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const SliderCountry = ({ topProviders }: any) => {

  const { countryId } = useParams();
  //const sliderRef = useRef(null);

  if(!topProviders) return null;
  

  const settings = {
    className: `slider-${countryId}-provider`,
    dots: false,
    infinite: true,
    speed: 500,
    arrow: true,
    slidesToShow: topProviders.length < 6 ? topProviders.length : 6, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    // Add other Slick Carousel settings here
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderListbox}>
      <Slider {...settings}>
        {topProviders && topProviders.map((provider: any, index: any) => {
          return (
            <div key={index} className={styles.sliderListProvider}>
              <div>
                <Link href={`/${countryId}/provider/${provider.seoName}`}>
                  <Image src={provider.logo} width={200} height={200} alt={provider.name} />
                  <div className={styles.txtplans}>{provider.name}</div>
                </Link>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default SliderCountry;
