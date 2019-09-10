import React from "react";

import useKeyPress from "../../hooks/useKeyPress";
import { elapsedTime } from "../../utils/date";

import TrustQuestionLayout from "../ui/TrustQuestionLayout";

const zeroDollars = "$0.00";
const fourDollars = "$4.00";

const TrustQuestion = ({ currentPage, handleSubmit }) => {
  const startRef = React.useRef(new Date());
  const [dollarAmounts, setDollarAmounts] = React.useState([zeroDollars, "$1.00", zeroDollars])

  useKeyPress(["ArrowLeft", "ArrowRight"], (key) => {
    const selectionTime = elapsedTime(startRef.current, new Date());
    const didChooseLeft = key === "ArrowLeft";
    const choice = didChooseLeft ? currentPage.images[0] : currentPage.images[1];

    setDollarAmounts([
      didChooseLeft ? fourDollars : zeroDollars,
      zeroDollars,
      didChooseLeft ? zeroDollars : fourDollars
    ])

    setTimeout(() => {
      handleSubmit({ choice, selectionTime});
    }, 2100);
  });

  return (
    <TrustQuestionLayout
      images={currentPage.images}
      dollarAmounts={dollarAmounts}
      showLeft={true}
      showRight={true}
      prompt={[
        "Now you are Player One and have been given $1.00.",
        <br />,
        "Which CU Boulder student do you want to trust your $1.00 with?",
        <br />,
        "Use the left arrow to choose the left participant and the right arrow to choose the right participant."
      ]}
    />
  )
};

export default TrustQuestion;
