import React from 'react'

import PropTypes from 'prop-types'

import styles from '../styles/Footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.row1}
      >
        <span className={styles.footerHeader}>More About BeRies</span>
        <div
          className={styles.linkContainer}
        >
          <a className={styles.footerLink} href="mailto: contact@beries.xyz">Contact BeRies <span style={{fontWeight: "800"}}> <i>here</i></span> </a>
          <a className={styles.footerLink} href="https://medium.com/@BeRies" target="_blank">Documentation</a>
          <a className={styles.footerLink} href="https://blueberry.club/" target="_blank">Partner Blueberry</a>
        </div>
      </div>
      <div className={styles.row2}>
        <span className={styles.footerHeader}>Newsletter</span>
        <input
          type="email"
          id="newsletter"
          name="email"
          placeholder="Insert your email adress here..."
          className={styles.textinput}
        />
      </div>
      <div className={styles.row3}>
        <div className={styles.social}>
          <a href="https://www.instagram.com/beries.eth/" target="_blank"><img
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
    </div>
  )
}

export default Footer
