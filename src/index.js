import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './containers/App/App.js';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById("root"),
  () => {
    console.log("App: Root rendered...");
  }
);
registerServiceWorker();
