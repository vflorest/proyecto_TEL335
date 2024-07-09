import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Use the App component */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);