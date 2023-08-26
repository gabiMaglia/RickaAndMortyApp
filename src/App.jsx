// DEP
import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
// COMPONENTS
import StarsBackground from "./components/StarBackground/StarsBackground.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// VIEWS
import CardBoard from "./views/CardBoard/CardsBoard.jsx";
import { AboutMe } from "./views/AboutMe/AboutMe.jsx";
import Logo from "./views/Logo/Logo.jsx";
// FILES

import "./App.css";
import ROUTES from "./helpers/routes.helper.js";
import Detail from "./components/Detail/Detail.jsx";

function App() {

  const [character, setCharacter] = useState([]);
  const maxCharacters = 826;

  const addCard =  (id) => {
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

      <main className="mainLayout">
        
        <NavBar
        />
        <Routes>
          <Route path={ROUTES.HOME} element={<Logo/>} />
          <Route path={ROUTES.CARDBOARD} element={ <CardBoard characters={character} close={closeCard} />} />
          <Route path={ROUTES.ABOUT} element={<AboutMe />} />
          <Route path= '/details/:id' element={<Detail searchCard ={addCard} />}  />
        </Routes>
        
        
        
        <Footer
            maxChar={maxCharacters}
            addCharacter={addCard}
            clear={clearBoard}
        />
      </main>
    </div>
  );
}

export default App;
