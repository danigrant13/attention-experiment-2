import React from "react";
import {withRouter} from "react-router-dom";

import {DataContext, setManipulationCheck} from "../../App";
import usePrevious from "../../hooks/usePrevious";

import Feedback from "./Feedback";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

const correctAnswers = {
  question1: "4",
  question2: "$4.00",
  question3: "$0.00"
};

const ManipulationCheck = ({ history }) => {
  const [currentState, setCurrentState] = React.useState('question1');

  const lastQuestion = usePrevious(currentState);

  const [answers, setAnswers] = React.useState({});
  const setAnswer = (answer, question) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  }

  switch (currentState) {
    case 'question1':
      return (
        <Question1
          onComplete={(answer) => {
            setAnswer(answer, 'question1');
            setCurrentState('feedback')
          }}
        />
      );
    case 'question2':
      return (
        <Question2
          onComplete={(answer) => {
            setAnswer(answer, 'question2');
            setCurrentState('feedback');
          }}
        />
      );
    case 'question3':
      return (
        <Question3
          onComplete={(answer) => {
            setAnswer(answer, 'question3');
            setCurrentState('feedback');
          }}
        />
      );

    case 'feedback':
      return (
        <DataContext.Consumer>
          {({ dispatch }) => (
            <Feedback
              question={lastQuestion}
              answer={answers[lastQuestion]}
              correctAnswer={correctAnswers[lastQuestion]}
              onStep={() => {
                switch(lastQuestion) {
                  case 'question1':
                    setCurrentState('question2');
                    break;
                  case 'question2':
                    setCurrentState('question3');
                    break;
                  case 'question3':
                    dispatch(setManipulationCheck(answers));
                    history.replace('/practice-intro');
                    break;
                  default:
                    break;
                }
              }}
            />
          )}
        </DataContext.Consumer>
      );
    default:
      return <div />;
  }
};

export default withRouter(ManipulationCheck);
