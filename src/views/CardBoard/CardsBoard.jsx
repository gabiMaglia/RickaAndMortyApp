import Card from "../../components/Card/Card";
import style from "./CardBoard.module.css";

import StarBackground from "../../components/StarBackground/StarsBackground";

export default function Cards(props) {
  /**
   * This function represents the Card Board page
   *
   * @returns {React.JSX}
   */

  return (
    <div className={style.cardBoard}>
      <StarBackground />

      {props.characters.length == 0 ? (
        <p>Add at least one card to the board</p>
      ) : (
        props.characters.map((e, key) => {
          return (
            <Card
              key={key}
              id={e.id}
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={props.close}
            />
          );
        })
      )}
    </div>
  );
}
