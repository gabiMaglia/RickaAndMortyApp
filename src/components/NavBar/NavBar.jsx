import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import NavBtn from "../common/NavBtn.jsx";

import ROUTES from "../../helpers/routes.helper.js";
import logo from "../../assets/logo/logo.png";
import styles from "./NavBar.module.css";
const NavBar = ({logoutFunction}) => {
 /**
 * This function represents the NavBar
 * 
 * @returns {React.JSX}
 */
 const location = useLocation()  

  return (
    
    <nav className={styles.navBar}>
      <img src={logo} className={styles.brand}></img>
      {location.pathname !=='/'?
      <ul className={styles.navLink}>
        <li className={styles.listItem}>
        <NavLink
          onClick={logoutFunction}
          // to={ROUTES.LOGIN}
          className={styles.navLink}
          activeclassname={styles.active}
        >
         <NavBtn content='Log out'/>
        </NavLink>
          </li>
          <li  className={styles.listItem}>
        <NavLink
          to={ROUTES.HOME}
          className={styles.navLink}
          activeclassname={styles.active}
        >
         <NavBtn content='Card Board'/>
        </NavLink>
        </li>
        <li  className={styles.listItem}>
        <NavLink
          to={ROUTES.ABOUT}
          className={styles.navLink}
          activeclassname={styles.active}
        >
          <NavBtn content='About Me'/>
        </NavLink>
        </li>
      </ul>
      :
      <NavBtn content={'Log In'}/>
      }
    </nav>
  );
};

export default NavBar;
