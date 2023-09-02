// DEP
import { React, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// COMPONENTS
import StarsBackground from "./components/StarBackground/StarsBackground.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// VIEWS
import CardBoard from "./views/CardBoard/CardsBoard.jsx";
import { AboutMe } from "./views/AboutMe/AboutMe.jsx";
import Login from "./views/Login/Login.jsx";
// FILES

import "./App.css";
import ROUTES from "./helpers/routes.helper.js";
import CardDetail from "./views/CardDetail/CardDetail.jsx";
import { fetchCharacterById } from "./services/apiCall.js";
import { Error404 } from "./views/ERROR404/Error404.jsx";

function App() {
  // Card collection state
  const [character, setCharacter] = useState([]);
  const navigate = useNavigate();
  // Log in data
  const [access, setAccess] = useState(false);
  const USERNAME = "gab.maglia@gmail.com";
  const PASSWORD = "root1234";

  const maxCharacters = 826;

  useEffect(() => {
    /**
     * this acts as a keylock
     * if it isnt logged it will redirect you to the '/' 
     * */
    !access && navigate('/');
 }, [access]);


 const login = (userData) => {
    /**
     * Login Function
     * @param {object} userCredentials - Credenciales de inicio de sesión.
     * @param {string} userCredentials.username - El nombre de usuario para iniciar sesión.
     * @param {string} userCredentials.password - La contraseña para iniciar sesión.
     */

    if (userData.password === PASSWORD && userData.username === USERNAME) {
      setAccess(true);
      navigate("/home");
    } else {
      console.error('WROOONG')
    }
  };
  const logout = () => {
    /**
     * Logout Function
     */
    setAccess(false);
    navigate("/login");
   
  };
  const addCard = (id) => {
    /**
     * Search card by id .
     * @param {number} id - The id of the chracter.
     * Adds a new element  to the state.
     */
    try {
      fetchCharacterById(id).then((data) => {
        const isDuplicate = character.some((char) => char.id === data.id);

        isDuplicate ? null : setCharacter([...character, data]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const closeCard = (id) => {
    /**
     * Take out the card of the cardboard .
     * @constructor
     * @param {number} id - The id of the chracter.
     * Removes an elemnt of the state
     */
    const updatedList = character.filter((e) => {
      return e.id !== parseInt(id);
    });
    setCharacter(updatedList);
  };
  const clearBoard = () => {
    /**
     * Clear the card board, removes all items from the state
     */
    setCharacter([]);
    // console.log('object')
  };

  return (
    <div className="App">
      <StarsBackground />

      <main className="mainLayout">
        <NavBar logoutFunction= {logout}/>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login loginFunction = {login}  />} />
          <Route
            path={ROUTES.HOME}
            element={<CardBoard characters={character} close={closeCard} />}
          />
          <Route path={ROUTES.ABOUT} element={<AboutMe />} />
          <Route path="/details/:id" element={<CardDetail />} />
          <Route path='/*' element={<Error404 />} />
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
