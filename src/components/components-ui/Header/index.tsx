import Image from 'next/image';
import styles from './Header.module.scss';
import logo from './img/logo.svg';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Navbar } from '../Navbar';
import router from "next/router";

const Header = () => {

  const burger = useRef(null);
  const [ isSmallScreen, setIsSmallScreen ] = useState(false);
  const [ isMenuCollapsed, setIsMenuCollapsed ] = useState(false);

  const toggleBurger = () => {
    if (isMenuCollapsed) {
      setIsMenuCollapsed(false);
      // @ts-ignore: Object is possibly 'null'.
      burger.current.classList.remove(styles.active);
    } else {
      setIsMenuCollapsed(true);
      // @ts-ignore: Object is possibly 'null'.
      burger.current.classList.add(styles.active);
    }
  };

  const hideMobileMenu = () => {
    // @ts-ignore: Object is possibly 'null'.
    burger.current.classList.remove(styles.active);
    setIsMenuCollapsed(false);
  }

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    let resizeTimer: any;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();     
      }, 150);
    });
    if (window.innerWidth < 1200) setIsSmallScreen(true);
  }, []);

  useEffect(() => {
    if(isSmallScreen) {
      router.events.on("routeChangeStart", hideMobileMenu);

      return () => {
        router.events.off("routeChangeStart", hideMobileMenu);
      };
    }
  }, []);

  useEffect(() => {
    isMenuCollapsed ? document.body.classList.add('fixed') : document.body.classList.remove('fixed');
  }, [isMenuCollapsed]);

  return (
    <>
      <header className={`${styles.headerWrapper} ${isMenuCollapsed ? styles.headerWrapperBlack : ''}`}>
        <div className='container'>
          <div className={styles.header}>
            <Link href="/">
              <a>
                <Image layout="raw" src={logo} alt="solido.games" className={styles.logo} />
              </a>
            </Link>
            {isSmallScreen ? (
              <div className={styles.burger} onClick={toggleBurger} ref={burger}>
                <span className={styles.burgerTop}></span>
                <span className={styles.burgerMiddle}></span>
                <span className={styles.burgerBottom}></span>
              </div>
            ) : <Navbar />}
            {isMenuCollapsed && isSmallScreen && (
              <Navbar isMobile={true} />
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;