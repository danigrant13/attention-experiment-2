import React from "react";
import {withRouter} from "react-router-dom";
import styled from "styled-components";

import useKeyPress from "../hooks/useKeyPress";

import Instructions from "./ui/Instructions";

const P = styled.p`
  font-size: 32px;
`;

const Welcome = ({history}) => {
  useKeyPress([], () => {
    history.replace("/instructions/0");
  });

  return (
    <Instructions prompt="Press any key to continue.">
      <P>Welcome to the Experiment!</P>
    </Instructions>
  )
};

export default withRouter(Welcome);
