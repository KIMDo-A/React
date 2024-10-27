import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

//=====================[STEP 1. state관리]=======================
// 1) useState개념
//import App from './example/Ex01'

// 2) useState를 활용해 좋아요 실습을 해보자!
import App from './example/Ex02'








import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
