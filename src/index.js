import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

const Router = (process.env.NODE_ENV === 'development' ? BrowserRouter : MemoryRouter)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
