import React, { createContext, useState } from 'react'
import ColorList from '../components/Ex10/ColorList'
import ColorResult from '../components/Ex10/ColorResult'
import { ColorContext } from '../context/ColorContext' //2. context import

const Ex10 = () => {

    /** 
     * Context란? 리액트 컴포넌트끼리 주고받는 값을 전역적으로 공유할 수 있게 하는 API 
     * 
     * Q. props로만 데이터를 전달했을 때 발생할 수 있는 문제?
     * A. 깊숙히 위치한 컴포넌트에 데이터를 전달할 경우
     *    여러 컴포넌트를 연달아서 props 설정 => 불편하고 실수가 잦음
     *    => 이러한 현상을 Props Drilling이라고 부른다. 
     * 
     * 그래서 Context로 상태를 전역적으로 관리해준다.
     * 
     * 만드는 순서!
     * 1) context 를 만들어준다. (계좌) => createContext
     *      -> context - ColorContext.js
     * 2) context import 해주기
     * 3) ★Provider로 감싸준다 (행원) -> 데이터를 주고받을수있도록 해줌
     * 4) "나 데이터 필요해" 요청 = useContext
     * 
     * */

    //내가 전역적으로 사용해줄 state를 정의 (Provider가 있는 위치에서)
    //하위컴포넌트에서 사용할 변수 = 돈 (->돈이 있어야 계좌에 넣을 수 있음!)
    const [choiceColor, setChoiceColor] = useState('red')

  return (

    <div>
      {/* 3. Provider로 감싸기 */}
      <ColorContext.Provider value={{choiceColor, setChoiceColor}}>
           <h1>색상 변경하기</h1>
            <p>원하는 색상을 클릭하세요.</p>
            <ColorList/>
            <hr/>
            <p>선택하신 색상입니다.</p>
            <ColorResult/>
      
      </ColorContext.Provider>
    </div>
  )
}

export default Ex10