import React from "react";

import Instructions from "./ui/Instructions";
import useKeyPress from "../hooks/useKeyPress";

const PracticeIntro = ({ history }) => {
  useKeyPress(["Enter"], () => {
    history.replace("/trust-games/0");
  });

  return (
    <Instructions prompt="Press Enter to continue">
      <p>Now let's move on to your 3 practice trials</p>
    </Instructions>
  );
};

export default PracticeIntro;
