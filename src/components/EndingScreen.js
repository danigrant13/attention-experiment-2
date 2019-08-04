import React from "react";
import styled from "styled-components";

import { isPresent } from "../utils/presence";
import DataContext from "../App";

import Instructions from "./ui/Instructions";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
`;

const EndingScreen = () => {
  const dataObject = React.useContext(DataContext);
  React.useEffect(() => {
    if (isPresent(window.jatos)) {
      window.jatos.submitResultData(JSON.stringify(dataObject), window.jatos.endStudy);
    }
  }, [dataObject]);

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

export default EndingScreen;
