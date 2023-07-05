import styles from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarWrapper}>
        <div className={styles.logoWrapper}>
        <img src={logo.src} className={styles.logoImg} />
        <h1>Klausimėlis</h1>
        </div>
        
      
          <ul className={styles.menu}>

            <li>
              <a href="/">Visi klausimai</a>
            </li>
           
            <li>
              <a href="/login">Prisijungti</a>
            </li>
            <li>
              <a href="/signup">Registruotis</a>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Navbar