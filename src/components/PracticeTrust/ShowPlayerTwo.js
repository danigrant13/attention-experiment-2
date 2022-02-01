import React, { useContext } from "react";
import { DataContext } from "../../App";
import useKeyPress from "../../hooks/useKeyPress";

import TrustQuestionLayout from "../ui/TrustQuestionLayout";

const zeroDollars = "$0.00";
const twoDollars = "$2.00";
const fourDollars = "$4.00";

const ShowPlayerTwo = ({ images, isLeft, onStep, round }) => {
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
        `For example, imagine that `,
        stimRandomizer.name === 'blackBoxes' ? 'this black box’s mathematical algorithm dictated you be given '  : 'when this Player Two came back to the lab, they chose to give you '
        ` ${round === 1 ? zeroDollars : twoDollars} back.`,
        <br />,
        "Press ENTER to continue."
      ]}
    />
  );
};

export default ShowPlayerTwo;
