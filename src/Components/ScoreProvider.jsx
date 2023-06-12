import React, { useContext, useState } from "react";
import { Images } from "../assets/images";

export const ScoreContext = React.createContext();

const ScoreProvider = ({ children }) => {
  const initialFishes = [
    { name: "trout", url: Images.trout },
    { name: "salmon", url: Images.salmon },
    { name: "tuna", url: Images.tuna },
    { name: "shark", url: Images.shark },
  ];
  const initialAnswers = ["trout", "salmon", "shark", "tuna"];
  
  const initialScore = {
    correctCount: 0,
    incorrectCount: 0,
    totalCount: initialAnswers.length
  }

  const [score, setScore] = useState(initialScore);
  const [answersLeft, setAnswersLeft] = useState(initialAnswers);
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);

  const guessTheFish = (e) => {
    e.preventDefault();
    const { value } = e.target["fish-guess"];

    const newAnswersLeft = answersLeft.filter(answer => answer !== nextFishToName.name);
    const nextFishName = newAnswersLeft[Math.floor(Math.random() * newAnswersLeft.length)];
    const nextFish = initialFishes.find(fish => fish.name === nextFishName);

    value.toLowerCase().trim() === nextFishToName.name 
      ? setScore({ ...score, correctCount: score.correctCount + 1 })
      : setScore({ ...score, incorrectCount: score.incorrectCount + 1 });
    
    setAnswersLeft(newAnswersLeft);
    setNextFishToName(nextFish);
  }

  const contextInfo = {
    answersLeft: answersLeft,
    nextFishToName: nextFishToName,
    score: score,
    guessTheFish: (e) => guessTheFish(e)
  }

  return (
    <ScoreContext.Provider value={contextInfo}>
        {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
// exports to main.jsx to encompass entire app