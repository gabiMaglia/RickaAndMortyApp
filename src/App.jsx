import { useState } from 'react'
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';
import './App.css'

function App() {
  return (
    <div className='App'>
              <SearchBar onSearch={(characterID) => window.alert(characterID)} />
               <Cards characters={characters} />  
    </div>
  )
}

export default App
