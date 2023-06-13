import "./styles/game-board.css";
import React, { useContext, useState } from "react";
import { ScoreContext } from "./ScoreProvider";

import { Images } from "../assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

// ! Do not add props to gameboard
export const GameBoard = () => {
  const { currentFish, guessTheFish } = useContext(ScoreContext);
  const [fishGuess, setFishGuess] = useState("");

  const handleGuessInput = ({ target: { value } }) => {
    setFishGuess(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guessTheFish(fishGuess);
    setFishGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={handleGuessInput}
          value={fishGuess}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
