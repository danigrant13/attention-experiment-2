import React from "react";
import {withRouter} from "react-router-dom";

import useKeyPress from "../hooks/useKeyPress";

import Instructions from "./ui/Instructions";

const Welcome = ({history}) => {
  useKeyPress([], () => {
    history.replace("/instructions/0");
  });

  return (
    <Instructions prompt="Press any key to continue">
      <p>Welcome to the Experiment!</p>
    </Instructions>
  )
};

export default withRouter(Welcome);
