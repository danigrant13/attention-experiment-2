import React, { useContext } from "react";

import { DataContext } from "../../App";
import useKeyPress from "../../hooks/useKeyPress";

import TrustQuestionLayout from "../ui/TrustQuestionLayout";

const zeroDollars = "$0.00";
const fourDollars = "$4.00";

const ShowChoice = ({ images, isLeft, onStep }) => {
  const { stimRandomizer } = useContext(DataContext);
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
        stimRandomizer.name === "blackBoxes" ?
          "This is the black box you selected. The mathematical algorithm this black box uses will dictate whether to give none, some, or all the money you gave back to you." :
          "This is the participant you selected. When they come back to the lab later they will decide whether to give none, some, or all the money you gave them back to you.",
        <br />,
        "Press ENTER to continue."
      ]}
    />
  );
};

export default ShowChoice;
