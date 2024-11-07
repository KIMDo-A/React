import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom' //BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //2. BrowserRouter 감싸기
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
