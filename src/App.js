import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button.jsx";
import Info from "./Info";

function App() {
  // default value of character is null
  const [character, setCharacter] = useState(null);

  let getCharacters = async () => {
    let chars = [];
    let gus = await axios("https://www.breakingbadapi.com/api/characters/9");
    let hank = await axios("https://www.breakingbadapi.com/api/characters/5");
    let walt = await axios("https://www.breakingbadapi.com/api/characters/1");
    chars = [walt.data[0], hank.data[0], gus.data[0]];
    console.log(chars);
    setCharacter(chars);
  };

  // make api call
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <div className="Buttons">
        <Button />
      </div>
      {/* This is a short circuit boolean that tells the program not to generate the <Info> div
      unless character is not null (we set it to null before it is populated by the API call) */}
      {character && <Info char={character} />}
    </div>
  );
}

export default App;
