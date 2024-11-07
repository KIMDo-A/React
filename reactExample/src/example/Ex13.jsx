import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Ex13 = () => {

  /**
   * 예제) 화면에 실시간으로 날씨를 띄워보자
   * 
   * 1) url을 선언하자
   * 2) 화면이 렌더링 된 직후(->useEffect), 해당 url에 비동기적 통신을 해서 데이터를 가져오자
   *  - useEffect, axios
   * 3) 데이터를 가져오는데 성공했다면, 해당 데이터들을 화면에 반영시켜보자
   *  - 기온 : 켈빈온도 - 273 => 섭씨온도
   *  - 구름 : 0~30 맑음 / 31~60 약간 흐림 / 61~흐림
   * 4) 다 된 사람들을 단톡방에 완료 체크 후, 디자인을 자유롭게~
   *  
   * warning!!
   * (1) import하기
   * (2) 데이터를 꼭 console창에 천천히, 한단계씩 출력해보고 접근하기
   */

  let url = 'https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=603aa562f93c1b6e5fb4e7596aa820d5';

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [cloud, setCloud] = useState('');

  useEffect(()=>{ //화면이 랜더링 된 직후

    axios.get(url).then(res=>{
       // res는함수를 통해 받아온 매개변수! -> 전역적으로 사용하기 위해서 보관하는 state사용
      console.log(res.data) //데이터 확인 용도
      console.log(res.data.name) //도시의 이름
      setCity(res.data.name)
      console.log(res.data.main.temp) //현재 온도
      setTemp(parseInt(res.data.main.temp-273))
      console.log(res.data.main.feels_like) //체감 온도
      setFeelsLike(parseInt(res.data.main.feels_like-273))

      console.log(res.data.clouds.all) //구름의 양
      if(res.data.clouds.all <=30){
        setCloud('맑음')
      }else if(res.data.clouds.all >30 && res.data.cloud.all <=60){
        setCloud('약간흐림')
      }else{
        setCloud('흐림')
      }
    })
  },[])

  return (
    <div>
        <h1>오늘의 날씨는?</h1>
        <p>도시 : {city}</p>
        <p>
          <span>현재 기온은 {temp}°C 입니다.</span><br/>
          <span>체감 기온은 {feelsLike}°C 입니다.</span><br/>
          <span>☁ {cloud}</span>
        </p>
    </div>
  )
}

export default Ex13