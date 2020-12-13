import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// I've decided to leave strict mode enabled for development.
// As new developers we may make life cycle mistakes. 
// Strict mode is good for calling that out.
// https://reactjs.org/docs/strict-mode.html


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);