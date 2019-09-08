import React from "react";

import useKeyPress from "../../hooks/useKeyPress";

import TrustQuestionLayout from "../ui/TrustQuestionLayout";

const zeroDollars = "$0.00";
const fourDollars = "$4.00";

const ShowChoice = ({ images, isLeft, onStep }) => {
  useKeyPress(["Enter"], onStep);

  return (
    <TrustQuestionLayout
      showLeft={isLeft}
      showRight={!isLeft}
      dollarAmounts={[
        isLeft ? fourDollars : zeroDollars,
        zeroDollars,
        isLeft ? zeroDollars : fourDollars
      ]}
      images={images}
      prompt={[
        "This is the participant you chose to trust. When they come back to the lab in a few days they will choose whether to give none, some, or all the money you trusted them with back to you.",
        <br />,
        "Press ENTER to continue."
      ]}
    />
  );
};

export default ShowChoice;
