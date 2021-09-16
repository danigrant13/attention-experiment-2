import React from "react";

import Page from "../ui/Page";
import {DataContext} from "../../App";
import {Image, ImageWrapper, P, Select} from "./ui";
import DemoB from "../../assets/demo_b.jpg";

import { isPresent } from "../../utils/presence";

const Question4 = ({ onComplete }) => {
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    if (isPresent(answer)) {
      onComplete(answer);
    }
  }, [answer]); // eslint-disable-line

  return (
    <DataContext.Consumer>
      {({state: {negativeLanguage}}) => (
        <Page>
          <ImageWrapper>
            <Image alt='image' src={DemoB} />
          </ImageWrapper>
          <P>
            In this hypothetical scenario, you are asked "Which CU Boulder student do you {negativeLanguage ? 'dis' : ''}trust?".<br />
            If you were to select the red student on the right, which student becomes Player Two?
          </P>
          <Select onChange={e => setAnswer(e.target.value)}>
            <option>Select an option</option>
            <option value="red">the red student</option>
            <option value="blue">the blue student</option>
          </Select>
        </Page>
      )}
    </DataContext.Consumer>
  );
};

export default Question4;
