import React from "react";
import styled from "styled-components";

import useKeyPress from "../hooks/useKeyPress";

import Instructions from "./ui/Instructions";
import INSTRUCTIONS from "../data/instructions";

const NUM_INSTRUCTIONS = INSTRUCTIONS.length - 1;

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
`;

const InstructionsPage = ({ history, match: { params: {page} } }) => {
  const intPage = parseInt(page);

  useKeyPress(["Enter"], () => {
    if (intPage === NUM_INSTRUCTIONS) {
      history.push("/trust-games/0");
    } else {
      history.push(`/instructions/${intPage + 1}`)
    }
  });

  const currentPage = INSTRUCTIONS[page];

  return (
    <Instructions prompt={currentPage.prompt}>
      {currentPage.items.map((instruction, i) => <P key={i}>{instruction}</P>)}
    </Instructions>
  );
};

export default InstructionsPage;
