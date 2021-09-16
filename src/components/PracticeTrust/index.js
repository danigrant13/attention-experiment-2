import React from "react";
import { shuffle } from "../../utils/random";

import {practiceImages} from "../../data/imageStims";

import {DataContext} from "../../App";
import DisplayDirection from "../PictureStimsPage/DisplayDirection";
import TrustQuestion from "../PictureStimsPage/TrustQuestion";
import LetterStim from "../PictureStimsPage/LetterStim";
import ShowChoice from "./ShowChoice";

const letters = shuffle([
  'A','B','C','D','E',
  'F','X','H','I','J',
  'K','L','M','N','O',
  'P','Q','X','S','T',
  'U','V','W','Y','Z'
]);

const PracticeLetters = ({ history, match: { url } }) => {
  const [trustAnswer, setTrustAnswer] = React.useState(null);
  const [currentState, setCurrentState] = React.useState("direction");
  const stepTo = (to) => () => {
    setCurrentState(to);
  };

  switch(currentState) {
    case "direction":
      return <DisplayDirection letterPosition=">" onStep={stepTo("letters")} />;
    case "letters":
      return (
        <LetterStim
          currentPage={{images: practiceImages, letters}}
          letters={letters}
          letterPosition=">"
          onStep={stepTo("trust-question")}
        />
      );
    case 'trust-question':
      return (
        <DataContext.Consumer>
          {({state: {negativeLanguage}}) => (
            <TrustQuestion
              currentPage={{images: practiceImages, letters}}
              negativeLanguage={negativeLanguage}
              handleSubmit={({choice}) => {
                setTrustAnswer(choice);
                stepTo('show-choice')();
              }}
            />
          )}
        </DataContext.Consumer>
      );
    case 'show-choice':
      return (
        <ShowChoice
          images={practiceImages}
          isLeft={practiceImages[0] === trustAnswer}
          onStep={() => history.replace("/instructions/2/0")}
        />
      );

    default:
      return <div />;
  }
};

export default PracticeLetters;
