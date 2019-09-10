import React from "react";
import styled from "styled-components";

import useKeyPress from "../../hooks/useKeyPress";

import Instructions from "../ui/Instructions";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
  margin: 15px 0px;
`;

const Feedback = ({ question, answer, correctAnswer, onStep }) => {
  useKeyPress(["Enter"], onStep);

  return (
    <Instructions prompt={"Press ENTER to continue."}>
        {answer === correctAnswer ? (
        <>
          <P>Correct! The answer is {correctAnswer}.</P>
        </>
      ) : (
        <P>That is incorrect! The correct answer was {correctAnswer}</P>
      )}
    </Instructions>
  );
};

export default Feedback;

