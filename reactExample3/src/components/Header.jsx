import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='header-container'>

      <div className='link-container'>
        <Link to='/'>camelCase</Link>
        {/* 로고(camelCase)를 눌렀을 때 메인페이지로 이동 -> 그러므로 / */}
      </div>

      <div className='link-container'>
        <Link to='/list'>상품리스트</Link>
        {/* App.js에서 /list는 ProductList로 지정했었음 */}
      </div>

      <div>로그인 회원가입</div>

    </div>
  )
}

export default Header