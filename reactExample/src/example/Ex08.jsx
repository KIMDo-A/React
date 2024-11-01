import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const Ex08 = () => {

  const inputRef = useRef();

  /*
  todos 배열
  todo
  - content : 내용
  - completed : 완료여부(t/f)
  - num : 글의 고유번호
  */

  const [todos, setTodos] = useState([{  // object형태{ }
    content : "물 마시기",
    completed : false,
    num : 1 //고유값
  }]);

  /** 스프레드 문법 (spread)
   * ...객체 : 객체를 새로 만들어 값을 넣어주는 "복사"를 진행
   * map함수를 사용할때, 기존값을 두고 누적시켜야 할때 사용
  */

  /** todos 리스트 내에 새로운 todo를 추가하는 것 */
  const handleNewTodoAdd = () => {
    //2. 내가 입력한 내용을 콘솔창으로 확인
    console.log('새로운 todo : ' ,inputRef.current.value) //input에 입력한 값이 출력
    setTodos([...todos,{ // object형태 + map은 배열함수이므로 array형태
      //...todos : 내가 갖고 있는 객체(todos)에 복사한 다음 그 뒤 내용 쌓기!
      content : inputRef.current.value,
      completed : false,
      num : todos.length+1
      // 중복되지 않도록! ex) 6자리 코드 생성기
    }])
    // 입력칸 비우기
    inputRef.current.value = "";
  }

  /** 체크 버튼을 클릭했을 때, 할일을 완료 상태로 바꾸고 밑줄을 그어준다. */
  const handleTodoCompleted = (num) => {
    console.log('completed function',num) // completed function 2

    // (변화할 때) 복사본 만들기 todos -> newTodos
    const newTodos = [...todos]
    
    // = 받아온 숫자가 배열에 몇번째인지
    let idx = newTodos.findIndex(item => item.num == num); 
    // todos배열안에서 인덱스를 찾겠다! (배열은 인덱스로 접근해야하므로)
    // item의 num과 받아온 num이 같은지
    console.log('idx', idx) // idx 1
    // todos[idx].completed = true;
    newTodos[idx].completed = !newTodos[idx].completed; //반대
    console.log(todos)
    setTodos(newTodos)
  }

  /** 선택한 todo를 삭제하는 함수*/
  const handleTodoDelete = (num) => {
    console.log('delete function')

    // (변화할 때) 복사본 만들기 todos -> newTodos
    const newTodos = [...todos]
    let idx = newTodos.findIndex(item => item.num == num);
    console.log('idx', idx)
    // 배열함수 : splice(원본 배열에 새로운 요소를 추가하거나, 삭제하거나, 교체한 배열을 반환하는 함수)
    // 배열.splice((어디서부터)변경을시작할idx, (몇개)제거할수, 추가할내용)
    newTodos.splice(idx,1)
    setTodos(newTodos)
  }

  //useEffect : state값이 바뀌고난 직후 특정 로직을 실행시키고 싶을 때
  useEffect(()=>{
    // 입력칸에 커서 깜빡이기
    inputRef.current.focus();
  },[])

  return (
    <div>
        <h1>2024 올해는 꼭 해봅시당!</h1>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleNewTodoAdd}>계획추가!</button>
        <h1>ToDoList</h1>
        <ul>
          {/*1. 내가 가진 배열을 map함수를 사용해 화면에 렌더링 */}
          {todos.map((item)=>(
            <li key={item.num}>
              {/*map함수를 사용해서 반복할꺼면 이 요소들의 "고유한" 값 넣기 -> 식별자 num */}
              <input type='checkbox' onChange={()=>{handleTodoCompleted(item.num)}}></input>
              <label 
                style={{
                  textDecoration : item.completed? 'line-through' : 'none'
                  // 내가 가지고 있는 item이 true면 밑줄, false면 X
                }}
              > 
              {/* 위에 있는 checkbox의 영향을 받기 위해서 label태그 사용 */}
                <span>{item.content}</span>
              </label>
              <button onClick={()=>{handleTodoDelete(item.num)}}>삭제</button>
            </li> //물 마시기
          ))}
          {/* todos에 있는것 map으로 돌려줄께 매개변수로 todos안에 있는 데이터 가져옴*/}
        </ul>
    </div>
  )
}

export default Ex08