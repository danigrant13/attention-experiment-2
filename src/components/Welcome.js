import React from "react";
import styled from "styled-components";

import useKeyPress from "../hooks/useKeyPress";

import Instructions from "./ui/Instructions";

const P = styled.p`
  font-size: 32px;
`;

const Welcome = ({history}) => {
  useKeyPress([], () => {
    history.replace("/instruction/0/0");
  });

  return (
    <Instructions prompt="Press any key to continue.">
      <P>Welcome to the Experiment!</P>
      <P>On the next screen you will see instructions for this study</P>
    </Instructions>
  )
};

export default Welcome;
