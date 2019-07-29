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
      prompt={"Which person do you choose to donate $1.00 to?"}
    />
  )
};

export default TrustQuestion;
