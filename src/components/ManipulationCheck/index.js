import React from "react";
import {withRouter} from "react-router-dom";

import Question1 from "./Question1";
import Question2 from "./Question2";

const remainingChances = (incorrect) => 2 - incorrect;

const ManipulationCheck = ({ history }) => {
  const [incorrectCount, setIncorrectCount] = React.useState(0);
  const incrementIncorrect = () => setIncorrectCount(incorrect => incorrect + 1);
  const showRemainingChances = () => {
    if (remainingChances(incorrectCount) === 0) {
      return;
    }
    alert(`Incorrect. You have ${remainingChances(incorrectCount)} more attempts`)
  };
  const [currentState, setCurrentState] = React.useState('question1');

  console.log(currentState);
  React.useEffect(() => {
    if (incorrectCount > 2) {
      // end experiment
      console.log("End experiment logic")
    }
  }, [incorrectCount]);

  return currentState === 'question1' ? (
    <Question1
      onIncorrect={incrementIncorrect}
      onComplete={() => setCurrentState("question2")}
      showRemainingChances={showRemainingChances}
    />
  ) : (
    <Question2
      onIncorrect={incrementIncorrect}
      onComplete={() => history.replace("/practice-intro")}
      showRemainingChances={showRemainingChances}
    />
  );
};

export default withRouter(ManipulationCheck);
