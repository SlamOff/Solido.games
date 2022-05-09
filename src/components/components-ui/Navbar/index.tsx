import Dropdown from '../Dropdown';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { Button } from '../Button';
import { useState, useRef, useEffect } from 'react';
import { dropdownData } from '../../../scripts/header-nav-dropdown';
import { useSelector } from 'react-redux';
import { useOutsideClick } from "../../../hooks";
import { stripAddress } from '../../../scripts/helpers';
import router from "next/router";

export const Navbar = ({isMobile}: any) => {
  const { socials, about } = dropdownData;
  const socialsRef = useRef(null);
  const aboutRef = useRef(null);
  const walletRef = useRef(null);
  const socialsWrapperRef = useRef(null);
  const aboutWrapperRef = useRef(null);
  const walletWrapperRef = useRef(null);
  const [ isLoggedIn, setIsLoggedIn] = useState(false);
  const [ isSocialsDropdownActive, setIsSocialsDropdownActive ] = useState(false);
  const [ isAboutDropdownActive, setIsAboutDropdownActive ] = useState(false);
  const [ isWalletDropdownActive, setIsWalletDropdownActive ] = useState(false);
  
  // @ts-ignore: Object is possibly 'null'.
  const walletData = useSelector(state => state.wallet.walletData);
  
  useOutsideClick(socialsRef, () => {
    setIsSocialsDropdownActive(false);
  });
  useOutsideClick(aboutRef, () => {
    setIsAboutDropdownActive(false);
  });
  useOutsideClick(walletRef, () => {
    setIsWalletDropdownActive(false);
  });

  const hideDropdownOnRoute = () => {
    setIsSocialsDropdownActive(false);
    setIsAboutDropdownActive(false);
    setIsWalletDropdownActive(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", hideDropdownOnRoute);

    return () => {
      router.events.off("routeChangeStart", hideDropdownOnRoute);
    };
  }, []);

  const toggleDropdown = (e: any) => {
    // @ts-ignore: Object is possibly 'null'.
    if (socialsWrapperRef.current.contains(e.target) || aboutWrapperRef.current.contains(e.target) || walletWrapperRef.current.contains(e.target)) return;
    switch (e.currentTarget.dataset.type) {
      case 'socials':
        isSocialsDropdownActive ? setIsSocialsDropdownActive(false) : setIsSocialsDropdownActive(true);
        break;
      case 'about':
        isAboutDropdownActive ? setIsAboutDropdownActive(false) : setIsAboutDropdownActive(true);
        break;
      case 'wallet':
        isWalletDropdownActive ? setIsWalletDropdownActive(false) : setIsWalletDropdownActive(true);
        break;
    }
  };

  return (
    <>
      <nav className={`${styles.nav} ${isMobile ? styles.navMob : ''}`}>
        <ul>
          <li className={styles.navItem}><Link href="/nft">NFT Marketplace</Link></li>
          <li className={styles.navItem}><Link href="/nft">AGGREGATOR</Link></li>
          <li className={styles.navItem}><Link href="/nft">Ranking</Link></li>
          <li className={styles.navItem}><Link href="/nft">+ Add Game</Link></li>
          <li className={`${styles.dropdownNavItem} ${styles.navItem}`} data-type='socials' onClick={toggleDropdown} ref={socialsRef}>
            <span>Socials</span>
            <div ref={socialsWrapperRef}>
              {isSocialsDropdownActive && <Dropdown type='socials' itemsList={socials} />}
            </div>
          </li>
          <li className={`${styles.dropdownNavItem} ${styles.navItem}`} data-type='about' onClick={toggleDropdown} ref={aboutRef}>
            <span>About</span>
            <div ref={aboutWrapperRef}>
              {isAboutDropdownActive && <Dropdown type='about' itemsList={about} />}
            </div>
          </li>
          <li className={styles.navItem}><Link href="/nft">Leaderboards</Link></li>
          <li className={styles.navItem}><Link href="/nft">{isLoggedIn ? 'Logout' : 'Login'}</Link></li>
          {isLoggedIn && <li><Link href="/nft">My profile</Link></li>}
          <li className={`${styles.connectWallet} ${styles.navItem} ${styles.dropdownNavItem}`} data-type='wallet' onClick={toggleDropdown} ref={walletRef}>
            <Button
              text={walletData ? `${stripAddress(walletData)}` : 'Connect Wallet'}
              btnType='btnSecondary' />
            <div ref={walletWrapperRef}>
              {isWalletDropdownActive && <Dropdown type='wallet' isRightPositioned={!isMobile} />}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}