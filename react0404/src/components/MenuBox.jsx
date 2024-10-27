const MenuBox = (props) => {
    // 함수에서 값을 받아올 수 있는 유일한 통로는 매개변수
    // 모든 데이터는 props에 담겨 있음!
    // props는 객체 / temp, name,price는 속성
    console.log('menu props', props) // {name: '민트초코'}
    return(       
      <div>
        <p>{props.temp} {props.name}</p>
        {/* 민트초코 */}
        <p>{props.price}원</p>
      </div>
        // 선물을 쌈
    )
}

export default MenuBox;
// 선물 줌
// 스케치북 만듬

// 컴포넌트 만들기 전~
// import React from 'react'

// const MenuBox = () => {
//   return (
//     <div>
//         <p>아메리카노</p>
//         <p>3500원</p>
//     </div>
//   )
// }

// export default MenuBox