import React, {useState} from 'react' // 1. 객체 안에 있는 useState 불러오기
import '../App.css'

const Ex01 = () => {

    /* Ex01 학습 목표!
    1) 리액트에서 Event 객체를 사용해보자
    2) 왜 우리는 리액트에서 변수를 사용할 수 없는지 알아보자
    3) 변수를 대체해서 state를 사용해보자.
    */

    /* React Event
    1. html 요소 안에 onClick : camel Case로 작성(앞소문자 뒤 대문자)
    2. onClick={함수} 이때, 함수 뒤에 ()는 붙이지 않는다!
    -> 리액트는 컴포넌트들이 모여있음, 이 컴포넌트들은 각자가 랜더링 되고 있음
    -> () 소괄호는 호출의 의미이므로 무한 호출이 됌
    3. 이 때, 함수는 별도로 만든 함수여도 ok, 안에 바로 함수를 넣는 것도 ok
        - {increase} (O)
        - {()=>{console.log('function')}} (O) => 매개변수를 이용할 때
    4. DOM 요소 안에만 이벤트를 설정 할 수 있다
        - 내가 직접 만든 컴포넌트에는 활용 할 수 없다!!
        -> 하려면 컴포넌트 안 ex)div 에 넣어야 함
    */

    // 변수 : 값은 변하지만 화면에 랜더링되지 않는다.
    let num = 0

    // state : 일반 변수와 다르게 값이 변하면 "화면이 렌더링" 된다.
    // const [state이름, state를 변경시키는 함수] = useState(초기값)
    //        - state 이름 : 변수처럼 활용 가능 (num)
    //        - 대부분 set + state이름을 붙임 (setNum)

    // 1. useState를 import 해온다. => import React, {useState} from 'react'
    // 2. state를 선언한다.
    const [num2, setNum2] = useState(0);

    // 3. state의 값을 변경한다.
    // state를 변경시키는 함수(변경할 값)
    // setNum2(num2+1)

    /** 숫자를 1씩 증가시키는 함수 */
   const increase = () => {
     console.log('increase function')
     num = num + 1; //-> 일반변수 변하지않음!
     // console.log(num)
     setNum2(num2+1)
   }

   /** 숫자를 1씩 감소시키는 함수 */
   const decrease = () => {
    console.log('decrease function')
    setNum2(num2-1)
   }

  return (
    <div className= 'div-center'>
        <h1>{num2}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex01