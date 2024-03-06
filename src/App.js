import React, { useState } from "react";

// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Start from "./Components/Start";
import Play from "./Components/Play";

function App() {

  const [playGame, setPlayGame] =useState(false);
function displayGame () {
  setPlayGame(true);

}

  return ( 
    <>
   

   {playGame ? <Play/> :  <Start playDice= {displayGame}/>}
   
   
    </>
  )
}
export default App;