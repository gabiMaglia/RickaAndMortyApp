import React, { useState } from "react";
import styles from "./Card.module.css";
import CardHeader from "./CardParts/CardHeader";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav } from "../../redux/actions";
import { removeFav } from "../../redux/actions";
import InfoBox from "./CardParts/InfoBox";
/**
 * Represents a card.
 * @param {number} id -
 * @param {string} name -
 * @param {string} status -
 * @param {string} species -
 * @param {string} gender -
 * @param {string} origin -
 * @param {string} image -
 * @returns {React.JSX}
 */

export default function Card(props) {
  const { id, name, status, species, gender, image } = props;
  const dispatch = useDispatch();

  const [isFav, setIsfav] = useState(false);

  const handleFavBtn = (e) => {
    console.log("llego");
    if (isFav) {
      removeFav(id);
      setIsfav(true);
    } else {
      addFav(id);
      setIsfav(false);
    }
  };

  return (
    <article className={styles.card}>
      <CardHeader id={id} event={props.onClose} name={name} />


      <div className={styles.mainDiv}>
        <div className={styles.imgCont}>
          <img className={styles.img} src={image} alt={name} />
          <div className={styles.status}>{status}</div>
        </div>
        <div className={styles.infoDiv}>
          <InfoBox title="Species" info={species} />
          <InfoBox title="Gender" info={gender} />
        </div>
      </div>

      <div className={styles.footer}>
        <i className={styles.link}>
          <div className={styles.isFav} >Favourites</div>
        </i>
        <NavLink className={styles.link} to={`/details/${id}`}>
          <div className={styles.detail}> Details... </div>
        </NavLink>
      </div>
    </article>
  );
}
