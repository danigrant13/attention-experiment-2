import React from "react";
import styled from "styled-components";

import useKeyPress from "../../hooks/useKeyPress";

import Instructions from "../ui/Instructions";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
  margin: 15px 0px;
`;

const Feedback = ({ numXs, isCorrect, onStep }) => {
  useKeyPress(["Enter"], onStep);

  return (
    <Instructions prompt={`Press ENTER to ${isCorrect ? 'continue' : 'begin the practice trial'}`}>
        {isCorrect ? (
        <>
          <P>Correct! Two 'X's appeared in the practice trial!</P>
          <P>
            Now that you understand the search task, let's show you how
            the search task and decision task will work together.
          </P>
        </>
      ) : (
        <P>That is incorrect! Let's try the practice trial again.</P>
      )}
    </Instructions>
  );
};

export default Feedback;
