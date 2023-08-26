import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState();
   useEffect( () => {
    
        try {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => {
             setCharacter(data);
            });
        } catch (error) {
          console.log(error);
        }
    
  }, [id]);

  const handleButton = () => {
    navigate("/cardboard");
  };

  return (
    <section>
      <button onClick={handleButton}>Back to Board</button>
      <p>{character?.name}</p>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt={character?.name} />
    </section>
  );
};

export default Detail;
