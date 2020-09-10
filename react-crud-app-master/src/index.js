import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'fomantic-ui-css/semantic.min.css';
import './index.css';
import { ContactContextProvider } from './context/contact-context';

ReactDOM.render(
  <ContactContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContactContextProvider>,
  document.getElementById('root'),
);
