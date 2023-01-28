import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider autoHideDuration={3500}>
    <App />
  </SnackbarProvider>
);


