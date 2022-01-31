import React from "react";
import {propOr} from "ramda";
import { shuffle } from "../../utils/random";

import DisplayDirection from "../PictureStimsPage/DisplayDirection";
import ExitQuestions from "../PictureStimsPage/ExitQuestions";
import Feedback from "./Feedback";
import LetterStim from "./LetterStim";

const letters = shuffle([
  'A','B','C','D','E',
  'F','X','H','I','J',
  'K','L','M','N','O',
  'P','Q','X','S','T',
  'U','V','W','Y','Z'
]);

const reducer = (state, action) => {
  switch(action.type) {
    case 'exit-questions':
      return { ...action.data };
    default:
      return state;
  }
};

const PracticeLetters = ({ history }) => {
  const [currentState, setCurrentState] = React.useState("direction");
  const stepTo = (to) => () => {
    setCurrentState(to);
  };
  const [numXState, numXDispatch] = React.useReducer(reducer, {});
  const isCorrect = propOr("0", 'numberOfXs', numXState) === "2";

  switch(currentState) {
    case "direction":
      return <DisplayDirection letterPosition=">" onStep={stepTo("letters")} />;
    case "letters":
      return (
        <LetterStim
          letters={letters}
          letterPosition=">"
          onStep={stepTo("exit-questions")}
        />
      );
    case "exit-questions":
      return (
         <ExitQuestions
           dispatch={numXDispatch}
           handleSubmit={stepTo("feedback")}
         />
      );
    case "feedback":
        return (
          <Feedback
            numXs={numXState.numberOfXs}
            isCorrect={isCorrect}
            onStep={() => {
              if (isCorrect) {
                history.replace("/instructions/1/0");
              } else {
                stepTo("direction")();
              }
            }}
          />
        );
    default:
      return <div />;
  }
};

export default PracticeLetters;
