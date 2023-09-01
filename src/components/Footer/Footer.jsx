import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./footer.module.css";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";



  /**
 * This function represents the Footer
 * 
 * @returns {React.JSX}
 */
const Footer = (props) => {
  const location = useLocation();
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/home')
  }

  return (
    <footer className={style.footer}>
      

      {
      location.pathname.startsWith("/details/") ?
        <p onClick={handleGoBack}>'Go Back'</p>
      :location.pathname === '/home' ?
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
