import React from "react";
import style from "./Card.module.css";
import CardHeader from "./CardParts/CardHeader";
import CardMain from "./CardParts/CardMain";
import CardFooter from "./CardParts/CardFooter";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image } = props;

  return (
    <div className={style.card}>
      <CardHeader event={props.onClose} name={name} />

      <CardMain
        name={name}
        image={image}
        status={status}
        species={species}
        gender={gender}
      />

      <CardFooter title="Origin" info={origin}/ >
      

    </div>
  );
}
