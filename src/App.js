import React from 'react';
import { Switch, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import {pathOr} from "ramda";

import WelcomePage from "./components/Welcome";
import InstructionsPage from "./components/InstructionsPage";
import ManipulationCheck from "./components/ManipulationCheck";
import PictureStimsPage from "./components/PictureStimsPage";
import PracticeIntro from "./components/PracticeIntro";
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
  }
`;

export const DataContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'demographics':
      return { ...state, demographics: action.demographics }
    case 'trust-row': 
      return { ...state, trustData: [...state.trustData, action.trustRow] };
    default:
      return state;
  }
};

const initialValues = {
  trustData: [],
};

export const setTrustRow = (trustRow) => ({
  type: 'trust-row',
  trustRow,
});

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialValues);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/instructions/:page" component={InstructionsPage} />
        <Route path="/manipulation-check" component={ManipulationCheck} />
        <Route path="/practice-intro" component={PracticeIntro} />
        <Route path="/trust-games/:page" render={(props) => (
          <PictureStimsPage key={pathOr(null, ["match", "params", "page"], props)} {...props} />
        )} />
        <Route exact path="/thank-you" component={EndingScreen} />
      </Switch>
    </DataContext.Provider>
  );
};

export default App;
