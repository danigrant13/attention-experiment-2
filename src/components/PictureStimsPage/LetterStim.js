import React from "react";

import useAfterTimeout from "../../hooks/useAfterTimeout";
import useLetterTimer from "../../hooks/useLetterTimer";
import {isMissing, isPresent} from "../../utils/presence";

import PictureStim from "../ui/PictureStim";

const LetterStim = ({currentPage, letterPosition, onStep}) => {
  const letter = useLetterTimer(currentPage.letters);
  const showImages = useAfterTimeout(2000);
  const timeout = React.useRef(null);

  React.useEffect(() => {
    if (isMissing(letter)) {
      timeout.current = setTimeout(onStep, 1000);
    }
  }, [letter]) // eslint-disable-line

  const showLetter = isPresent(letter);
  return (
    <PictureStim
      images={currentPage.images}
      letter={showLetter ? letter : "#"}
      letterPosition={letterPosition}
      showLetter={showLetter}
      showImages={showImages}
    />
  )
};

export default LetterStim;
