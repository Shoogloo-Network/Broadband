"use client"
import styles from './Header.module.scss';

import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Logo from './Logo';
import NavItem from './NavItem';

import { clientSide } from '@/config';
import { ApiHeaders } from '@/helpers/setheaders';
import { SiteIdContext } from '@/context/SiteIdContextProvider';
const defaultMenuList = [
  
  { text: 'Home', href: '/', childMenu: false, name: 'home' },
  {
    text: 'Compare Broadband Plans',
    href: '/',
    childMenu: true,
    submenuList: [
      { text: 'High Speed Plans', href: '/high-speed-plans' },
      { text: 'Cheapest Plans', href: '/cheapest-plans' },
      { text: 'Top Entertainment Plans', href: '/top-entertainment-plans' },
    ],
    name: 'compareBroadBandPlans',
  },

  {
    text: 'Top Providers',
    href: '/',
    childMenu: false,
    name: 'topProviders',
  },
  {
    text: 'OTT',
    href: '',
    childMenu: true,
    submenuList: [
      { text: 'Jio Cinema', href: '/ott/jio-cinema' },
      { text: 'Sony LIV', href: '/ott/sonyliv' },
      { text: 'Hotstar', href: '/ott/hotstar' },
    ],
    name: 'ott',
  },
  {
    text: 'Blog',
    href: 'https://blog.broadband.asia/',
    childMenu: false,
    name: 'blogs',
  },
  // { text: 'About Us', href: '/about', childMenu: false, name: 'aboutUs' },
  { text: 'Contact us', href: '/contact', childMenu: false, name: 'contactUs' },
  {
    text: 'Region',
    href: '',
    childMenu: true,
    submenuList: [
      { text: 'India', href: '/in/' },
      { text: 'Singapore', href: '/sg/' },
      { text: 'Saudi Arabia', href: '/sa/' },
      { text: 'Qatar', href: '/qa/' },
      { text: 'UAE', href: '/ae/' },
      { text: 'Bahrain', href: '/bh/' },
      { text: 'Kuwait', href: '/kw/' },
      { text: 'Vietnam', href: '/vn/' },
    ],
    name: 'region',
  },
];

const anotherMenuSite = [
  { text: 'Home', href: '/', childMenu: false, name: 'home' },
  {
    text: 'OTT',
    href: '',
    childMenu: true,
    submenuList: [
      { text: 'Jio Cinema', href: '/ott/jio-cinema' },
      { text: 'Sony LIV', href: '/ott/sonyliv' },
      { text: 'Hotstar', href: '/ott/hotstar' },
    ],
    name: 'ott',
  },
  {
    text: 'Blog',
    href: 'https://blog.broadband.asia/',
    childMenu: false,
    name: 'blogs',
  },
  // { text: 'About Us', href: '/about', childMenu: false, name: 'aboutUs' },
  { text: 'Contact us', href: '/contact', childMenu: false, name: 'contactUs' },
  {
    text: 'Region',
    href: '',
    childMenu: true,
    submenuList: [
      { text: 'India', href: '/in/' },
      { text: 'Singapore', href: '/sg/' },
      { text: 'Saudi Arabia', href: '/sa/' },
      { text: 'Qatar', href: '/qa/' },
      { text: 'UAE', href: '/ae/' },
      { text: 'Bahrain', href: '/bh/' },
      { text: 'Kuwait', href: '/kw/' },
      { text: 'Vietnam', href: '/vn/' },
    ],
    name: 'region',
  },
];

