import React from 'react'
import { useRef, useState } from 'react'

const Ex07 = () => {

  //DB에서 가져온 정보
  let array = ['큐브','초밥','짜장면','냉면','돈까스']
  const [dataar, setDatar] = useState(['큐브','초밥','짜장면','냉면','돈까스']);
  const inputRef = useRef();

  // 데이터 추가하기
  function addData(){
    //1. 입력받은 데이터를 가져오기
    //inputRef.current.value
    //2. 가져온 데이터를 array에 추가
    //array.push(inputRef.current.value) -> 안됌!
    
    //state로 만들어진 배열에는 push or pop 사용할 수 없다!
    //state로 만들어진 배열에 데이터를 추가할때는 "concat"를 사용해야 한다!!
    //push --> 기존 배열에 데이터를 추가 --> 기존 배열이 바뀐다
    //★concat함수 --> 기존 배열에 데이터를 추가해서 새로운 배열을 생성한다 --> 기존배열은 안바뀜!
    setDatar(dataar.concat(inputRef.current.value))
  }

  // 마지막 데이터 삭제하기
  function delData(){
    //dataar.pop(); -> 안됌!
    //★filter 함수 : 배열에 "조건"을 줘서 새로운 배열을 만들어주는 함수
    //       첫번째 매개변수 : 배열에 있는 하나하나 요소
    //       두번째 매개변수 : (요소각각의) 인덱스
    setDatar(dataar.filter((data,index)=>index != dataar.length-1)) //마지막데이터만 제외하고 출력
  }

  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={addData}>추가</button>
        <button onClick={delData}>삭제</button>
        <ul>
            {/* 
            <li>큐브</li>
            <li>초밥</li>
            <li>짜장면</li>
            <li>냉면</li>
            <li>돈까스</li> 
            */}
            {/* DB에 있는 array값을 가져와서 li로 출력하기 
                <li>{array[0]}</li> => 가능하지만 몇개 있는지 알고?
                또, { } 안에는 for문이 사용 불가능 함!    
                => ★map() : 배열 안에 있는 요소들을 특정 규칙에 맞게끔 바꿔서
                        "새로운 배열"을 만들어 주는 함수      
            */}
            {dataar.map((data)=><li>{data}</li>)}
            {/* 
                => array라는 배열안 하나하나의 요소들을 li구조로 바꿔서 출력
                array = ['큐브','초밥','짜장면','냉면','돈까스']
                array.map = [<li>큐브<li>,
                             <li>초밥<li>,
                             <li>짜장면<li>,
                             <li>냉면<li>,
                             <li>돈까스<li>]
                data : 배열에 있는 하나하나의 요소! 
                    ex) 큐브, 초밥, 짜장면.. 순차적으로 하나씩 들어가서 새로운 배열에 반환
            */}
        </ul>
    </div>
  )
}

export default Ex07