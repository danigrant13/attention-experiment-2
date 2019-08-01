import React from "react";

import Page from "../ui/Page";
import {P, Select} from "./ui";

import { isPresent } from "../../utils/presence";

const Question2 = ({ onIncorrect, onComplete, showRemainingChances }) => {
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    if (answer === "0") {
      onComplete();
    } else if (isPresent(answer)) {
      onIncorrect();
      showRemainingChances();
    }
  }, [answer]); // eslint-disable-line

  return (
    <Page>
      <P>
        What is the lowest amount of money the Second Mover can give back to the
        First Mover?
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="0">$0.00</option>
        <option value="1">$0.05</option>
        <option value="2">$0.10</option>
        <option value="3">$0.50</option>
        <option value="4">$1.00</option>
      </Select>
    </Page>
  )

};

export default Question2;
