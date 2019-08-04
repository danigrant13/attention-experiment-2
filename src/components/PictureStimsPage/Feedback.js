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
  return (
    <P>
        During trial {pageIndex + 1} there&nbsp;
        {isPlural ? "were" : "was"}&nbsp;
        {getNumXs(currentPage)}&nbsp;
        "X"{isPlural ? "s" : ""} that cycled through
    </P>
  )
}

const Feedback = ({ currentPage, handleSubmit, page, trustState }) => {
  useKeyPress(["Enter"], handleSubmit);

  return (
    <Page prompt="Press ENTER when you are ready to begin the next trial.">
      <P>You are {isCorrect(currentPage, trustState) ? "correct" : "incorrect"}!</P>
      {getSummary(currentPage, page)}
    </Page>
  );
}

export default Feedback;
