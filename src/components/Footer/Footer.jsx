import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./footer.module.css";
import { useLocation } from "react-router-dom";
const Footer = (props) => {
  const location = useLocation();

  return (
    <footer className={style.footer}>
      {location.pathname === '/cardboard'?
        <SearchBar
          maxChar={props.maxChar}
          addNew={props.addCharacter}
          clearBoard={props.clear}
        />
        :
        <div></div>
      }
    </footer>
  );
};

export default Footer;
