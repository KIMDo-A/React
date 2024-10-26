import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 사용자 정의태그 App을 가져옴~
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // 화면에 보여주겠다
  // <React.StrictMode> : 리액트 프로젝트 안전검사 -> 2번 실행되므로 지우기~
    <App />
    // 사용자 정의태그(=컴포넌트)
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
