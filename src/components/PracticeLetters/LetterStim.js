import React from "react";

import useLetterTimer from "../../hooks/useLetterTimer";
import {isMissing, isPresent} from "../../utils/presence";
import DemoA from "../../assets/demo_a.jpg";
import DemoB from "../../assets/demo_b.jpg";

import PictureStim from "../ui/PictureStim";

const LetterStim = ({letters, letterPosition, onStep}) => {
  const letter = useLetterTimer(letters);

  React.useEffect(() => {
    if (isMissing(letter)) {
      onStep();
    }
  }, [letter]) // eslint-disable-line

  const showLetter = isPresent(letter);
  return (
    <PictureStim
      images={[DemoA, DemoB]}
      letter={showLetter ? letter : "#"}
      letterPosition={letterPosition}
      showLetter={showLetter}
      showImages={false}
    />
  )
};

export default LetterStim;
