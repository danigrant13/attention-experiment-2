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
        {stimRandomizer.name === 'blackBoxes' ? 'black boxe sending '  : 'Player Two giving '}
        any money back?
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="Extremely unlikely">1</option>
        <option value="Moderately unlikely">2</option>
        <option value="Somewhat unlikely">3</option>
        <option value="Neither likely nor unlikely">4</option>
        <option value="Somewhat likely">5</option>
        <option value="Moderately likely">6</option>
        <option value="Extremely likely">7</option>
      </Select>
    </Page>
  );
};

export default Question1;
