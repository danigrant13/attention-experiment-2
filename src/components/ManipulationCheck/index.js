import React from "react";
import {withRouter} from "react-router-dom";

import {DataContext, setManipulationCheck} from "../../App";
import usePrevious from "../../hooks/usePrevious";

import Feedback from "./Feedback";
import Question0 from "./Question0";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

const correctAnswers = {
  question1: "4",
  question2: "$4.00",
  question3: "$0.00",
  question4: "right",
};

const ManipulationCheck = ({ history }) => {
  const [currentState, setCurrentState] = React.useState('question0');

  const lastQuestion = usePrevious(currentState);

  const [answers, setAnswers] = React.useState({});
  const setAnswer = (answer, question) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  }

  switch (currentState) {
    case 'question0':
      return (
        <Question0
          onComplete={(answer) => {
            setAnswer(answer, 'question0');
            setCurrentState('question1')
          }}
        />
      );
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
    case 'question4':
      return (
        <Question4
          onComplete={(answer) => {
            setAnswer(answer, 'question4');
            setCurrentState('feedback');
          }}
        />
      );

    case 'feedback':
      return (
        <DataContext.Consumer>
          {({ dispatch, stimRandomizer }) => (
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
                    setCurrentState('question4');
                    break;
                  case 'question4':
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
