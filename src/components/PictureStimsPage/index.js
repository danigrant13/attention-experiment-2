import React from "react";

import imageStims from "../../data/imageStims";
import { coinFlip, sampleWithoutReplacement, shuffle } from "../../utils/random";
import reducer, { genInitialValues, setSelection } from "./store";

import {DataContext, setTrustRow} from "../../App";
import DisplayDirection from "./DisplayDirection";
import ExitQuestions from "./ExitQuestions";
import LetterStim from "./LetterStim";
import TrustQuestion from "./TrustQuestion";

const lettersNoX = [
  'A','B','C','D','E',
  'F','G','H','I','J',
  'K','L','M','N','O',
  'P','Q','R','S','T',
  'U','V','W','Y','Z'
];

const randomLetters = () => {
  let xToAdd = [];
  let withXLetters = shuffle(lettersNoX);
  if (Math.random() <= 0.2) {
      xToAdd = sampleWithoutReplacement([['X'], ['X', 'X']], 1)[0];
  }
  withXLetters = sampleWithoutReplacement(withXLetters, 20);
  xToAdd.forEach(function() { withXLetters.shift() });
  return shuffle(withXLetters.concat(xToAdd));
};

const PAGES = [];
for (let i = 0; i < 6; i++) {
  PAGES.push({
    images: imageStims.getSample(),
    letters: randomLetters(),
  })
}

const NUM_PAGES = PAGES.length

const PictureStimsPage = ({history, match: { params: { page } } }) => {
  const pageIndex = parseInt(page);
  const currentPage = PAGES[pageIndex];

  const letterPosition = React.useRef(coinFlip() ? "<" : ">");
  const [trustState, trustDispatch] = React.useReducer(reducer, genInitialValues(currentPage));
  const [currentState, setCurrentState] = React.useState("direction");
  const stepTo = (to) => () => {
    setCurrentState(to);
  };

  switch(currentState) {
    case "direction":
      return <DisplayDirection letterPosition={letterPosition.current} onStep={stepTo("letters")} />;
    case "letters":
      return (
        <LetterStim
          currentPage={currentPage}
          letterPosition={letterPosition.current}
          onStep={stepTo("trust")}
        />
      )
    case "trust":
      return (
        <TrustQuestion
          currentPage={currentPage}
          handleSubmit={({choice, selectionTime}) => {
            trustDispatch(setSelection(choice, selectionTime));
            stepTo('exit-questions')();
          }}
        />
      );
    case "exit-questions":
      return (
        <DataContext.Consumer>
          {({dispatch}) => (
            <ExitQuestions
              dispatch={trustDispatch}
              handleSubmit={() => {
                dispatch(setTrustRow(trustState));
                if (pageIndex === NUM_PAGES - 1) {
                  history.replace('/');
                } else {
                  history.replace(`/trust-games/${pageIndex + 1}`);
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

export default PictureStimsPage;
