
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";
import "./App.css";

function App() {
  return (
    <div className="App"><div>
      
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        <Cards characters={characters} />
    </div>
    </div>
  );
}

export default App;
