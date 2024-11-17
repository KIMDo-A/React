import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProductItem = ({item}) => {
  // ProductList에 적은 item가져오기
  console.log('item',item); //객체로 하나씩 넘어옴

  const nav = useNavigate();

  return (
    <div 
      className='product-container'
      onClick={()=>{nav(`/detail/${item.no}`)}}>
        {/* 링크를 할 수 없으니, useNavigate 사용 - ''를 ``로바꾸고 /$ */}
      <img width='100px' src={item.src}></img>
      <h3>{item.title}</h3>
      <span>가격 {item.price}원</span>
    </div>
  )
}

export default ProductItem