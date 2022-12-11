import React, { useState } from 'react';
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavigationLinks from "./navigation-links";
import NavigationLinksMobile from "./navigation-links-mobile";
import styles from "../styles/Navbar.module.css"
import { Spin as Hamburger } from 'hamburger-react'


const Navbar = () => {
  const [display, setDisplay] = useState('none');

  const handleClick = () => {
    setDisplay(display === 'none' ? 'flex' : 'none');
  };

  
  return (
    <>
        <nav className={styles.navbarHeader}>
            <Link href="/">
              <a className={styles.navbarLink}>
                <img
                  src="/assets/logo.svg"
                  className={styles.navbarImage}
                />
              </a>
            </Link>
          <NavigationLinks></NavigationLinks>
          <ConnectButton />


          <div className={styles.navbarBurgerMenu}>
            <button onClick={handleClick}><Hamburger  duration={0.3} size={25} color="#0000ff" onToggle={toggle=>{
              if(toggle) {
                console.log('Open menu');
              }
              else{
                console.log('Close menu');
              }
            }
            
            }/></button> 
          </div>
          
        </nav>
        <div className={styles.navbarMobileMenu2} style={{ display }}>
          
              <NavigationLinksMobile></NavigationLinksMobile>
          </div>

    </>
  );
};

export default Navbar;
