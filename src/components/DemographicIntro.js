import React from "react";

import Page from "./ui/Page";
import useKeyPress from "../hooks/useKeyPress";

const DemographicsIntro = ({ history }) => { 
  useKeyPress(["Enter"], () => {
    history.replace("/demographics/0");
  });

  return (
    <Page prompt="Press ENTER when you are ready to begin.">
      <p>You have finished with the experimental trials!</p>
      <p>Lastly, you will answer a short survey.</p>
    </Page>
  );
};

export default DemographicsIntro;
