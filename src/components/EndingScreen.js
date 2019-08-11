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
    <Instructions prompt="Press ENTER to continue.">
      <P>Thank you for taking part in the experiment!</P>
      <P>On the next page you will receive your code for MTurk participation payment.</P>
      <P>
        Once we have finished running participants, you will be awarded your&nbsp;
        performance based fee for the search task.
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
