import React, { useContext, useState } from "react";
import { Images } from "../assets/images";

export const ScoreContext = React.createContext();
const initialFishes = [
  { name: "trout", url: Images.trout },
  { name: "salmon", url: Images.salmon },
  { name: "tuna", url: Images.tuna },
  { name: "shark", url: Images.shark },
];
const initialScore = {
  correctCount: 0,
  incorrectCount: 0,
  totalCount: initialFishes.length,
};

const ScoreProvider = ({ children }) => {
  const [currentFishIdx, setCurrentFishIdx] = useState(0);
  const [score, setScore] = useState(initialScore);
  const answersLeft = initialFishes
    .slice(currentFishIdx)
    .map((fish) => fish.name);

  const guessTheFish = (name) => {
    name.toLowerCase().trim() === initialFishes[currentFishIdx].name
      ? setScore({ ...score, correctCount: score.correctCount + 1 })
      : setScore({ ...score, incorrectCount: score.incorrectCount + 1 });
    setCurrentFishIdx(currentFishIdx + 1);
  };

  const contextInfo = {
    answersLeft: answersLeft,
    currentFish: initialFishes[currentFishIdx],
    score: score,
    guessTheFish,
  };

  return (
    <ScoreContext.Provider value={contextInfo}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
// exports to main.jsx to encompass entire app
