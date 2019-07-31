import React from "react";
import styled from "styled-components";
import Page from "../ui/Page";

import {isMissing, isPresent} from "../../utils/presence";
import { setExitQuestions } from "./store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
`;

const Input = styled.input`
  height: 35px;
  border-radius: 0;
  margin-right: 15px;
`;

const Button = styled.button`
  background-color: #009CBB;
  border: none;
  padding: 9px 28px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover, &:focus {
    background-color: #008CBA;
  }

  &:disabled {
    background-color: #6699CC;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExitQuestions = ({ currentPage, dispatch, handleSubmit }) => {
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
        <Form onSubmit={handleSubmit}>
          <Input ref={inputRef} type="number" min="0" max="9" onChange={e => {
            setNumXs(e.target.value);
            dispatch(setExitQuestions(e.target.value));
          }} />
          <Button disabled={isMissing(numXs)} type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </Page>
  )
};

export default ExitQuestions;
