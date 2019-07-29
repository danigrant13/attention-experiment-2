import React from "react";

import imageStims from "../../data/imageStims";
import { sampleWithoutReplacement } from "../../utils/random";

import DisplayDirection from "./DisplayDirection";
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
  let withXLetters = lettersNoX.slice(0);
  if (Math.random() <= 0.2) {
      xToAdd = sampleWithoutReplacement([['X'], ['X', 'X']], 1);
  }
  xToAdd.forEach(function() { withXLetters.shift() });
  withXLetters = withXLetters.concat(xToAdd);
  return sampleWithoutReplacement(withXLetters, 25);
};

const PAGES = [];
for (let i = 0; i < 6; i++) {
  PAGES.push({
    images: imageStims.getSample(),
    letters: randomLetters(),
  })
}

console.log(PAGES);

const NUM_PAGES = PAGES.length

const PictureStimsPage = ({history, match: { params: { page } } }) => {
  const pageIndex = parseInt(page);
  const currentPage = PAGES[pageIndex];

  const letterPosition = React.useRef(Math.random() < 0.5 ? "<" : ">");
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
          pageIndex={page}
          totalPages={NUM_PAGES}
          history={history}
        />
      );
    default:
      return <div />;
  }
};

export default PictureStimsPage;
