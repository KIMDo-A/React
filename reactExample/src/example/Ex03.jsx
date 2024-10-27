import React from 'react'
import '../App.css'
import { useState } from 'react'

const Ex03 = () => {

  // 랜덤게임을 만들어보자.  
  // 랜덤하게 컴퓨터가 생성해주는 숫자 : ranNum state 생성
  // 내가 누른 버튼의 숫자 : inputNum state 생성
  // 버튼을 눌렀을 때 실행할 함수 : btnCk 함수 생성

  // STEP 1) 랜덤한 숫자를 뽑아준다. => ranNum에 적용
  // STEP 2) 사용자가 누른 버튼의 내용을 감지해서 inputNum에 적용
  // STEP 3) ranNum와 inputNum를 비교해서, 같다면 "정답입니다~" / 아니면 "땡!"

  const [ranNum, setRanNum] = useState('');
  const [inputNum, setInputNum] = useState('');

  const btnCk = (e) => {
    // 내가 누른 그 요소는 매개변수를 통해 알 수 있음!

    // console.log('btnCk function')

    //랜덤한 수
    //console.log('ranNum', Math.random()) //0.7459194234682192
    //Math.random() : 0 ~ 1
    //console.log('ranNum', Math.random()*3) //2.252751305449548
    //console.log('ranNum', parseInt(Math.random()*3)) //0,1,2
    console.log('ranNum', parseInt(Math.random()*3)+1) //1,2,3 
    setRanNum(parseInt(Math.random()*3)+1)

    // 내가 선택한 수
    //console.log('inputNum', e)
    //console.log('inputNum', e.target) //<button>3<button>
    console.log('inputNum', e.target.innerText) //3
    setInputNum(e.target.innerText)
  }

  return (
    <div className='div-center'>
      <h1>⚽랜덤게임⚽</h1>
      <div>
        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>
        {/* 복수 클릭 Alt + Click */}
      </div>

      <div>
        <hr/>
        <span>내가 누른 숫자 : {inputNum}</span>
        <br/>
        <span>컴퓨터 숫자 : {ranNum}</span>
        <br/>

        {/* ranNum과 inputNum의 비교는 이곳에서 할 것 => 삼항연산자! */}
        {ranNum == inputNum 
        ?
        <span>정답입니다~</span> 
        :
        <span>땡!</span>
        }

      </div>
    </div>
  )
}

export default Ex03