import React from 'react';
import ReactDOM from 'react-dom/client';
// Fonts and icons are bundled with the site instead of loaded from Google Fonts / cdnjs,
// so the page never waits on third-party hosts (which some networks block).
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import App from './App';
import { signalReady } from './boot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

signalReady();

