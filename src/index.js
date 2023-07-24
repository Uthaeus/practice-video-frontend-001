import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.scss';
import App from './App';

import UserContextProvider from './store/user-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

