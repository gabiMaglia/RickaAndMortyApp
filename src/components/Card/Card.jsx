import React, { useState } from "react";
import styles from "./Card.module.css";
import CardHeader from "./CardParts/CardHeader";
import CardMain from "./CardParts/CardMain";
import CardFooter from "./CardParts/CardFooter";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

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
  const { id, name, status, species, gender, origin, image } = props;
  const despatch = useDispatch()

  const [isFav, setIsfav] = useState(false)

  const handleFavBtn = (e) => {
    
  }


  return (
    <article className={styles.card}>
      <CardHeader id={id} event={props.onClose} name={name} />

      <CardMain
        name={name}
        image={image}
        status={status}
        species={species}
        gender={gender}
      />
      <div className={styles.footer}>
        <NavLink className={styles.link} to={`/details/${id}`}>
          <CardFooter title="FAVOURITE" />
        </NavLink>
        <NavLink className={styles.link} to={`/details/${id}`}>
          <CardFooter title="Details..."/>
        </NavLink>
      </div>

    </article>
  );
}
