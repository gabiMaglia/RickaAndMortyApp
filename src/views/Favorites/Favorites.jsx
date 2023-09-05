import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'

import styles from "./favorites.module.css"

const Favorites = (props) => {
    return (
       <div className={styles.cardBoard}>
        {props.myFavorites.map((e, key) => {
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
          />
        );
      })}
       </div>
    
  )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites)