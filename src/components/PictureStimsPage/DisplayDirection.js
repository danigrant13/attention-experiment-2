import React from "react";
import styled from "styled-components";

import Instructions from "../ui/Instructions";

const P = styled.p`
  font-size: 75px;
`;

const DisplayDirection = ({ letterPosition, onStep }) => {
  React.useEffect(() => {
    setTimeout(() => {
      onStep();
    }, 1000);
  }, []); // eslint-disable-line

  return <Instructions><P>{letterPosition}</P></Instructions>
};

export default DisplayDirection;
