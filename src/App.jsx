
import Cards from "./components/Cards/Cards.jsx";

import characters from "./data.js";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import StarsBackground from "./components/StarBackground/StarsBackground.jsx";

function App() {
  
  return (
    
    <div className="App">
      <StarsBackground />
      <NavBar />
      {/* <h2 id='title'>Add a new Chracter..</h2>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Cards characters={characters} />
    </div>
    


    
  );
}

export default App;
