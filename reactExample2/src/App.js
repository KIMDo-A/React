import './App.css';
import {Routes, Route} from 'react-router-dom' //Routes, Route
import Main from './pages/Main'; //페이지 가져오기
import About from './pages/About';
import MyPage from './pages/MyPage';
//import NotFound from './pages/NotFound';
import Product from './pages/Product';

function App() {

  /** React Router
   *  - 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 역할
   * 
   * 1) React Router 설치
   *  - npm i react-router-dom
   * 
   * 2) BrowserRouter 
   *  - 브라우저 안에 있는 url를 수정해줌 -> 실질적으로 페이지를 요청 -> 가장 상단에 있어야함
   *  - App 전체를 감싸줘야 함
   *  - 보통은 index.js로 이동해서 App을 BrowserRouter로 감싸준다.
   *  - 브라우저의 주소를 감지하는 역할★ 매우 중요!!
   * 
   * 3) 내가 이동할 페이지들을 준비
   *  - src-pages
   * 
   * 4) Routes - Route
   *  - Routes(복수) : 여러 Route(경로)를 감싸서 가지고 있다가, 
   *                   사용자가 요청한 조건에 맞는 Route가 있을 때, 그 Route를 랜더링해준다. 
   *                   => 실질적으로 일함 Route들을 갖고 있다가 꺼내줌
   *                   과거에는 Routes가 Switch라는 이름으로 사용했었음
   *  - Route(단수) : 여러 Route (경로)
   *  - Route 필수 속성 2가지 : path, element
   *      * path(경로) : 사용자가 이렇게 url을 "요청"했을 때 ~
   *      * element(컴포넌트) : 어떤 컴포넌트를 보여줄 것인가? "응답"
   * 
   */
  return (
    <div>
      {/* header, 로고, sideBar와 같이 고정되어있는 것들은 Route밖에! */}
      <h1>React Router 학습하기</h1>

      {/* 4. Routes,Route */}
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        {/* 너가 /라고 요청할때, 나는 Main으로 응답해줄께 */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<Product/>}></Route>
        {/* 뒤에 숫자를 붙이면 num이라는 변수에 담아줄께 */}
      </Routes>

    </div>
  );
}

export default App;
