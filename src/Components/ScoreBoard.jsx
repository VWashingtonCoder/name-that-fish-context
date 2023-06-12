import "./styles/score-board.css";
import React, { useContext } from "react";
import { ScoreContext } from "./ScoreProvider";

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const {
    answersLeft,
    score: { correctCount, incorrectCount }
  } = useContext(ScoreContext);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
