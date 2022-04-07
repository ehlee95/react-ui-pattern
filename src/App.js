import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button.jsx";
import Info from "./Info";

function App() {
  const [character, setCharacter] = useState(null);

  let getCharacters = async () => {
    // let chars = [];
    let results = await axios(
      "https://www.breakingbadapi.com/api/characters/9"
    );
    // let hank = await axios("https://www.breakingbadapi.com/api/characters/5");
    // let walt = await axios("https://www.breakingbadapi.com/api/characters/1");
    // chars.push(gus);
    // console.log(chars);
    setCharacter(results.data[0]);
  };

  // make api call
  useEffect(() => {
    getCharacters();
  }, []);

  // fetch("https://www.breakingbadapi.com/api/characters/9")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     setCharacter(res[0]);
  //     console.log(character);
  //   });

  return (
    <div className="App">
      <div className="Buttons">
        <Button />
      </div>
      {character && <Info char={character} />}
    </div>
  );
}

export default App;
