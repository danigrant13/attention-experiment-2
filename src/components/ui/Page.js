import React from "react";
import styled from "styled-components";

import {isPresent} from "../../utils/presence";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;


const Prompt = styled.p`
  position: absolute;
  top: 83vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
`;

const Page = ({ children, prompt }) => (
  <Wrapper>
    <Body>
      {children}
    </Body>
    <Prompt>
      {isPresent(prompt) && prompt}
    </Prompt>
  </Wrapper>
);

export default Page;
