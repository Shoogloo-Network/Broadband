import Link from 'next/link';
import Image from 'next/image';
import styles from './Headerbackup.module.scss';
import logoImage from 'public/assets/logo-white.png';
import { useState } from 'react';
import { generalsans } from '../../utils/fonts';
import Head from 'next/head';

const HeaderComponents = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  let mobileClass = showMenu ? 'showmobileMenu' : 'hideMobileMenu';
  const HeaderMenu = () => {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <header
          className={`${styles.header} ${styles[mobileClass]} ${generalsans.className}`}
        >
          <div className={styles.logo}>
            <Link href="/">
              <Image
                className={styles.logoimg}
                alt="logo"
                width="193"
                height="50"
                src={logoImage}
              ></Image>
            </Link>
          </div>
          <ul className={styles.menuList}>
            <li>
              <Link href="/" className="ancrLink" onClick={handleShowMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/compare-broadband-plans"
                className="ancrLink"
                onClick={handleShowMenu}
              >
                Compare Broadband Plans
              </Link>
              <ul className={styles.dropdownMenuItem}>
                <li>
                  <Link
                    href="/high-speed-plans"
                    className="ancrLink"
                    onClick={handleShowMenu}
                  >
                    High Speed Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cheapest-plans"
                    className="ancrLink"
                    onClick={handleShowMenu}
                  >
                    Cheapest Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/top-entertainment-plans"
                    className="ancrLink"
                    onClick={handleShowMenu}
                  >
                    Top Entertainment Plans
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/" className="ancrLink" onClick={handleShowMenu}>
                Top Providers
              </Link>
              <ul className={styles.dropdownMenuItem}>
                <li>
                  <Link
                    href="/provider/airtel"
                    className="ancrLink"
                    onClick={handleShowMenu}
                  >
                    Airtel
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="https://blog.broadband.asia/"
                target="_blank"
                className="ancrLink"
                onClick={handleShowMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" className="ancrLink" onClick={handleShowMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="ancrLink"
                onClick={handleShowMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </header>
      </>
    );
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <div className="blackBg">
          <div className={`${styles.mobileMenu} blackBg`}>
            <Link href="/" className={styles.left}></Link>
            <span className={styles.right} onClick={handleShowMenu}>
              {' '}
            </span>
          </div>
          {HeaderMenu()}
          {/* {show ? HeaderMenu() : ''} */}
        </div>
      </div>
    </>
  );
};

export default HeaderComponents;
