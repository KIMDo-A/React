import React, {useContext} from 'react'
import {NumContext} from '../../example/Ex11'

const Left03 = () => {

  //4. 데이터 요청하기 - useContext : 공유 저장소에 접근 가능
  // 공유 저장소로부터 데이터 꺼내기
  // 공유 저장소가 여러개일수도 있으므로, ()안에 어떤 공유 저장소인지 명시, import
  const data = useContext(NumContext)
  // {
  //   num : num,
  //   setNum : setNum
  // }

  return (
    <div>
        <span>{data.num}</span>
    </div>
  )
}

export default Left03