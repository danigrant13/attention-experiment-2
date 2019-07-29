import React from "react";

import useAfterTimeout from "../../hooks/useAfterTimeout";
import useLetterTimer from "../../hooks/useLetterTimer";
import {isMissing, isPresent} from "../../utils/presence";

import PictureStim from "../ui/PictureStim";

const LetterStim = ({currentPage, letterPosition, onStep}) => {
  const letter = useLetterTimer(currentPage.letters);
  const showImages = useAfterTimeout(1000);

  React.useEffect(() => {
    if (isMissing(letter)) {
      onStep();
    }
  }, [letter]) // eslint-disable-line

  return (
    <PictureStim
      images={currentPage.images}
      letter={isPresent(letter) && letter}
      letterPosition={letterPosition}
      showLetter={isPresent(letter)}
      showImages={showImages}
    />
  )
};

export default LetterStim;
