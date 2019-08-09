import React from "react";

import Page from "./ui/Page";
import useKeyPress from "../hooks/useKeyPress";

const ExperimentIntro = ({ history }) => { 
  useKeyPress(["Enter"], () => {
    history.replace("/trust-games/3");
  });

  return (
    <Page prompt="Press ENTER when you are ready to begin.">
      <p>You have finished with the 3 practice trials!</p>
      <p>Now, you will take part in 25 experimental trials.</p>
    </Page>
  );
};

export default ExperimentIntro;
