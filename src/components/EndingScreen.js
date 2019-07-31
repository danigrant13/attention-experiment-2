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
    <Instructions>
      <P>Thank you for participating in the study</P>
    </Instructions>
  )
};

export default EndingScreen;
