import React, { useContext } from "react";

import Page from "../ui/Page";
import {DataContext} from "../../App";
import {Image, ImageWrapper, P, Select} from "./ui";
import DemoB from "../../assets/demo_b.jpg";
import DemoBBB from "../../assets/demo_b_bb.png";

import { isPresent } from "../../utils/presence";

const Question4 = ({ onComplete }) => {
  const { stimRandomizer } = useContext(DataContext);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    if (isPresent(answer)) {
      onComplete(answer);
    }
  }, [answer]); // eslint-disable-line

  const isBoxes = stimRandomizer.name === 'blackBoxes';

  return (
    <Page>
      <ImageWrapper>
        <Image alt='image' src={isBoxes ? DemoBBB : DemoB} />
      </ImageWrapper>
      <P>
        In this hypothetical scenario, you are asked "Which&nbsp; 
        {isBoxes ? 'black box '  : 'CU Boulder student '}
        do you select?". <br />
        If you were to select the&nbsp;
        {isBoxes ? 'black box on the right with diagonal lines, which black box would be given your money?'  : 'red student on the right, which student becomes Player Two?'}
      </P>
      <Select onChange={e => setAnswer(e.target.value)}>
        <option>Select an option</option>
        <option value="right">{isBoxes ? 'the right diagonal line box' : 'the red student'}</option>
        <option value="left">{isBoxes ? 'the left grid box' : 'the blue student'}</option>
      </Select>
    </Page>
  );
};

export default Question4;
