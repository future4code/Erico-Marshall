import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Globalstyle} from "./global";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Globalstyle/>
  </React.StrictMode>,
  document.getElementById('root')
);