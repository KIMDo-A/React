import React, {useState} from 'react'
import '../App.css'

// 화면에 띄워줘야 하는 변수는 state, 관련이 없으면 일반변수 사용
let uScore = 0;  // 리렌더링이 계속 실행되지 않도록
let cScore = 0;

const Ex04 = () => {
  
    const [comDice, setComDice] = useState(1);   // 초기값 꼭 넣기
    const [userDice, setUserDice] = useState(1);
    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [win, setWin] = useState('');

  function startCk() {
    // 이미지를 랜덤하게 바꿔줘야한다!!
    console.log(parseInt(Math.random()*6)+1);
    let comRan = parseInt(Math.random()*6)+1;
    let userRan = parseInt(Math.random()*6)+1;
    setComDice(comRan);
    setUserDice(userRan);
    
    // state를 if문에 사용하면 안 됨. (state는 제일 마지막에 실행됨)
    if (userRan > comRan){
        setUserScore(userScore+1);
        uScore++
    }
    else if (comRan > userRan){
        setComScore(comScore+1);
        cScore++
    }
    
    if (uScore == 10){
        setWin('사용자');
    }
    else if (cScore == 10){
        setWin('컴퓨터');
    }
  }
  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startCk}>Start</button>

      <div className="dice">
        <img src={"./img/dice"+comDice+".png"}></img>  
        {/*{}의 의미는 js에서 가져와서 사용하겠다!는 의미*/}
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={"./img/dice"+userDice+".png"}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {win+"가 이겼습니다"}</h1>
    </div>
  )
}
    

export default Ex04