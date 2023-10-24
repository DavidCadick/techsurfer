import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Post from './Post';
import TopBar from './TopBars'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TopBar />
    <Post />
    <Login />
  </React.StrictMode>
);


reportWebVitals();
