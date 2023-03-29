import { createRoot } from 'react-dom/client';
import * as React from 'react';
import './styles.css';
import App from './App';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
