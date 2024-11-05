import React, { useContext } from 'react'
import { NumContext } from '../../example/Ex11';

const Right03 = () => {

  //4. 데이터 요청하기 - useContext
  // +버튼 클릭시 setNum을 이용해야 한다!
  // setNum을 꺼내서 버튼이 눌렀을 때 1증가하게끔 만들어주세요!
  const data = useContext(NumContext);
  // 공유하는 공간에 접근해서 value값을 꺼내옴
  // data에 value={{num : num, setNum : setNum}}

  return (
    <div>
        <button onClick={()=>{data.setNum(data.num+1)}}>+</button>
    </div>
  )
}

export default Right03