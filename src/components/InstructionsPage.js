import React from "react";
import styled from "styled-components";
import {is} from "ramda";

import INSTRUCTIONS from "../data/instructions";
import useKeyPress from "../hooks/useKeyPress";
import { isPresent } from "../utils/presence";

import Instructions from "./ui/Instructions";

const NUM_INSTRUCTIONS = INSTRUCTIONS.length - 1;

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
  margin: 15px 0px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const Image = styled.img`
  width: 475px;
`;

const isString = is(String);

const renderTextItem = textItems => textItems.map(
  (item, i) =>
    isString(item)
      ? item
      : React.createElement(item.component, {key: i}, [item.text])
);

const renderTextInstruction = (instruction) => isString(instruction)
  ? instruction
  : renderTextItem(instruction.textItems);

const InstructionsPage = ({ history, match: { params: {page} } }) => {
  const intPage = parseInt(page);

  useKeyPress(["Enter"], () => {
    if (intPage === NUM_INSTRUCTIONS) {
      history.replace("/manipulation-check");
    } else {
      history.replace(`/instructions/${intPage + 1}`)
    }
  });

  const currentPage = INSTRUCTIONS[page];

  return isPresent(currentPage.images) ? (
      <Instructions prompt={currentPage.prompt}>
          {currentPage.items.map((instruction, i) => <P>{renderTextInstruction(instruction, i)}</P>)}
        <ImagesWrapper>
          {currentPage.images.map((image, i) => <Image key={i} alt={`img ${i}`} src={image} />)}
        </ImagesWrapper>
      </Instructions>
    ) : (
      <Instructions prompt={currentPage.prompt}>
        {currentPage.items.map((instruction, i) => <P>{renderTextInstruction(instruction, i)}</P>)}
      </Instructions>
    );
};

export default InstructionsPage;
