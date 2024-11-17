import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'
import { useState } from 'react';

function App() {

  // 상품 목록을 넣어둘 state
  // ProductList에서 볼륨양이 적으므로 context 말고 state 사용
  const [list, setList] = useState([]);  //빈 배열->리스트


  return (
    <div className='container'>

       {/* header,footer는 고정 */}
      <Header/>

      {/* 메인을 역할 하는 Router */}
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/list" element={<ProductList list={list} setList={setList}/>}></Route>
                              {/* 위에서 선언한 list,setList를 productlist안에 넣어줌 */}
        <Route path="/detail/:num" element={<ProductDetail list={list}/>}></Route>
                              {/* 파라미터가 바뀜, list보내주기 */}
        <Route path="/*" element={<NotFound/>}></Route>
                  {/* "*" : 위에 전부 거치고 못찾으면 여기로~ */}
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;

// 1. npm i react-router-dom axios 설치
// 2. index-js
// 3. src폴더 내에 폴더2개 생성, 안에 jsx파일6개
// 4. Routes,Route만들기
// 5. App.css 적고 -> 컴포넌트에 적용
// public - best.json
