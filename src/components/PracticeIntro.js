import React from "react";

import Instructions from "./ui/Instructions";
import useKeyPress from "../hooks/useKeyPress";

const PracticeIntro = ({ history }) => {
  useKeyPress(["Enter"], () => {
    history.replace("/trust-games/0");
  });

  return (
    <Instructions prompt="Press Enter when you are ready to begin the first practice trial.">
      <p>Thank you for answering those questions!</p>
      <p>Now let's move on to the three practice trials.</p>
    </Instructions>
  );
};

export default PracticeIntro;
