import React from "react";
import style from './SearchBar.module.css'
export default function SearchBar(props) {
   console.log(props.onSearch)
   return (
    
      <div>
         <input type='search'/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
