import React from "react";

import useKeyPress from "../../hooks/useKeyPress";
import {elapsedTime} from "../../utils/date";

import TrustQuestionLayout from "../ui/TrustQuestionLayout";

const zeroDollars = "$0.00";
const fourDollars = "$4.00";
const leftKey = "y";
const rightKey = "b";

const TrustQuestion = ({ currentPage, negativeLanguage, handleSubmit }) => {
  const startRef = React.useRef(new Date());
  const [dollarAmounts, setDollarAmounts] = React.useState([zeroDollars, "$1.00", zeroDollars])
  const [{ choiceMade, choseLeft }, setChoiceMade] = React.useState({ choiceMade: false, choseLeft: false });

  useKeyPress([leftKey, rightKey], (key) => {
    const selectionTime = elapsedTime(startRef.current, new Date());
    const didChooseLeft = key === (negativeLanguage ? rightKey : leftKey);
    const choice = didChooseLeft ? currentPage.images[0] : currentPage.images[1];

    setDollarAmounts([
      didChooseLeft ? fourDollars : zeroDollars,
      zeroDollars,
      didChooseLeft ? zeroDollars : fourDollars
    ]);
    setChoiceMade({ choiceMade: true, choseLeft: didChooseLeft });

    setTimeout(() => {
      handleSubmit({ choice, selectionTime});
    }, 2100);
  }, 1);

  return (
    <TrustQuestionLayout
      images={currentPage.images}
      dollarAmounts={dollarAmounts}
      showLeft={choiceMade ? choseLeft : true}
      showRight={choiceMade ? !choseLeft : true}
      prompt={[
        "Now you are Player One and have been given $1.00.",
        <br />,
        `Which CU Boulder student do you ${negativeLanguage ? 'dis' : ''}trust?`,
        <br />,
        "Use the yellow 'y' to choose the left participant and the yellow 'b' to choose the right participant."
      ]}
    />
  )
};

export default TrustQuestion;
