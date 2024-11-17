import React, { useEffect } from 'react'
import axios from 'axios';
import ProductItem from '../components/ProductItem';

const ProductList = ({list, setList}) => {
    //App.js에있는 상품목록 변수 가져오기
    console.log('list', list) //가져온 리스트 확인하기

  /** 누군가가 상품 리스트 페이지를 열었을 때, 
      best 상품에 대한 정보를 가져오게 하겠다. -> 비동기적인통신으로
   * 
   * 1) '화면이 렌더링 된 직후'에 -> useEffect
   * 2) http://localhost:3000/best.json에 있는 정보를 받아오겠다. => axios
   *    // public에 넣었었음 -> best.json
   * 3) 받아온 내용을 console창에 띄워보자. 
   * 
   */

    useEffect(()=>{
      /** React의 public 폴더는 서버와 통신하고 있는 폴더
       * 그래서 public 폴더에 정적인 파일을 업로드하면 /폴더/파일명.확장자
       * 이렇게 url로 들어가서 확인할 수 있다.
       *  ->  http://localhost:3000/best.json
       */

      let url = 'http://localhost:3000/best.json';
      //axios.get(url).then(res=>(console.log(res.data.list)))
      axios.get(url).then(res=>{setList(res.data.list)}) //App.js에있는 변수 가져오기 -> ex)props를매개변수안  

      /* 내가 가져온 list는 list, item, detail 에 쓰일 중요한 데이터임
        이거 하나만 쓰는데 context는 너무큼
        => context 쓸 방법이 있음
        => 볼륨이 너무 작을 때는 가장 상단인 App.js에 state관리 
      */

    },[])

  return (
    <div className='list-container'>
      {list.map(item=>(
        <ProductItem key={item.no} item={item}/>
      ))}
      {/* 매개변수를 통해 변수 가져온 list 배열[] 을 map으로 돌리고
          item 전부 꺼내면 숫자(no)만큼 ->그 아이템 꺼내기/ item통으로 빼주기
          props사용 item={item}, item은 객체{ }로 보내기
      */}

    </div>
  )
}

export default ProductList