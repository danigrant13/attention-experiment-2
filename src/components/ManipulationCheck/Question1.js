import React, { useContext } from "react";
import Page from "../ui/Page";

import { DataContext } from "../../App";
import { isPresent } from "../../utils/presence";

import {P, Select} from "./ui";

const Question1 = ({ onComplete }) => {
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
        After you have selected&nbsp;
        {stimRandomizer.name === 'blackBoxes' ? 'one of the black boxes '  : 'Player Two '}
        to give your $1.00, how much will this amount be multiplied by before being given&nbsp;
        {stimRandomizer.name === 'blackBoxes' ? 'to the black box?'  : 'to Player Two?'}

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
  );
};

export default Question1;
