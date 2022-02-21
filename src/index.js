import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// styles
import GlobalStyle from './Global.style';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

