import React from "react";

import useKeyPress from "../../hooks/useKeyPress";
import { elapsedTime } from "../../utils/date";

import PictureStim from "../ui/PictureStim";

const TrustQuestion = ({ currentPage, handleSubmit }) => {
  const startRef = React.useRef(new Date());

  useKeyPress(["ArrowLeft", "ArrowRight"], (key) => {
    const selectionTime = elapsedTime(startRef.current, new Date());
    const choice = key === "ArrowLeft" ? currentPage.images[0] : currentPage.images[1];

    handleSubmit({ choice, selectionTime});
  });

  return (
    <PictureStim
      images={currentPage.images}
      letter="A"
      letterPosition="<"
      showLetter={false}
      showImages={true}
      prompt={[
        "Which participant do you choose to trust your $1.00 with?",
        <br />,
        "Use the left arrow to choose the left participant and the right arrow to choose the right."
      ]}
    />
  )
};

export default TrustQuestion;
