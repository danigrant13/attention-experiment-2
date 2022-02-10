import React, { useContext } from "react";
import Page from "../ui/Page";

import { DataContext } from "../../App";
import { isPresent } from "../../utils/presence";

import {P, Select} from "./ui";

const Question0 = ({ onComplete }) => {
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
        What do you think the likelihood is of a&nbsp;
        {stimRandomizer.name === 'blackBoxes' ? 'black box sending '  : 'Player Two giving '}
        any money back?
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="1">Extremely unlikely</option>
        <option value="2">Moderately unlikely</option>
        <option value="3">Somewhat unlikely</option>
        <option value="4">Neither likely nor unlikely</option>
        <option value="5">Somewhat likely</option>
        <option value="6">Moderately likely</option>
        <option value="7">Extremely likely</option>
      </Select>
    </Page>
  );
};

export default Question0;