const Navbar = () => {

  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [activeSubMenuIdx, setActiveSubMenuIdx] = useState(-1);
  const [countryName, setCountryName] = useState("");
  const [MENU_LIST, Set_MENU_LIST] = useState<any[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  let menuRefCurrent = menuRef.current;

  const { siteId }: any = useContext(SiteIdContext);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      setNavActive(false);
    }
  };

  const getCountryCode = async (siteId: any) => {
    try {
      let resp = await fetch(`https://www.parislondrestrain.fr/admin/site/list/3`);
      let result = await resp.json();
      if (result.statusCode === 200) {
        let foundItem = result.payload.filter((domain: any) => domain.id == siteId);
        return foundItem[0].domainName.split(".")[0]
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  const callAPIforTopProvider = async () => {
    const APIURL_TOP_PROVIDERS = `${clientSide.REACT_APP_API_DOMAIN_URL}${clientSide.REACT_APP_API_PLAN_TOP_PROVIDERS}`;
    if (siteId && siteId != "8") {
      //found providers
      const topProvidersIndex = defaultMenuList.findIndex((menu) => menu.name == 'topProviders');
      const options = await ApiHeaders(siteId, 'GET');
      const data = await fetch(APIURL_TOP_PROVIDERS, options);
      const resData = await data.json();
      const finelData = await resData.payload;
      const countryNameResponse = await getCountryCode(siteId);
      setCountryName(countryNameResponse);

      const createSubmenuList = finelData.map((item: any) => {
        return {
          text: item.name,
          href: `/${countryNameResponse}/provider/${item.seoName}/`,
        };
      });

      if (topProvidersIndex !== -1) {
        // Create a new updated menu object
        const updatedMenu = {
          text: 'Top Providers',
          href: `/${countryNameResponse}`,
          childMenu: true,
          name: 'topProviders',
          submenuList: [...createSubmenuList],
        };

        // Update the MENU_LIST array with the new menu object
        const updatedMenuList = [
          ...defaultMenuList.slice(0, topProvidersIndex - 1), // Keep the items before the updated menu
          {
            text: 'Compare Broadband Plans',
            href: `/${countryNameResponse}/compare-broadband-plans`,
            childMenu: true,
            submenuList: [
              { text: 'High Speed Plans', href: `/${countryNameResponse}/high-speed-plans` },
              { text: 'Cheapest Plans', href: `/${countryNameResponse}/cheapest-plans` },
              { text: 'Top Entertainment Plans', href: `/${countryNameResponse}/top-entertainment-plans` },
            ],
            name: 'compareBroadBandPlans',
          },
          updatedMenu,
          ...defaultMenuList.slice(topProvidersIndex + 1), // Keep the items after the updated menu
        ];

        Set_MENU_LIST(updatedMenuList);
      }

      return;
    }

    Set_MENU_LIST(anotherMenuSite);
  };

  const showHandlerSubMenu = (idx: any) => {
    if (activeSubMenuIdx === idx) {
      setActiveSubMenuIdx(-1); // Close the sub-menu if it's already active
    } else {
      setActiveSubMenuIdx(idx); // Open the sub-menu
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      menuRefCurrent = null; // Unset the menuRef
    };
  }, []);


  // useEffect(() => {
  //   callAPIforTopProvider();
  // },[])


  // useEffect(() => {
  //   if(!siteId || siteId === "8") {
  //     Set_MENU_LIST(defaultMenuList)
  //   } else
  //   callAPIforTopProvider();
  // }, [siteId])

  useEffect(() => {
    if (siteId !== "8") {
      callAPIforTopProvider();
    } else {
      if (siteId == "8") {
        Set_MENU_LIST(defaultMenuList)
      }
    }
  }, [siteId])

  const handleSubMenuClick = (idx: any) => {
    if (activeIdx === idx) {
      setActiveIdx(-1);
    } else {
      setActiveIdx(idx);
    }
  };

  return (
    <div className={styles.headerMenu}>
      <nav className={styles.navMenu}>
        <div className={styles.logoSec}>
          <Logo countryName={countryName} />
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`${styles.hamberMenu} ${navActive ? styles.close : ''}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul
          className={`${navActive ? `${styles.active}` : ''} ${styles.navMenuList
            }`}
        >
          {MENU_LIST.map((menu: any, idx) => {
            if (menu.href == '/about') {
              return (
                <li key={menu.text}>
                  <Link href={'/about'}>{menu.text}</Link>
                </li>
              );
            }

            return (
              <li
                onClick={() => {
                  if (menu.childMenu) {
                    handleSubMenuClick(idx);
                    setActiveSubMenuIdx(-1); // Close the sub-menu
                  } else {
                    setActiveIdx(-1);
                    setNavActive(false);
                  }
                }}
                key={menu.text}
                className={`${menu.childMenu ? `${styles.mwebMenChild}` : ''}`}
              >
                <NavItem
                  activeSubMenuIdx={activeSubMenuIdx}
                  active={activeIdx === idx}
                  {...menu}
                  subMenuOpenClick={() => showHandlerSubMenu(idx)}
                />
                {menu.childMenu && (
                  <ul
                    key={menu.text}
                    className={`${styles.subMenuList} ${activeSubMenuIdx == idx ? styles.active : ''
                      }`}
                  >
                    {menu.submenuList.map((submenu: any) => {
                      return (
                        <li
                          key={submenu.text}
                          onClick={() => {
                            setNavActive(false);
                          }}
                        >
                          <Link href={submenu.href}>{submenu.text}</Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
      <div
        ref={menuRef}
        className={`${styles.mwebBgLayer} ${navActive ? '' : styles.close}`}
      ></div>
    </div>
  );
};

export default Navbar;
