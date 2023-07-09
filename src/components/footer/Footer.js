import styles from "./Footer.module.css";
import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapper}>

        <img src={logo.src} className={styles.logoImg} />
        <div> © 2023 Klausimėlis</div>
        
      </div>
    </>
  )
}

export default Footer