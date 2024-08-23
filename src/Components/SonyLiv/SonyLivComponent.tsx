"use client"

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Accordion from '@/Components/Accordion/Accordionsony';

import sonyIcon from '../../../public/assets/sonyliv/sony-logo.png';
import Phone1 from '../../../public/assets/sonyliv/sony-phone.png';
import Popcon from '../../../public/assets/jiocinema/popcon.png';

// import Entertainment from '/public/assets/jiocinema/entertainment.png';
import styles from '@/app/(basicPages)/ott/sonyliv/sony.module.scss';


import ReactSlickSony from '@/Components/sliderSony/slick-slider'
import ReactSlickofferSony from '@/Components/sliderSony/slick-slideroffer'

const SonyLivComponent = () => {
  return (
    <div>
            <Head>
                <title>SonyLiv - Watch Movies, TV Shows, and Live Sports Online</title>
                <meta name="description" content="Stream your favorite movies, TV shows, and live sports on SonyLiv. Enjoy a vast library of entertainment content on-demand." />
                <meta name="keywords" content="SonyLiv, streaming, movies, TV shows, live sports, online entertainment, on-demand, watch online" />
            </Head>
            <section className={styles.bannerjio}>
                <div className={styles.cover}>
                    <div className={styles.wrapContainer}>

                        <div className={styles.pt5}>
                            <div className={styles.jioTitle}>
                                <Image src={sonyIcon} alt={`Icon`} width={50} />
                                <h1>SonyLIV</h1>
                            </div>
                            <p>Non-stop entertainment</p>
                        </div>
                        <div className={styles.jioCinema}>
                            <Image src={Phone1} alt={`Phone`} height={400} />
                            <div className={styles.aboutjioCinema}>
                                <h2>SonyLIV</h2>
                                <h3>With SonyLIV you can easily stream 600+ movies and 300+ TV Shows on your phone or TV! </h3>
                                <p>Watch all your favorite TV Shows and Movies with SonyLIV app and enjoy your binge watching.</p>
                                <Link href="https://www.sonyliv.com/subscription" className="btnJioCinema">
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
                                Watch Exclusive TV Shows, Latest Movies and reality shows with SonyLIV
                            </h3>
                            <div className={styles.jioTitle}>
                                <Image src={sonyIcon} alt={`Icon`} width={50} />
                                <h1>SonyLIV</h1>
                            </div>
                        </div>
                        <div className={styles.slider}>
                            <div className="jioMovie">
                                <ReactSlickSony />
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
                            <p> Watch 600+ Movies and 300+ TV Shows and enjoy your binge watching! </p>
                        </div>
                        <div className={`${styles.btnWatch} ${styles.col5}`}>
                            <Link href="https://www.sonyliv.com/subscription" className="btnJioCinema">
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
                        <ReactSlickofferSony />
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
                                <Image src={sonyIcon} alt={`Icon`} width={50} />
                                <h1>SonyLIV</h1>
                            </div>
                            <h3>
                                Subscription Plans
                            </h3>
                            <p>
                                SonyLIV offers a range of subscription plans to cater to different user preferences:
                            </p>
                            <div className={styles.hollywoodMovies}>
                                <h3>SonyLIV offers several subscription plans:</h3>
                                <ul>
                                    <li>Sony LIV Premium Yearly Plan: ₹999 </li>
                                    <li>Sony LIV Premium 6 Months Plan: ₹699 </li>
                                    <li>Sony LIV Premium Monthly Plan: ₹299  </li>
                                    <li>Mobile-Only Plan: ₹599 </li>
                                </ul>
                                <div className={styles.clear}></div>
                            </div>
                            <h3 className={styles.py5}>
                                Get Premium for just ₹999 for 12 Months
                            </h3>
                            <div className="">
                                <Link href="https://www.sonyliv.com/subscription" className="btnJioCinema">
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
                                <h4>Explore SonyLIV: Your Gateway to Premium Entertainment</h4>
                                <h4>Introduction</h4>
                                <p>
                                    Welcome to our in-depth guide on SonyLIV, your one-stop destination for an array of
                                    premium entertainment content! SonyLIV is a renowned Over-The-Top (OTT) streaming platform that
                                    offers a diverse range of TV shows, movies, live sports, and original content, designed 
                                    to cater to a wide spectrum of audiences. In this article, we'll take you on a journey
                                    through the world of SonyLIV, detailing its features, content library, and services.
                                </p>
                                <h4>What is SonyLIV? </h4>
                                <p>
                                    SonyLIV's core library consists of 18+ years of content from Culver Max Entertainment's
                                    channels including Sony TV, Sony SAB, Sony Aath and Sony Marathi; and more than 700+
                                    movies, which means a total of 40,000+ hours of television show coverage in Hindi and
                                    English.
                                    Since its launch, SonyLIV has streamed live sports events.
                                    It also features content titles in India licensed from third-parties such as Lionsgate
                                    and ITV among others.
                                </p>
                                <p>
                                    In May 2020, SonyLIV underwent a comprehensive overhaul, leveraging the AWS Cloud for
                                    its content and interface improvements. SonyLIV harnessed the power of Amazon
                                    ElastiCache for real-time, in-memory caching on a large scale, implemented Amazon
                                    CloudFront as a high-speed content delivery network, and relied on Amazon Simple Queue
                                    Service (Amazon SQS) as a robust and highly available message queuing service.
                                </p>
                                <p>
                                    In June 2020, SonyLIV underwent another transformation, marking its second major revamp.
                                    During this update, SonyLIV expanded its content library to include streaming from
                                    eminent sources like Sony Pictures Entertainment, Sony Pictures Television Studios, ITV,
                                    and Reliance Entertainment. Additionally, SonyLIV commenced streaming its exclusive
                                    original movies and series. Since 2020, SonyLIV has adopted a more proactive role as
                                    both a producer and distributor of films and series, enriching its online content
                                    library with original programming.
                                </p>
                                <p>
                                    SonyLIV expanded its reach by launching as a streaming service in the United States on
                                    Sling TV, making all the shows available in India accessible on the app.
                                </p>
                                <p>
                                    On January 15, 2021, SonyLIV played host to the launch of WWE Network in India, marking
                                    an exciting addition to its content offerings.
                                </p>
                                <p>
                                    SonyLIV continued its global expansion, making its debut in Canada on October 14, 2021.
                                    Earlier in the year, on February 25, 2021, it extended its presence to Australia, New
                                    Zealand, and Singapore. On June 12, 2021, as part of Europe Phase-1, SonyLIV was
                                    introduced in Germany, Switzerland, Norway, Netherlands, Spain, France, and the UK, with
                                    Italy, Portugal, Ireland, Austria, Sweden, Belgium, Denmark, Finland, Greece, and Poland
                                    joining the roster on October 1, 2021, as part of Europe Phase-2.
                                </p>
                                <h4>Key Features and Services</h4>
                                <ul>
                                    <li>Content Library: SonyLIV boasts an extensive and ever-expanding library of content that
                                        spans various genres, making it suitable for individuals of all ages. You can find the
                                        latest Bollywood and Hollywood movies, popular TV shows, and a wide range of regional
                                        content, including Marathi, Tamil, and Telugu. </li>
                                    <li>Originals and Exclusives: SonyLIV produces a variety of original series and movies,
                                        offering viewers exclusive content that cannot be found anywhere else. These originals
                                        are well-crafted and often feature renowned actors and directors, ensuring high-quality
                                        entertainment.
                                    </li>
                                    <li>Live Sports: Sports enthusiasts can rejoice as SonyLIV provides live streaming of a
                                        multitude of sporting events, including cricket, football, wrestling, and more. It is
                                        home to exclusive cricket content such as the Indian Premier League (IPL), ensuring you
                                        don't miss any of the thrilling sporting action.
                                    </li>
                                    <li>Multi-Platform Accessibility: SonyLIV is available on a variety of platforms, including
                                        smartphones, tablets, smart TVs, and web browsers. This flexibility ensures you can
                                        enjoy your favorite content whenever and wherever you like.
                                    </li>
                                    <li>Content in Multiple Languages: The platform offers content in several languages, making
                                        it accessible to a diverse audience. You can choose from Hindi, English, Marathi, Tamil,
                                        Telugu, and more, with subtitles available for many shows and movies.
                                    </li>
                                    <li>Offline Download: Users can download their favorite shows and movies for offline
                                        viewing. This feature is particularly useful for those who wish to watch content while
                                        on the go, without consuming mobile data.
                                    </li>
                                    <li>Personalized Recommendations: SonyLIV employs advanced algorithms to analyze your
                                        viewing preferences and offers personalized recommendations, ensuring you discover new
                                        content you're likely to enjoy.
                                    </li>
                                    <li>Parental Control: For families, SonyLIV includes parental control features, allowing
                                        parents to restrict content that may not be suitable for children, thus ensuring a safe
                                        and family-friendly viewing experience. </li>
                                </ul>
                                <div className={styles.getbtn}>
                                    <Link href="https://www.sonyliv.com/subscription" className="btnJioCinema">
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

export default SonyLivComponent