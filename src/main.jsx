import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// The root render is mounting the React application into the page container.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
