import React from 'react'
import styles from './NavBar.module.css'
import logo from "../../assets/logo/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
  return (
    
    <nav className={styles.navBar}>
        <img src= {logo} className={styles.brand}></img>
        <a href=""><FontAwesomeIcon icon={faMailBulk} /></a>      
    </nav>
  )
}

export default NavBar