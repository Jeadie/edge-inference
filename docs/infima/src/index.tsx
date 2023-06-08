import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WaitlistProvider from './contexts/WaitlistContext';

ReactDOM.render(
  <React.StrictMode>
    <WaitlistProvider>
      <App />
    </WaitlistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
