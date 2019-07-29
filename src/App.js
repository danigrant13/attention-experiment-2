import React from 'react';
import { Switch, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components";

import WelcomePage from "./components/Welcome";
import InstructionsPage from "./components/InstructionsPage";
import PictureStimsPage from "./components/PictureStimsPage";

const GlobalStyle = createGlobalStyle`
  body {
      background-color: #808080;
      color: #fff;
      text-align: center;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/instructions/:page" component={InstructionsPage} />
      <Route path="/trust-games/:page" component={PictureStimsPage} />
    </Switch>
  </>
);

export default App;
