import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Slider.module.scss';
import Image from 'next/image';

const SliderComponent = ({ viewBlogData }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <Slider {...settings}>
      {viewBlogData && viewBlogData.length > 0 ? (
        viewBlogData.map((post: any) => (
          <div key={post.id} className={`${styles.sliderItem} ${styles.sliderInner}`}>
            <div className={styles.imgWrap}>
              <Image
                src={post.imageLink}
                alt={post.title}
                title={post.title}
                width={248}
                height={150}
              />
            </div>
            <p className='slider-p'>{post.title}</p>
            <div className={styles.btnSec}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <div>No blog posts to display</div>
      )}
    </Slider>
  );
};

export default SliderComponent;
