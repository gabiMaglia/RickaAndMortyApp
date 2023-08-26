import React from "react";
import styles from "./NavBar.module.css";
import Button from "../common/Button";

import { NavLink } from "react-router-dom";
import ROUTES from "../../helpers/routes.helper.js";
import logo from "../../assets/logo/logo.png";

const NavBar = () => {
  
  return (
    <nav className={styles.navBar}>
      <img src={logo} className={styles.brand}></img>

      <section className={styles.navLink}>
        <NavLink
          to={ROUTES.HOME}
          className={styles.navLink}
          activeclassname={styles.active}
        >
          Home
        </NavLink>
        <NavLink
          to={ROUTES.CARDBOARD}
          className={styles.navLink}
          activeclassname={styles.active}
        >
          <Button content = ' CardBoard'/>
        </NavLink>
        <NavLink
          to={ROUTES.ABOUT}
          className={styles.navLink}
          activeclassname={styles.active}
        >
          About me
        </NavLink>
      </section>
    </nav>
  );
};

export default NavBar;
