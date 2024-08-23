import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import MovieSlider from '../../../public/assets/hotstar/7.png';
import MovieSlider2 from '../../../public/assets/hotstar/8.png';
import MovieSlider3 from '../../../public/assets/hotstar/9.png';
import styles from '@/app/(basicPages)/ott/hotstar/hotstar.module.scss';


const ReactSlickofferHotstar = () => {
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
            Disney+ Hotstar: Where Disney, Pixar, and Marvel and Much More Collide 
            </h3>
            <p>
            Indulge in the most up-to-date coverage of Disney, Marvel, Pixar, and all your loved content. 
            </p>
          </div>
          <div className={styles.col6}>
            <Image src={MovieSlider} alt={`Movie Slider`} />
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.col6}>
            <h3>
            Disney+ Hotstar magnificent content available in 30 different languages. 
            </h3>
            <p>
            Enjoy your preferred audio language while streaming your favourite TV shows and movies! 
            </p>
          </div>
          <div className={styles.col6}>
            <Image src={MovieSlider2} alt={`Movie Slider`} />
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.col6}>
            <h3>
            Explore a World of Entertainment: Hotstar's Diverse Range of Genres
            </h3>
            <p>
            Disney+ Hotstar offers a diverse range of genres, from Sci-fi and Horror to Romance and Thriller; take your pick and dive in! 
            </p>
          </div>
          <div className={styles.col6}>
            <Image src={MovieSlider3} alt={`Movie Slider`} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlickofferHotstar;






