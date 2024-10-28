import React, {useState, useEffect} from 'react'

const Ex05 = () => {
    // useEffect --> state값이 바뀌고난 직후 특정 로직을 실행시키고 싶을 때
  const [num, setNum] = useState(0);

  // num 값이 10이 된다면 alert을 띄우고 싶습니다!!
  // state가 변동됨에 따라서 실행되어지는 함수!!!
  useEffect(()=>{
    // state 값을 통해서 로직을 작성할 수 있다!!
    console.log(num);
    if (num == 10) {
      alert('num이 10입니다!!');
    }
  })

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>+</button>
    </div>
  )
}

export default Ex05