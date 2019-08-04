import React from "react";
import styled from "styled-components";

import Page from "../ui/Page";

import { isPresent } from "../../utils/presence";

const P = styled.p`
  font-size: 24px;
  max-width: 1000px;
`;

const Select = styled.select`
  height: 35px;
  border-radius: 0;
  margin-right: 15px;
  width: 150px;
`;

const Question1 = ({ onIncorrect, onComplete, showRemainingChances }) => {
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    if (answer === "4") {
      onComplete();
    } else if (isPresent(answer)) {
      onIncorrect();
      showRemainingChances();
    }
  }, [answer]); // eslint-disable-line

  return (
    <Page>
      <P>
        If the First Mover chooses to trust the Second Mover with $1.00, how much
        will this amount be multiplied by before being placed in the Second Mover's
        account?
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
    </Page>
  )

};

export default Question1;
