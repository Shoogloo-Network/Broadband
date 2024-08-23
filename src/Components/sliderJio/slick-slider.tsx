import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import Movie from '../../../public/assets/jiocinema/IndvsAusonJioCinema.png';
import Movie1 from '../../../public/assets/jiocinema/PeacockcontentonJioCinema.png';
import Movie2 from '../../../public/assets/jiocinema/JioCinemaFilmFestbanner.png';


const ReactSlickJio = () => {
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
            <div>
                <Link href="#">
                    <Image src={Movie} alt={`Movie`} />
                </Link>
            </div>
            <div>
                <Link href="#">
                    <Image src={Movie1} alt={`Movie1`}  />
                </Link>
            </div>
            <div>
                <Link href="#">
                    <Image src={Movie2} alt={`Movie2`}  />
                </Link>
            </div>
        </Slider>
      </div>
    );
  };
  
  export default ReactSlickJio;






