import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

import MovieSlider from '../../../public/assets/sonyliv/4.png';
import MovieSlider2 from '../../../public/assets/sonyliv/5.png';
import MovieSlider3 from '../../../public/assets/sonyliv/6.png';
import styles from '@/app/(basicPages)/ott/jio-cinema/jiocinema.module.scss';


const ReactSlickofferSony = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll
      // Add other Slick Carousel settings here
    };
  
    return (
      <div>
        <Slider {...settings}>
        <div className={styles.slide}>
                <div className={styles.col6}>
                    <h3>
                    Watch content from your favorite Sony TV channels
                    </h3>
                    <p>
                    Enjoy India’s best comedy TV Shows from SonySab!
                    </p>
                </div>
                <div className={styles.col6}>
                    <Image src={MovieSlider} alt={`Movie Slider`}  />
                </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.col6}>
                        <h3>
                        Forever Favorite WWE for you!
                        </h3>
                        <p>
                        Watch all the matches whenever you want
                        </p>
                    </div>
                    <div className={styles.col6}>
                    <Image src={MovieSlider2} alt={`Movie Slider`}  />
                    </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.col6}>
                        <h3>
                        Movies and TV Shows in the Language of your Choice.
                        </h3>
                        <p>
                        Now stream the content according to your language preference.
                        </p>
                    </div>
                    <div className={styles.col6}>
                    <Image src={MovieSlider3} alt={`Movie Slider`}  />
                    </div>
                </div>
        </Slider>
      </div>
    );
  };
  
  export default ReactSlickofferSony;






