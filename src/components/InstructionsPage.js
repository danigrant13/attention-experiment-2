import React from "react";
import styled from "styled-components";
import {is} from "ramda";

import useAfterTimeout from "../hooks/useAfterTimeout";
import useKeyPress from "../hooks/useKeyPress";
import { isPresent } from "../utils/presence";
import INSTRUCTIONS from "../data/instructions";

import {DataContext} from "../App";
import Instructions from "./ui/Instructions";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
  margin: 15px 0px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const Image = styled.img`
  width: 475px;
`;

const FullPageImage = styled.img`
  width: 100%;
  max-width: 1100px;
  padding: -1px -1px -1px -1px;
  border: 2px solid #000;
`;

const isString = is(String);

const isFunction = (object) => typeof object === 'function';

const renderTextItem = (textItems, context) => textItems.map(
  (item, i) => {
    if(isString(item)) {
      return item;
    } else if (isFunction(item)) {
      return item(context);
    }
    return React.createElement(
      item.component,
      {key: i},
      [isFunction(item.text) ? item.text(context) : item.text]
    );
  }
);

const renderTextInstruction = (instruction, context) => {
  if (isString(instruction)) {
    return instruction
  } else if (isFunction(instruction)) {
    return instruction(context);
  }
  return renderTextItem(instruction.textItems, context);
}

const proceedLocations = ['/practice-letters', '/practice-trust', '/manipulation-check'];

const InstructionsPage = ({history, match: { path, params: {group, page} }}) => {
  const intGroup = parseInt(group);
  const intPage = parseInt(page);
  const instructions = INSTRUCTIONS[intGroup];
  const numInstructions = instructions.length - 1;
  const currentPage = instructions[intPage];

  const denyProgress = !useAfterTimeout(currentPage.timeout || 0);
  const prompt = denyProgress ? "" : currentPage.prompt;
  useKeyPress(["Enter"], () => {
    if (denyProgress) {
      return;
    }
    if (intPage === numInstructions) {
      history.replace(proceedLocations[intGroup]);
    } else {
      history.replace(`/instructions/${group}/${intPage + 1}`)
    }
  });

  if (isPresent(currentPage.fullPageImage)) {
    return (
      <Instructions prompt={prompt}>
        <FullPageImage alt="Image" src={currentPage.fullPageImage} />
      </Instructions>
    );
  }

  return (
    <DataContext.Consumer>
      {({ state }) => (
        <Instructions prompt={prompt}>
          {currentPage.items.map((instruction, i) => <P>{renderTextInstruction(instruction, state)}</P>)}
          {isPresent(currentPage.images) && (
            <ImagesWrapper>
              {currentPage.images.map((image, i) =>
                <Image key={i} alt={`img ${i}`} src={typeof image == 'function' ? image(state) : image} />)}
            </ImagesWrapper>
          )}
        </Instructions>
      )}
    </DataContext.Consumer>
  );
};

export default InstructionsPage;
