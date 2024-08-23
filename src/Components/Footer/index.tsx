import styles from './Footer.module.scss';
import Link from 'next/link';
import { generalsans, belfast } from '../../utils/fonts';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
let currentTime = new Date();
let year = currentTime.getFullYear();

const FooterComponents = () => {
  return (
    <>
      <footer
        className={`${styles.footerWrap} blackBg wrapSection ${generalsans.className}`}
      >
        <section className="wrapContainer">
          <div className={styles.left}>
            <p className={styles.copyText}>
              Broadband.asia helps you compare and choose from hundreds of
              different plans and internet service providers, get the best plan
              with us!
            </p>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <h4>Pages</h4>
              </li>
              <li>
                <Link href="/">Home Page</Link>
              </li>
              {/* <li>
                <Link href="/about">About Us</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/termscondition">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
            <ul>
              <li><h4>Also Check</h4></li>
              <li><Link href="https://blog.broadband.asia/" target='_blank'>Broadband Guide</Link></li>
              <li><Link href="https://blog.broadband.asia/" target='_blank'>Tutorials</Link></li>
              <li><Link href="https://blog.broadband.asia/" target='_blank'>Comparison</Link></li>
              <li><a href="https://blog.broadband.asia/" target="_blank">Blog</a></li>
              {/* <li><Link href="/">Updates</Link></li> */}
            </ul>
            <ul>
              <li>
                <h4>Countries</h4>
              </li>
              <li>
                <Link href="https://broadband.asia/in/">India</Link>
              </li>
              <li>
                <Link href="http://broadband.asia/sg/">Singapore</Link>
              </li>
              <li>
                <Link href="https://broadband.asia/sa/">Saudi Arabia</Link>
              </li>
              <li>
                <Link href="http://broadband.asia/qa/">Qatar</Link>
              </li>
              <li>
                <Link href="http://broadband.asia/ae/">UAE</Link>
              </li>
              <li>
                <Link href="http://broadband.asia/bh/">Bahrain</Link>
              </li>
              <li>
                <Link href="http://broadband.asia/kw/">Kuwait</Link>
              </li>
            </ul>
          </div>
          <div className={styles.copy}>
            <div className={styles.left}>
              {year} Copyright Shoogloo Telecom Pvt. Ltd.
            </div>
            <div className={styles.right}>
              <h3 className="lgHide">Follow Our Socials</h3>
              <ul className="socialMedia">
                <li>
                  <Link
                    href="https://www.facebook.com/people/Broadbandasia/100088893518753/"
                    target="_blank"
                    className={styles.social}
                  >
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/broadband.asia/"
                    target="_blank"
                    className={styles.social}
                  >
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/shoogloo-telecom/"
                    target="_blank"
                    className={styles.social}
                  >
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default FooterComponents;
