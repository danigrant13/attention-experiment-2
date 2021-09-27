import React from "react";
import styled from "styled-components";
import Instructions from "../ui/Instructions"
import useKeyPress from "../../hooks/useKeyPress";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
  margin: 15px 0px;
`;

const RoundTwoTransition = ({ onStep }) => {
  useKeyPress(["Enter"], () => {
    onStep();
  });

  return (
    <Instructions prompt={"Press ENTER to begin the example trial"}>
      <P>Now we will move on to the second example trial.</P>
    </Instructions>
  );
};

export default RoundTwoTransition;
