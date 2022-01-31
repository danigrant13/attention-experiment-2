import React, { useContext } from "react";
import { shuffle } from "../../utils/random";

import {DataContext} from "../../App";
import DisplayDirection from "../PictureStimsPage/DisplayDirection";
import TrustQuestion from "../PictureStimsPage/TrustQuestion";
import LetterStim from "../PictureStimsPage/LetterStim";
import ShowChoice from "./ShowChoice";
import ShowPlayerTwo from "./ShowPlayerTwo";
import RoundTwoTransition from "./RoundTwoTransition";

const letters = shuffle([
  'A','B','C','D','E',
  'F','X','H','I','J',
  'K','L','M','N','O',
  'P','Q','X','S','T',
  'U','V','W','Y','Z'
]);

const PracticeLetters = ({ history }) => {
  const { state: { negativeLanguage }, stimRandomizer } = useContext(DataContext);
  const [trustAnswer, setTrustAnswer] = React.useState(null);
  const [currentState, setCurrentState] = React.useState("direction");
  const [currentRound, setCurrentRound] = React.useState(1);
  const stepTo = (to) => () => {
    setCurrentState(to);
  };

  const currentImages = stimRandomizer.practiceAt(currentRound - 1)

  switch(currentState) {
    case "direction":
      return <DisplayDirection letterPosition=">" onStep={stepTo("letters")} />;

    case "letters":
      return (
        <LetterStim
          currentPage={{images: currentImages, letters}}
          letters={letters}
          letterPosition=">"
          onStep={stepTo("trust-question")}
        />
      );
    case 'trust-question':
      return (
        <TrustQuestion
          currentPage={{images: currentImages, letters}}
          negativeLanguage={negativeLanguage}
          handleSubmit={({choice}) => {
            setTrustAnswer(choice);
            stepTo('show-choice')();
          }}
        />
      );
    case 'show-choice':
      return (
        <ShowChoice
          images={currentImages}
          isLeft={currentImages[0] === trustAnswer}
          onStep={stepTo('show-player-two')}
        />
      );

    case 'show-player-two':
      return (
        <ShowPlayerTwo
          images={currentImages}
          isLeft={currentImages[0] === trustAnswer}
          round={currentRound}
          onStep={() => {
            if (currentRound === 1) {
              setCurrentRound(2);
              stepTo('round-two-transition')();
              return;
            }
            history.replace("/instructions/2/0")
          }}
        />
      );
    case "round-two-transition":
      return <RoundTwoTransition letterPosition=">" onStep={stepTo("direction")} />;

    default:
      return <div />;
  }
};

export default PracticeLetters;
