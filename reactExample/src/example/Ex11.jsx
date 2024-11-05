import React, {createContext, useState} from 'react'
import Left01 from '../components/Ex11/Left01'
import Right01 from '../components/Ex11/Right01'

//1. 공유 저장 공간(=계좌) 생성 --> createContext
//->하위컴포넌트들이 접근할 수 있음
//위에서 import, 다른 곳에서도 사용할 수 있도록 export
export const NumContext = createContext();

const Ex11 = () => {

  //num(=돈) --> Left03에서 출력
  //원래 props를 사용해서 01->02->03
  const [num, setNum] = useState(0);

  return (
    <div>
        <h1>Context API 사용하기!</h1>
        {/* 
        //3. Provider(행원)로 감싸기
        NumContext.Provider★ : 하위 컴포넌트에 공유값(value)을 사용할 수 있도록 허용하겠다(=행원)
        value : 실제로 공유 되어질 값
        Left01(->02->03), Rignt01(->02->03)에게!
        {{}} : 데이터를 한꺼번에 보낼 수 있는 객체로 만들기 key:value
        */}
        <NumContext.Provider value={{num : num, setNum : setNum}}>
            <Left01/>
            <Right01/>
        </NumContext.Provider>

        <button onClick={()=>{setNum(num+1)}}>Ex11Plus</button>
        {/* 테스트용! */}
    </div>
  )
}

export default Ex11