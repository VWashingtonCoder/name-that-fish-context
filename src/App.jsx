import React, { useContext } from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { ScoreContext } from "./Components/ScoreProvider";
import { FinalScore } from "./Components/FinalScore";

function App() {
  const { answersLeft } = useContext(ScoreContext);

  return (
    <div className="App">
      {answersLeft.length > 0 ? (
        <header>
          <ScoreBoard />
          <GameBoard />
        </header>
      ) : (
        <FinalScore />
      )}
    </div>
  );
}

export default App;
