import React from "react";
import styled from "styled-components";
import {head, last} from "ramda";

import {isPresent} from "../../utils/presence";

import Page from "./Page";

const Images = styled.div`
  display: flex;
  justify-content: center;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")}

  & > *:not(last-child) {
    margin-right: 15px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  height: 375px;
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
