import React from 'react'
import styles from './NavBar.module.css'
import logo from "../../assets/logo/logo.png"
import SearchBar from '../SearchBar/SearchBar'



const NavBar = (props) => {
  return (
    <nav className={styles.navBar}>
        <img src= {logo} className={styles.brand}></img>
        <SearchBar maxChar = {props.maxChar} addNew = {props.addCharacter} clearBoard = {props.clear}/>
        
    </nav>
  )
}

export default NavBar