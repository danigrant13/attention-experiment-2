import React from "react";
import styled from "styled-components";
import {head, last} from "ramda";

import {isPresent} from "../../utils/presence";

import Page from "./Page";

const Images = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")}
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const HiddenBox = styled.div`
  padding: 0.5rem;
  visibility: hidden;
`;

const Image = styled.img`
  width: 375px;
  height: 280px;
`;

const Letter = styled.p`
  font-size: 75px;
  margin: 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")}
`;

export const PictureStim = ({ body, images, letter, letterPosition, prompt, showImages, showLetter }) => (
  <Page prompt={prompt}>
    <Images visible={showImages}>
      {isPresent(images) && (
        <>
          <ImageWrapper>
            <Letter visible={showLetter && letterPosition === "<"}>{letter}</Letter>
            <Image src={head(images)} />
          </ImageWrapper>
          <HiddenBox>$1.00</HiddenBox>
          <ImageWrapper>
            <Letter visible={showLetter && letterPosition === ">"}>{letter}</Letter>
            <Image src={last(images)} />
          </ImageWrapper>
        </>
      )}
    </Images>
  </Page>
);

export default PictureStim;
