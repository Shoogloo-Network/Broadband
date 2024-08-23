"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '@/app/(basicPages)/ott/hotstar/hotstar.module.scss';

import hotstarIcon from '../../../public/assets/hotstar/disney_plus_hotstar_logo.png';
import Phone1 from '../../../public/assets/hotstar/hotstar-phone.png';
import Popcon from '../../../public/assets/jiocinema/popcon.png';

// import Entertainment from '/public/assets/jiocinema/entertainment.png';

import Accordion from '@/Components/Accordion/AccordionHotstar';

import ReactSlickHotstar from '@/Components/sliderHotstar/slick-slider'
import ReactSlickofferHotstar from '@/Components/sliderHotstar/slick-slideroffer'

const HotstarComponent = () => {
  return (
    <div>
            <Head>
                <title>Disney+ Hotstar: Stream Your Favorite Shows and Movies Online</title>
                <meta name="description" content="Watch your favorite movies, TV shows, sports, and more on Disney+ Hotstar. Enjoy a wide range of content from Bollywood to regional languages. Stream in HD quality and stay updated with the latest shows." />
                <meta name="keywords" content="Hotstar, Indian streaming, online entertainment, Bollywood, regional content, live sports, HD streaming, TV shows, movies" />
            </Head>
            <section className={styles.bannerjio}>
                <div className={styles.cover}>
                    <div className={styles.wrapContainer}>
                        <div className={styles.pt5}>
                            <div className={styles.jioTitle}>
                                <Image src={hotstarIcon} alt={`Icon`} width={50} />
                                <h1>Disney+ Hotstar</h1>
                            </div>
                            <p>Where Magic Meets Entertainment</p>
                        </div>
                        <div className={styles.jioCinema}>
                            <Image src={Phone1} alt={`Phone`} height={400} />
                            <div className={styles.aboutjioCinema}>
                                <h2>Disney+ Hotstar</h2>
                                <h3>Unlock a world of limitless entertainment right at your fingertips with Disney+ Hotstar!  </h3>
                                <p>Stream 100,000 hours of TV shows, movies and much more in 9 different languages with Disney+ Hotstar. Watch it on your phone or TV and start streaming your favourite content today! </p>
                                <Link href="https://www.hotstar.com/in/paywall" className="btnJioCinema">
                                    Watch Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.clear}></div>
            </section>
            <section className={`${styles.jioMovies} ${styles.pb0}`}>
                <div className={styles.wrapContainer}>
                    <div className={styles.movieSlider}>
                        <div className={styles.aboutjioMovies}>
                            <h3>
                                Dive into an extensive collection of movies, TV shows  and so much more! 
                            </h3>
                            <div className={styles.jioTitle}>
                                <Image src={hotstarIcon} alt={`Icon`} width={50} />
                                <h1>Disney+ Hotstar</h1>
                            </div>
                        </div>
                        <div className={styles.slider}>
                            <div className="jioMovie">
                                <ReactSlickHotstar />
                            </div>
                        </div>
                        <div className={styles.clear}></div>
                    </div>
                </div>
                <div className={styles.clear}></div>
            </section>
            <section className={styles.py5}>
                <div className={styles.wrapContainer}>
                    <div className={styles.moreTvShow}>
                        <div className={`${styles.tvShow} ${styles.textTtart} ${styles.col7}`}>
                            <Image src={Popcon} alt={`Popcon`} />
                            <p>More than 10,000+ hours of Movies, TV shows and much more with Disney+ Hotstar  </p>
                        </div>
                        <div className={`${styles.btnWatch} ${styles.col5}`}>
                            <Link href="https://www.hotstar.com/in/paywall" className="btnJioCinema">
                                Watch Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.clear}></div>
            </section>
            <section>
                <div className={styles.wrapContainer}>
                    <div className={styles.movieSlider}>
                        <ReactSlickofferHotstar />
                        <div className={styles.clear}></div>
                    </div>
                </div>
                <div className={styles.clear}></div>
            </section>
            <section className={styles.jioCinemaPremium}>
                <div className={`${styles.cover} ${styles.dFlex}`}>
                    <div className={`${styles.wrapContainer} ${styles.subscribeBox}`}>
                        <div className={`${styles.textCenter} ${styles.subscribe}`}>
                            <div className={styles.jioTitle}>
                                <Image src={hotstarIcon} alt={`Icon`} width={50} />
                                <h1>Disney+ Hotstar</h1>
                            </div>
                            <h3>
                                Subscription Plans
                            </h3>
                            <p>
                            Disney+ Hotstar offers a range of subscription plans to cater to different user preferences:
                            </p>
                            <div className={styles.hollywoodMovies}>
                                <h3>Disney+ Hotstar offers several subscription plans:</h3>
                                <ul>
                                    <li>Disney+ Hotstar Super Plan: ₹899/Year</li>
                                    <li>Disney+ Hotstar Premium Plan: ₹299/Month</li>
                                    <li>Disney+ Hotstar Premium Plan: ₹1499/Year </li>
                                    <li>Disney+ Hotstar Mobile Plan: ₹149/3 Months</li>
                                    <li>Disney+ Hotstar Mobile Plan: ₹499/Year</li>
                                </ul>
                                <div className={styles.clear}></div>
                            </div>
                            <h3>
                                Get Premium for just ₹1499 for 12 Months
                            </h3>
                            <div className="">
                                <Link href="https://www.hotstar.com/in/paywall" className="btnJioCinema">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.clear}></div>
                </div>
                <div className={styles.clear}></div>
            </section>
            <section className={styles.moreShows}>
                <div className={styles.wrapContainer}>
                    <div className={styles.dFlex}>
                        <div className={styles.col3}>
                            {/* <Image src={Entertainment} alt={`Entertainment`} /> */}
                        </div>
                        <div className={styles.col9}>
                            <div className={styles.aboutShows}>
                                <h4>Explore Disney+ Hotstar: Where Magic Meets Entertainment </h4>
                                <h4>Introduction</h4>
                                <p>
                                    Welcome to our comprehensive guide on Disney+ Hotstar, a streaming platform that brings the magic of Disney, 
                                    the epic storytelling of Marvel, the iconic characters of Star Wars, and an array of engaging content 
                                    all under one roof. Disney+ Hotstar is a premier Over-The-Top (OTT) streaming service that offers a vast
                                     spectrum of content for audiences of all ages. In this article, we'll take you on a journey through the 
                                     world of Disney+ Hotstar, detailing its features, content library, and services. 
                                </p>
                                <h4>What is Disney+ Hotstar?  </h4>
                                <p>
                                    Disney+ Hotstar is the result of a collaboration between Disney and Star India, and it has become one of India's 
                                    most beloved and diverse streaming platforms. Launched in April 2020, Disney+ Hotstar offers a wide array of content, 
                                    including Disney classics, Marvel superhero adventures, Star Wars sagas, Bollywood hits, original series, live sports,
                                    and much more. It's designed to cater to the entertainment needs of millions of viewers across India and beyond. 
                                </p>
                               
                                <h4>Key Features and Services</h4>
                                <ul>
                                    <li>Content Library: Disney+ Hotstar boasts a vast and ever-growing library of content that encompasses 
                                        numerous genres. You can explore Disney classics, Marvel and Star Wars franchises, Bollywood movies, 
                                        TV shows, and much more.  </li>
                                    <li>Originals and Exclusives: Disney+ Hotstar is accessible on various devices, including smartphones,
                                         tablets, smart TVs, and web browsers, ensuring you can enjoy your favorite content anytime, anywhere. 
                                    </li>
                                    <li>Content in Multiple Languages: The platform offers content in multiple languages,
                                         making it accessible to a diverse audience. Whether you prefer English, Hindi, Tamil,
                                          Telugu, or other languages, Disney+ Hotstar has something for everyone. 
                                    </li>
                                    <li>Offline Download: 
                                        You can download your favorite shows and movies for offline viewing, allowing you to enjoy content 
                                        on the go without an internet connection. 
                                    </li>
                                    <li>Personalized Recommendations: Disney+ Hotstar utilizes advanced algorithms to analyze your viewing 
                                        preferences and provide personalized content recommendations, helping you discover new shows and movies
                                         you're likely to enjoy. 
                                    </li>
                                    <li>Parental Control:For families, Disney+ Hotstar includes parental control features, allowing parents to 
                                        restrict content that may not be suitable for children, ensuring a safe and family-friendly viewing experience. 
                                    </li>
                                    
                                </ul>

                                <h4>In Conclusion </h4>
                                <p>
                                Disney+ Hotstar is a versatile and comprehensive streaming platform that brings the magic of Disney, the excitement of Marvel, 
                                and the epic tales of Star Wars to your screens. Whether you're a fan of movies, TV shows, live sports, or exclusive originals, 
                                Disney+ Hotstar has something for everyone. With its user-friendly interface and multi-platform accessibility, it's the perfect
                                 destination for entertainment seekers in India and beyond. So, why wait? Dive into the enchanting world of Disney+ Hotstar and
                                  unlock a universe of captivating entertainment! 
                                </p>

                                <div className={styles.getbtn}>
                                    <Link href="https://www.hotstar.com/in/paywall" className="btnJioCinema">
                                        Get Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.clear}></div>
            </section>
            <section className={styles.moreShows}>
                <div className={styles.wrapContainer}>
                    <h1 className={`${styles.textCenter} ${styles.pb20}`}>Frequently Asked Questions:</h1>
                    <Accordion />
                </div>
                <div className={styles.clear}></div>
            </section>
    </div>
  )
}

export default HotstarComponent