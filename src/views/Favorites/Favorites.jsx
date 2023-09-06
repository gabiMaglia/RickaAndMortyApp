import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card/Card";

import StarBackground from "../../components/StarBackground/StarsBackground";

import styles from "./favorites.module.css";


const Favorites = ({ myFavorites }) => {
  return (
    <div className={styles.cardBoard}>
      <StarBackground />

      {myFavorites.length == 0 ? (
        <p>Add at least one card to your favorites</p>
      ) : (
        myFavorites.map((e, key) => {
          return (
            <Card
              key={key}
              id={e.id}
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              image={e.image}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
