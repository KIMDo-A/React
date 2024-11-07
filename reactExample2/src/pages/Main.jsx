import React from 'react'
import {Link, useNavigate} from 'react-router-dom' //Link, useNavigate

const Main = () => {

  /** Link 컴포넌트
   * - 웹페이지에서 링크를 이동하는 태그는 원래 a태그를 사용함
   * - 하지만 a태그는 클릭 시 새로운 페이지를 불러오기 때문에 SPA인 React 적합X
   * - Link 컴포넌트를 사용해서 생김새는 a태그와 같지만 History API를 통해
   *    "브라우저 주소의 경로만" 바꾸는 기능이 내장되어 있다
   * - 이 때 일을 하는 친구가 바로 BrowserRouter
   * 
   * 1) import
   * 2) to라는 필수 속성 => 경로 작성
   */

  /** useNavigate
   * 만약 회원이라면 마이페이지로 이동, 비회원이라면? About페이지로 이동 -> Route이동에 조건식
   * - 페이지 이동을 도와주는 React hooks 
   * - "조건"에 맞게 많이 사용할 수 있음
   * 
   * 1) import => 'react-router-dom'
   * 2) const 변수 = useNavigate()
   * 3) 페이지 이동이 필요할 때 변수("경로")
   * 
   * */
  const nav = useNavigate();

  // 로그인 상태(현재 db와 서버가 없으므로 임시임)
  let auth = true; //->mypage
  //let auth = false; //->about

  return (
    <div>
      Main

      <br/>
      <Link to="/about">About 페이지로 이동</Link>
      {/* to : 나 링크 어디로 걸께~ */}
      <br/>
      <Link to="https://smhrd.or.kr/">SMHRD으로 이동</Link>
      {/* 외부경로 */}
      <br/>
      {/* <button onClick={()=>{nav('/mypage')}}>마이페이지</button> */}
      {/* 마이페이지로 이동! */}
      <button onClick={()=>{
        auth ? nav('/mypage') : nav('about')    
        }}>마이페이지</button>
    </div>
  )
}

export default Main