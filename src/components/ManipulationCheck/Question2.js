import React, { useContext } from "react";
import Page from "../ui/Page";

import {P, Select} from "./ui";
import { DataContext } from "../../App";

import { isPresent } from "../../utils/presence";

const Question2 = ({ onComplete }) => {
  const { stimRandomizer } = useContext(DataContext);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    if (isPresent(answer)) {
      onComplete(answer);
    }
  }, [answer]); // eslint-disable-line

  return (
    <Page>
      <P>
        What is the highest amount of money that&nbsp;
        {stimRandomizer.name === 'blackBoxes' ? 'a black box '  : 'Player Two '}
        can give back to you?
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="$2.00">$2.00</option>
        <option value="$2.50">$2.50</option>
        <option value="$3.00">$3.00</option>
        <option value="$3.50">$3.50</option>
        <option value="$4.00">$4.00</option>
      </Select>
    </Page>
  );
};

export default Question2;
