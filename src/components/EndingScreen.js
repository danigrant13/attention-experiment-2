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

const EndingScreen = ({ data, data: { participantNumber } }) => {
  data && console.log(saveData(data));
  React.useEffect(() => {
    if (isPresent(window.jatos) && isPresent(data)) {
      console.log("Submitting ", data);
      window.jatos.submitResultData(saveData(data));
    }
  }, [data]);
  useKeyPress(["Enter"], () => {
    if (isPresent(window.jatos)) {
      window.jatos.endStudy();
    }
    console.log("Ending Study");
    window.location.assign(`https://cuboulder.qualtrics.com/jfe/form/SV_3sfFtN8pzVD3Nnn?participantNumber=${participantNumber}`)
  });

  return (
    <Instructions prompt="Press ENTER to exit the experiment and move on to the survey.">
      <P>Thank you for taking part in the experimental trials!</P>
      <P>
        Lastly, you will take a survey and answer some demographic questions.
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
