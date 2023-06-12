import "./styles/game-board.css";
import React, { useContext } from "react";
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
  const { nextFishToName, guessTheFish } = useContext(ScoreContext);

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={guessTheFish}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" />
        <input type="submit" />
      </form>
    </div>
  );
};
