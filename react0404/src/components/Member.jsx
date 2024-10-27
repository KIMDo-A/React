// 세번째) 비구조화할당
import React from 'react'

/*
우리는 기존에 props 라는 객체를 받아와서, props 안에 있는 속성 값을 꺼내서 사용했는데,
=> props <- 앞에 붙어서 반복되는게 귀찮음
=> 비구조화할당 !!
=> 객체 안에 있는 값을 추출해서 변수로 바로 선언해 줄 수 있는 개념

props 라는 객체대신, 안에 있는 속성을 꺼내서 사용
기존 : (props)
        props.name <- 호출

바뀐 문법 : ({name, team})
          name <- 호출
*/

const Member = ({name, team}) => {
  
  return (
        <div>
            <p>{team}</p>
            <p>{name}</p>
        </div>
  )
}

export default Member

// 두번째) components, props이용
// rafce + Enter
// import React from 'react'

// const Member = (props) => {
  
//   console.log('member props', props) //{name: '김도아', team: '또아팀'}
//   return (
//         <div>
//             <p>{props.team}</p>
//             <p>{props.name}</p>
//         </div>
//   )
// }

// export default Member

// 첫번째) 직접 함수 만들기
// const Member = () => {
//     return(
//         <div>
//             <p>김도아팀</p>
//             <p>김도아</p>
//         </div>
//     )
// }

// export default Member;