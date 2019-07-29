import React from "react";

import useKeyPress from "../../hooks/useKeyPress";
import { elapsedTime } from "../../utils/date";

import PictureStim from "../ui/PictureStim";

const TrustQuestion = ({ currentPage, history, pageIndex, totalPages }) => {
  const startRef = React.useRef(new Date());
  const intPageIndex = parseInt(pageIndex);

  useKeyPress(["ArrowLeft", "ArrowRight"], (key) => {
    elapsedTime(startRef.current, new Date());

    if (intPageIndex === totalPages - 1) {
      history.replace('/');
    } else {
      history.replace(`/trust-games/${intPageIndex + 1}`);
    }
  });

  return (
    <PictureStim
      images={currentPage.images}
      letter="A"
      letterPosition="<"
      showLetter={false}
      showImages={true}
      prompt={"Which person do you choose to donate $1.00 to?"}
    />
  )
};

export default TrustQuestion;
