import React, { useContext } from "react";

import { DataContext } from "../../App";
import Page from "../ui/Page";
import {P, Select} from "./ui";

import { isPresent } from "../../utils/presence";

const Question3 = ({ onComplete }) => {
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
        What is the lowest amount of money that&nbsp;
        {stimRandomizer.name === 'blackBoxes' ? 'a black box '  : 'Player Two '}
        can give back to you?      
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="$0.00">$0.00</option>
        <option value="$0.05">$0.05</option>
        <option value="$0.10">$0.10</option>
        <option value="$0.50">$0.50</option>
        <option value="$1.00">$1.00</option>
      </Select>
    </Page>
  );
};

export default Question3;
