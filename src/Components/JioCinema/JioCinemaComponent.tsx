"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/(basicPages)/ott/jio-cinema/jiocinema.module.scss';

import JioIcon from '../../../public/assets/jiocinema/jio-icon.png';
import Phone1 from '../../../public/assets/jiocinema/phone1.png';
import Popcon from '../../../public/assets/jiocinema/popcon.png';

import Entertainment from '../../../public/assets/jiocinema/entertainment.png';

import Accordion from '@/Components/Accordion/Accordion';

import ReactSlickJio from '@/Components/sliderJio/slick-slider'
import ReactSlickofferJio from '@/Components/sliderJio/slick-slideroffer'

const JioCinemaComponent = () => {
  return (
    <div>
      <section className={styles.bannerjio}>
        <div className={styles.cover}>
            <div className={styles.wrapContainer}>
                
                    <div className={styles.pt5}>
                        <div className={styles.jioTitle}>
                            <Image src={JioIcon} alt={`Icon`} width={50} />
                            <h1>JioCinema</h1>
                        </div>
                        <p>Non-stop entertainment</p>
                    </div>
                    <div className={styles.jioCinema}>
                        <Image src={Phone1} alt={`Phone`} height={400} />
                        <div className={styles.aboutjioCinema}>
                            <h2>JioCinema</h2>
                            <h3>With JioCinema you can now stream your Favourite content on the go!</h3>
                            <p>Carry 10,000+ movies, 700+ TV shows, and more in your pocket with the JioCinema or the
                                MyJio
                                app
                                on your phone.</p>
                            <Link href="https://www.jiocinema.com/subscription/plans" className="btnJioCinema">
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
                        Watch Free Movies, Your favorite sports, exciting TV Shows and many more
                    </h3>
                    <div className={styles.jioTitle}>
                        <Image src={JioIcon} alt={`Icon`} width={50} />
                        <h1>JioCinema</h1>
                    </div>
                </div>
                <div className={styles.slider}>
                    <div className="jioMovie">
                        <ReactSlickJio />
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
                    <Image src={Popcon} alt={`Popcon`}  />
                    <p>More than 10,000 movies and 700+ exciting TV Shows with JioCinema</p>
                </div>
                <div className={`${styles.btnWatch} ${styles.col5}`}>
                <Link href="https://www.jiocinema.com/subscription/plans" className="btnJioCinema">
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
                <ReactSlickofferJio />
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
                        <Image src={JioIcon} alt={`Icon`} width={50} />
                        <h1>JioCinema</h1>
                    </div>
                    <h3>
                        Subscribe to JioCinema Premium!
                    </h3>
                    <p>
                        And watch the latest and highly rated Hollywood Movies and TV shows
                    </p>
                    <div className={styles.hollywoodMovies}>
                        <h3>Latest Hollywood Content</h3>
                        <ul>
                            <li>Watch on any device</li>
                            <li>Highest video & audio quality</li>
                            <li>Upto 4 devices simultaneously</li>
                        </ul>
                        <div className={styles.clear}></div>
                    </div>
                    <h3 className={styles.py5}>
                        Get Premium for just ₹999 for 12 Months
                    </h3>
                    <div className="">
                        <Link href="https://www.jiocinema.com/subscription/plans" className="btnJioCinema">
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
                    <Image src={Entertainment} alt={`Entertainment`}  />
                </div>
                <div className={styles.col9}>
                    <div className={styles.aboutShows}>
                        <h4>The World of Entertainment: JioCinema</h4>
                        <h4>What is It?</h4>
                        <p>A major video streaming platform in India, JioCinema is a one-stop streaming platform for all blockbuster films and TV Shows. Home to Indian and International content, JioCinema emphasizes endless entertainment and breaking geo-barriers to video content. </p>
                        <p>This mega-star viewing platform was launched on 5th September 2016 by the Reliance Industry and is now owned by Viacom18. Initially designed to cater to Jio subscribers only, JioCinema was made exclusive to individuals possessing a Jio Plan. Since then, this platform has rapidly expanded. JioCinema has been made available to all users- Jio or Non Jio. While some titles can be viewed free-of-cost, for others you might have to purchase JioCinema Premium. So all you need is the JioCinema app on your device to be a part of this entertainment community.</p>
                        <h4>Type of Content Available</h4>
                        <p>Currently gripping 7% of market share among competitors, JioCinema has expanded its viewership over the years. What makes this platform a success in the cut-throat market is the range of content that it offers. Jio currently is home to 10,000+ Movies and 700+ TV Shows. It offers a variety of genres like- Comedy, Romance, Action, Thriller, Sports, Documentaries and much more!</p>
                        <p>JioCinema also acquired streaming rights for content from HBO, Paramount, and Warner Bros that has made it even more popular among viewers. Partnership with such platforms has enabled JioCinema users to access content available in different places from one platform. So you can find International hits like Game Of Thrones, Chernobyl, Suits, Last of Us, White Lotus, X, and much more! However all of these titles are accessible to you as part of the Premium Plan.</p>
                        <p>It is an all-encompassing video-on-demand platform that not only streams premium international content but also Indian content. Titles like Rockstar, BajiRao Mastani, Stree, Drishyam, Linga, TanuWedsManu and more are part of JioCinema’s handpicked curation of the 100 Crore Club. This category has been created to offer the viewers a glimpse into the golden blockbusters of Indian cinema.</p>
                        <p>Apart from the 100 Crore Club, JioCinema also works actively to curate content that is fresh and original. Titles like Inspector Avinaash, Taali, Inside Story: A Season With Rajasthan Royals, Big Boss OTT 2, Ishq Next Door, Crackdown are all original productions curated by JioCinema to offer its audiences new content alongside existing content.</p>
                        <p>From regional titles to International titles, JioCinema has it all. What’s fantastic is that the video-on-demand platform does not stop there. With a passion for entertainment and desire to be the one-stop streaming place, JioCinema also makes sure to offer its sports’ fans the content they deserve.</p>
                        <h4>Sports</h4>
                        <p>At the beginning of 2023, JioCinema secured the digital broadcasting rights for the Indian Premier League under a multi-year agreement extending until 2027. What this means is that all IPL matches will be available for free streaming in 12 different languages on JioCinema. Sustaining its goal in quality , these telecasts will be offered in stunning 4K resolution. So you will witness every century and every victory in the ultimate resolution. Additionally, JioCinema also secured the digital rights for the newly introduced Women's Premier League and India's 2023 tour of the West Indies and the United States.</p>
                        <p>Not only cricket but JioCinema also offers you a chance to view other sports like tennis, MotoGp and much more. This platform also offers its own cricket show AkaashVani that discusses the latest updates and developments in cricket, offering the users more insider information about the matches.</p>
                        <h4>JioCinema Premium Plan</h4>
                        <p>Convinced by the entertainment you can avail? Then subscribe to JioCinema Premium Plan to avail the greatest benefits that JioCinema has to offer. With the Premium Plan, you pay only 999rs, one of the lowest prices in the market, and unlock access to any content on the platform without ads in high resolution and impeccable audio quality that can be accessed on upto 4 devices. This plan makes JioCinema a family favourite. </p>

                        <h4>Difference Between Premium and Free Plan</h4>
                        <div>
                            <table className={styles.planTables}>
                                <thead>
                                    <tr>
                                        <th>FREE PLAN</th>
                                        <th>PREMIUM PLAN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Free of Cost</td>
                                        <td>Priced at 999</td>
                                    </tr>
                                    <tr>
                                        <td>No Month Limit</td>
                                        <td>Available for 12 Months</td>
                                    </tr>
                                    <tr>
                                        <td>Free TATA IPL 2023 Live Streaming</td>
                                        <td>Free TATA IPL 2023 Live Streaming</td>
                                    </tr>
                                    <tr>
                                        <td>Access to all Hindi/Regional Movies and TV Shows</td>
                                        <td>Access to all Hindi/Regional Movies and TV Shows</td>
                                    </tr>
                                    <tr>
                                        <td>Cannot Access HBO, International Content</td>
                                        <td>Access to all HBO, International Content</td>
                                    </tr>
                                    <tr>
                                        <td>Ad supported</td>
                                        <td>Without Ads</td>
                                    </tr>
                                    <tr>
                                        <td>Stream on one device</td>
                                        <td>Stream on upto 4 Devices</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Buying Guide:</h4>
                        <p>To get JioCinema and JioCinema Premium here’s all that you need to do.</p>
                        <p>On the mobile app:</p>
                        <p>1. Launch the Jio Cinema app and log in using your mobile number.</p>
                        <p>2. Locate the "Subscribe" option next to the Jio Cinema logo at the top.</p>
                        <p>3. A preview of features will appear on the following screen. To proceed, tap "Continue" and make a payment of Rs 999.</p>
                        <p>4. Your plan will now be activated on your account, granting you access to the HBO library within the app.</p>
                        <p>On the website:</p>
                        <p>1. Visit the website (http://jiocinema.com/) and log in using your mobile number.</p>
                        <p>2. Click on the "Subscribe" option displayed next to the Jio Cinema logo at the top.</p>
                        <p>3. A preview of features will be presented on the next page. To proceed, click "Continue" and complete the payment of Rs 999.</p>
                        <p>4. Your plan will be activated on your account, allowing you to access the HBO library on the website.</p>
                        
                        <div className={styles.getbtn}>
                            <Link href="https://www.jiocinema.com/subscription/plans" className="btnJioCinema">
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

export default JioCinemaComponent