import { React, useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import StarsBackground from "./components/StarBackground/StarsBackground.jsx";

import "./App.css";
import Logo from "./components/Logo/Logo.jsx";

function App() {
 
  const [character, setCharacter] = useState([]);

  const maxCharacters = 826;

  const addCard = (id) => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          const isDuplicate = character.some((char) => char.id === data.id);

          isDuplicate ? null : setCharacter([...character, data]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const closeCard = (id) => {
    const updatedList = character.filter((e) => {
      return e.id !== parseInt(id);
    });
    setCharacter(updatedList);
  };

  const clearBoard = () => {
    setCharacter([]);
    // console.log('object')
  };

  return (
    <div className="App">
      <StarsBackground />
      <NavBar
        maxChar={maxCharacters}
        addCharacter={addCard}
        clear={clearBoard}
      />
      {/* <Logo /> */}
      <Cards characters={character} close={closeCard} />
    </div>
  );
}

export default App;
