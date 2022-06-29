import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.context';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
