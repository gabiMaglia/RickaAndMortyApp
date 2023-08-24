import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.cardBoard}>
      {props.characters.map((e, key) => {
        return (
          <Card
            key={key}
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            gender={e.gender}
            origin={e.origin.name}
            image={e.image}
            onClose={props.close}
          />
        );
      })}
    </div>
  );
}
