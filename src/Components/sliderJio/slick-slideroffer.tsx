import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieSlider from '../../../public/assets/jiocinema/movie-slider.png';
import MovieSlider2 from '../../../public/assets/jiocinema/movie-slider2.png';
import MovieSlider3 from '../../../public/assets/jiocinema/movie-slider3.png';
import styles from '@/app/(basicPages)/ott/jio-cinema/jiocinema.module.scss';


const ReactSlickofferJio = () => {
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
                        JioCinema offers amazing content in 11 different Languages!
                    </h3>
                    <p>
                        So stream your favourite TV Shows and Movies in the audio language of your choice!
                    </p>
                </div>
                <div className={styles.col6}>
                    <Image src={MovieSlider} alt={`Movie Slider`}  />
                </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.col6}>
                        <h3>
                            Watch all the popular sports live with JioCinema
                        </h3>
                        <p>
                            Enjoy the latest and 4k coverage of Cricket, Football, Tennis and all the games you love.
                        </p>
                    </div>
                    <div className={styles.col6}>
                    <Image src={MovieSlider3} alt={`Movie Slider`}  />
                    </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.col6}>
                        <h3>
                            Watch exclusive Movies and TV Shows released only on JioCinema
                        </h3>
                        <p>
                            Binge watch all the epic content that is released only on JioCinema regularly!
                        </p>
                    </div>
                    <div className={styles.col6}>
                    <Image src={MovieSlider2} alt={`Movie Slider`}  />
                    </div>
                </div>
        </Slider>
      </div>
    );
  };
  
  export default ReactSlickofferJio;






