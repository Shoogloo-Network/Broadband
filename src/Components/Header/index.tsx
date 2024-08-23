"use client"

import styles from './Header.module.scss';
import { useSearchParams } from 'next/navigation'

import { generalsans } from '../../utils/fonts';
import Navbar from './Navbar';
import Head from 'next/head';

const HeaderComponents = () => {

  return (
    <>
      <div className={styles.headerContainer}>
        <div className="blackBg">
          <header
            className={`${styles.header} ${generalsans.className} wrapContainer`}
          >
            <Navbar />

          </header>
        </div>
      </div>
    </>
  );
};

export default HeaderComponents;
