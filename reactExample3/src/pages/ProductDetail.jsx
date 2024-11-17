import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' // useParams 호출


const ProductDetail = ({list}) => {
              // 매개변수에 list받기

  let {num} = useParams();
  // App.js에서 <Route path = '/detail/:num'
  console.log('클릭한 상품의 번호', num)

  //console.log('detail에 받아온 list', list)
  console.log('detail에 받아온 list', list.find(item => item.no == num)) // 하나의 객체
  // findindex와비슷 한 리스트 안에서 찾을꺼야 내가 가진아이템중에서 넘버값이 num과 같은 값가져오기

  const [obj, setObj] = useState({})
  // 여기에 바로 setObjX 이 함수는 계속 실행되고있음 그러므로 특정시점에만 변경되도록
  // -> 리스트의 값이 바뀔때! 들어오도록

  useEffect(()=>{
    setObj(list.find(item => item.no == num))
    
  },[list])
  // list받아오는데 성공 할때, 값을 바꿔주겠다

  console.log('obj', obj)

  return (
    <div className='list-container'>
      <div className='detail-item'>
        <img src={obj.src} width='250px'></img>
        <h3>{obj.title}</h3>
        <p>
          <span>가격 : {obj.price}</span> {" "}
          {obj.delivery == "free"
          ?<span>배송비 무료</span> 
          :<span>배송비 {obj.delivery}</span>
          }
        </p>
      </div>
    </div>
  )
}

export default ProductDetail