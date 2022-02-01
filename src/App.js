import React from 'react';
import { Switch, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import {pathOr} from "ramda";

import { coinFlip, sampleWithoutReplacement, shuffle } from "./utils/random";
import imageStims from './data/imageStims'
import ExperimentIntro from "./components/ExperimentIntro";
import WelcomePage from "./components/Welcome";
import InstructionsPage from "./components/InstructionsPage";
import ManipulationCheck from "./components/ManipulationCheck";
import ParticipantNumberPage from "./components/ParticipantNumberPage";
import PictureStimsPage from "./components/PictureStimsPage";
import PracticeIntro from "./components/PracticeIntro";
import PracticeLetters from "./components/PracticeLetters";
import PracticeTrust from "./components/PracticeTrust";
import EndingScreen from "./components/EndingScreen";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #808080;
    color: #fff;
    text-align: center;
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-size: 18px;
  }

  p {
    font-size: 24px;
    margin: 15px 0px;
  }
`;

const lettersNoX = [
  'A','B','C','D','E',
  'F','G','H','I','J',
  'K','L','M','N','O',
  'P','Q','R','S','T',
  'U','V','W','Y','Z'
];

const randomLetters = () => {
  let xToAdd = [];
  let withXLetters = shuffle(lettersNoX);
  if (Math.random() <= 0.2) {
      xToAdd = sampleWithoutReplacement([['X'], ['X', 'X']], 1)[0];
  }
  withXLetters = sampleWithoutReplacement(withXLetters, 20);
  xToAdd.forEach(function() { withXLetters.shift() });
  return shuffle(withXLetters.concat(xToAdd));
};

// GET a random image stim from faces, blurryFaces, or blackBoxes
const IMAGE_STIMS = imageStims[1];//Math.floor(Math.random() * 3)]; #0 = clear faces, 1 = blur faces, 2 = black boxes

const PAGES = [];
for (let i = 0; i < 28; i++) {
  PAGES.push({
    images: IMAGE_STIMS.getSample(),
    letters: randomLetters(),
    letterPosition: (coinFlip() ? "<" : ">"),
  })
};

export const DataContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'trust-row': 
      return { ...state, trustData: [...state.trustData, action.trustRow] };
    case 'manipulation-check':
      return { ...state, manipulationCheck: action.answers };
    case 'participant-number':
      return { ...state, participantNumber: action.participantNumber };
    default:
      return state;
  }
};

const initialValues = {
  negativeLanguage: false,
  stimType: IMAGE_STIMS.name,
  trustData: [],
  manipulationCheck: {},
};

export const setTrustRow = (trustRow) => ({
  type: 'trust-row',
  trustRow,
});

export const setManipulationCheck = (answers) => ({
  type: "manipulation-check",
  answers,
});

export const setParticipantNumber = (participantNumber) => ({
  type: 'participant-number',
  participantNumber,
});

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialValues);

  return (
    <DataContext.Provider value={{ state, dispatch, pages: PAGES, stimRandomizer: IMAGE_STIMS }}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ParticipantNumberPage} />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route path="/instructions/:group/:page" render={(props) => (
          <InstructionsPage key={pathOr(null, ["match", "params", "page"], props)} {...props} />
        )} />
        <Route path="/manipulation-check" component={ManipulationCheck} />
        <Route path="/experiment-intro" component={ExperimentIntro} />
        <Route path="/practice-intro" component={PracticeIntro} />
        <Route path="/practice-letters" component={PracticeLetters} />
        <Route path="/practice-trust" component={PracticeTrust} />
        <Route path="/trust-games/:page" render={(props) => (
          <PictureStimsPage key={pathOr(null, ["match", "params", "page"], props)} {...props} />
        )} />
        <Route exact path="/thank-you" component={EndingScreen} />
      </Switch>
    </DataContext.Provider>
  );
};

export default App;
