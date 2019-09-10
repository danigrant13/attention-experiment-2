import React from "react"
import {countBy, path, pipe, prop, propOr, toLower} from "ramda";
import styled from "styled-components";

import useKeyPress from "../../hooks/useKeyPress";

import Page from "../ui/Page";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
`;

const getNumXs = pipe(
  prop('letters'),
  countBy(toLower),
  propOr(0, 'x')
);

const getGuessedNumXs = path(['exitQuestions', 'numberOfXs']);

const isCorrect = (currentPage, trustState) =>
  getNumXs(currentPage) === parseInt(getGuessedNumXs(trustState));

const getSummary = (currentPage, pageIndex) => {
  const numXs = getNumXs(currentPage);
  const isPlural = numXs !== 1;
  const isExperimental = pageIndex > 2;

  return (
    <P>
      During {isExperimental ? "" : "practice "}trial {isExperimental ? pageIndex - 2 : pageIndex + 1} there&nbsp;
      {isPlural ? "were" : "was"}&nbsp;
      {getNumXs(currentPage)} 'X'{isPlural ? "s" : ""} that cycled through.
    </P>
  )
}

const renderPrompt = (page) => {
  switch(page) {
    case 0:
      return "begin the second practice trial."
    case 1:
      return "begin the third practice trial."
    case 2:
      return "continue."
    case 27:
      return "continue."
    default:
      return `begin trial ${page - 1}.`
  }
}

const Feedback = ({ currentPage, handleSubmit, page, trustState }) => {
  useKeyPress(["Enter"], handleSubmit);

  return (
    <Page prompt={`Press ENTER when you are ready to ${renderPrompt(page)}`}>
      <P>You are {isCorrect(currentPage, trustState) ? "correct" : "incorrect"}!</P>
      {getSummary(currentPage, page)}
    </Page>
  );
}

export default Feedback;
