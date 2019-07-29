import React from "react";

import Page from "./Page";

const Instructions = ({ children, prompt }) => (
  <Page prompt={prompt}>
    {children}
  </Page>
);

export default Instructions;
