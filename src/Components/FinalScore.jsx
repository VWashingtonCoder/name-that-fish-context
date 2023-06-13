import React, { useContext } from "react";
import { ScoreContext } from "./ScoreProvider";

// ! Do Not Add Props Here
export const FinalScore = () => {
  const {
    score: { correctCount, totalCount },
  } = useContext(ScoreContext);

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
