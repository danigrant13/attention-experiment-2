import React from "react";
import styled from "styled-components";

import useKeyPress from "../hooks/useKeyPress";
import { isPresent } from "../utils/presence";
import saveData from "../utils/save-data";
import { DataContext } from "../App";

import Instructions from "./ui/Instructions";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
`;

const EndingScreen = ({ data }) => {
  data && console.log(saveData(data));
  React.useEffect(() => {
    if (isPresent(window.jatos) && isPresent(data)) {
      console.log("Submitting ", data);
      window.jatos.submitResultData(saveData(data));
    }
  }, [data]);
  useKeyPress(["Enter"], () => {
    if (isPresent(window.jatos)) {
      console.log("Ending Study");
      window.jatos.endStudy();
    }
  });

  return (
    <Instructions prompt="Press ENTER to exit the experiment.">
      <P>Thank you for taking part in this study!</P>
      <P>
        This study contained some deception. Participants in phase two will not be awarded the amount Player Two chooses to give back to them. Instead, once we have finished running participants at the end of the semester, we will randomly select a subset of participants who will be awarded a bonus monetary payment of $20.00.
      </P>
    </Instructions>
  );
};

export default () => (
  <DataContext.Consumer>
    {({ state }) => (
      <EndingScreen data={state} />
    )}
  </DataContext.Consumer>
);
