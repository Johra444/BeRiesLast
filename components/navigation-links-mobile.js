import React from "react";
import Link from "next/link";
import styles from "../styles/NavMobile.module.css"

const NavigationLinksMobile = () => {
  return (
    <>
    <nav className={styles.container}>
      <div className={styles.navMenu}>
        <span className={styles.navLink}>Mint :</span>
        <Link href="/mint-pack-1">
          <span className={styles.navLink}>• Pack 1</span>
          </Link>
        <Link href="/mint-pack-2">
        <span className={styles.navLink}>• Pack 2</span>
        </Link>
        <Link href="/mint-pack-3">
        <span className={styles.navLink}>• Pack 3</span></Link>
        <Link href="/mint-pack-4">
        <span className={styles.navLink}>• Pack 4</span>
        </Link>
        <Link href="/burn">
        <span className={styles.navLink}>Burn</span>
        </Link>
        <Link href="/key-owner">
        <span className={styles.navLink}>Key Owner</span>
        </Link>
      </div>
      <div className={styles.navFooter}>
      <div className={styles.social}>
          <a href="https://instagram.com/beries.eth/" target="_blank"><img
            src="../assets/insta-icon-200h.webp"
            className={styles.footerLogo}
            
          /></a> 
          <a href="https://medium.com/@BeRies" target="_blank"><img
            src="../assets/medium-icon-200h.webp"
            className={styles.footerLogo}
            
          /></a> 
          <a href="https://twitter.com/0xberies" target="_blank"  ><img
            src="../assets/twitter-icon-200h.webp"
            className={styles.footerLogo}

          /></a> 
        </div>
        <span
          className={styles.footerLink}
        >
          BeRies is Worldwide
        </span>
      </div>

    </nav>
    
        
    </>
  );
};


export default NavigationLinksMobile;