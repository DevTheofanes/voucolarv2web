import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import DotEnv from 'dotenv';

DotEnv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);