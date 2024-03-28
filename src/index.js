import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Components/Rexstore/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>
);

