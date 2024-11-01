import React, { useRef, useState } from 'react'
import Ex09SubItem from '../components/Ex09SubItem'


const Ex09 = () => {

    /**
     * 부모요소 => 자식요소에게 값을 전달? props
     * 자식요소 => 부모요소에게 값을 전달? 불가, props를 이용한 꼼수 사용
     */

    const [pText, setPText] = useState(''); //부모
    const [cText, setCText] = useState(''); //자식
    
    // 자식 -> 부모로 데이터 넘기기 => 금고만들기!
    // (props는 함수도 넘길 수 있음)
    /** Ex09.jsx(상위)에서 사용하는 함수 */
    const changeData = (e) => {
        // 매개변수 e : 자식에게서 받아옴
        console.log('change Data', e.target.value)
        setCText(e.target.value)
    }

  return (
    <div>
        <h1>컴포넌트끼리 값 전달을 해보자!</h1>
        <p>
            <span> 1-1. 상위에서 입력 : </span>
            <input type='text' onChange={(e)=>{
                console.log('onChange', e.target.value)
                // 변화하는 내용 보기
                setPText(e.target.value)
            }}/>
        </p>

        {/* 하위컴포넌트 */}
        <Ex09SubItem text={pText} changeData={changeData}/>
        {/* 자식에게 데이터 전달!! */}

        <p>
            <span> 2-2. 상위에서 입력받은 값은 {cText}입니다. </span>
        </p>
    </div>
  )
}

export default Ex09