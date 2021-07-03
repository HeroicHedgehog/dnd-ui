import './App.css';
import React, {useState } from "react";
import {Header} from './Components/Header'
import {CharacterSheet} from './Components/CharacterSheet'

function App() {
  const [pcId, setPcId] = useState(0);

  return (
    <div className="App">
      <Header setPcId={setPcId} />
      <CharacterSheet pcId={pcId} />
    </div>
  );
}

export default App;
