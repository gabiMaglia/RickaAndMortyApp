import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import InfoBox from "../Card/CardParts/InfoBox";
import { fetchCharacterById } from "../../services/apiCall";



  /**
 * This function represents the Detail Page for
 * cards and about
 * @returns {React.JSX}
 */

const Detail = ({type}) => {
  const { id } = useParams();

  const me = {
    name: 'Gabriel Maglia',
    image: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
    status: 'Alive',
    species: 'Humanoid',
    skills: 'Javascript, HTML, CSS ',
    origin: 'Earth -- Argentina',
  }

  const [character, setCharacter] = useState();

  /**
   * UseEffect to load the corresponding data for the selected card
   */

 if (id) useEffect(() => {
    try {
      fetchCharacterById(id).then((data) => {
        setCharacter(data);
        console.log(data)
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

 
  
  return (
    <section>    
      {type === 'personal'?
        <div className={styles.detailCard}>
        <div className={styles.detailBackground}></div>
        <div className={styles.character}>
          <img src={me.image} alt={me.name} />
          {
            me.status === 'Alive'? 'alive' :me.status === 'Dead'? 'dead' : 'unkow'
          }
          <div className={styles.chracterInfo}>

            <InfoBox title="Name" info={me.name} />
            <InfoBox title="Species" info={me.species} />
            <InfoBox title="Skills" info={me.skills} />
            <InfoBox title="Origin" info={me.origin} />
          </div>
        </div>
      </div>

      :<div className={styles.detailCard}>
        <div className={styles.detailBackground}></div>
        <div className={styles.character}>
          <img src={character?.image} alt={character?.name} />
          {
            character?.status === 'Alive'? 'alive' :character?.status === 'Dead'? 'dead' : 'unkow'
          }
          <div className={styles.chracterInfo}>

            <InfoBox title="Name" info={character?.name} />
            <InfoBox title="Species" info={character?.species} />
            <InfoBox title="Gender" info={character?.gender} />
            <InfoBox title="Origin" info={character?.origin?.name} />
          </div>
        </div>
      </div>
      }
    </section>
  );
};

export default Detail;
