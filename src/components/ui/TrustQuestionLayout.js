import React from "react";
import styled from "styled-components";
import {head, last} from "ramda";

import {isPresent} from "../../utils/presence";

import Page from "./Page";

const Images = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")}
  flex: 1;
`;

const Player1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 375px;
  height: 280px;
`;

const P = styled.p`
  font-size: 24px;
  padding: 1rem;
`;

const Box = styled.div`
  padding: 0.5rem;
  border: 1px solid #fff;
  margin-bottom: 15px;
`;

export const TrustQuestionLayout = ({ images, dollarAmounts, prompt, showLeft, showRight }) => (
  <Page prompt={prompt}>
    <Images>
      {isPresent(images) && (
        <>
          <ImageWrapper visible={showLeft}>
            <Box>{dollarAmounts[0]}</Box>
            <Image src={head(images)} />
          </ImageWrapper>
          <Player1Wrapper visible={true}>
            <Box>{dollarAmounts[1]}</Box>
            <P>You</P>
          </Player1Wrapper>
          <ImageWrapper visible={showRight}>
            <Box>{dollarAmounts[2]}</Box>
            <Image src={last(images)} />
          </ImageWrapper>
        </>
      )}
    </Images>
  </Page>
);

export default TrustQuestionLayout;
