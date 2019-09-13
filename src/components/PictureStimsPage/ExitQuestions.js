import React from "react";
import styled from "styled-components";

import {isMissing, isPresent} from "../../utils/presence";
import { setExitQuestions } from "./store";

import Page from "../ui/Page";
import {Button, Form, Input} from "../ui/controls";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
`;

const ExitQuestions = ({ dispatch, handleSubmit }) => {
  const [numXs, setNumXs] = React.useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (isPresent(inputRef.current)) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Page>
      <Wrapper>
        <p>
            How many times did an X appear? <br/>
            Type a number between 0 and 9
        </p>
        <Form>
          <Input ref={inputRef} type="number" min="0" max="9" onChange={e => {
            setNumXs(e.target.value);
            dispatch(setExitQuestions(e.target.value));
          }} />
          <Button onClick={handleSubmit} disabled={isMissing(numXs)}>Submit</Button>
        </Form>
      </Wrapper>
    </Page>
  )
};

export default ExitQuestions;
