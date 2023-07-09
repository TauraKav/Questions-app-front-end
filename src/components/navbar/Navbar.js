import styles from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarWrapper}>
        <Link className={styles.link} href={`/`}>
          <div className={styles.logoWrapper}>
            <img src={logo.src} className={styles.logoImg} />
            <h1>Klausimėlis</h1>
          </div>
        </Link>

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