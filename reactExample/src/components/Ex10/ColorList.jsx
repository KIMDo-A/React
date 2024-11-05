import React, { useContext } from 'react'
import { ColorContext } from '../../context/ColorContext';

const ColorList = () => {

    //리액트에서 반복해야할 때, 배열 만들어서 map사용
    let color = ['red', 'orange', 'yellow', 'green', 'blue'];

    //4. 데이터 요청 useContext
    const {setChoiceColor} = useContext(ColorContext);
    //제가 쓰고싶은 돈(state)은 colorcontext(계좌)에 들어있음

  return (
    <div style={{display:'flex'}}>

      {/* 화면에 띄우기 */}
      {color.map(item =>
          <div 
          onClick={()=>{setChoiceColor(item)}}
          //내가 누른 그것(=item)을 매개변수로 넘겨주겠다
          //이제 choiceColor에 선택한 item이 들어있음!!
          key={item}
          style={{
            width : '100px',
            height : '100px',
            backgroundColor : item
          }}></div>
      )}
       
     



    </div>

  )
}

export default ColorList