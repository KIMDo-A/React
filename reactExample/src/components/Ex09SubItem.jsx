import React from 'react'

const Ex09SubItem = ({text, changeData}) => {
  return (
    <div>
        <p>
            <span>1-2. 하위 컴포넌트에서 입력받은 값은 {text}입니다.</span>
        </p>

        <p>
            <span>2-1. 하위에서 입력 : </span>
            <input type='text' onChange={changeData}/>
        </p>
    </div>
  )
}

export default Ex09SubItem