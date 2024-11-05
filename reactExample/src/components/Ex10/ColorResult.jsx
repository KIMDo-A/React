import React, {useContext, useState} from 'react'
import { ColorContext } from '../../context/ColorContext'

const ColorResult = () => {

  //4. 데이터 요청 useContext
  const {choiceColor} = useContext(ColorContext);

  return (
    <div>
       <div style={{
          width : '100px',
          height : '100px',
          backgroundColor : choiceColor
      }}></div>
    </div>
  )
}

export default ColorResult