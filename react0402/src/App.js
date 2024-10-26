import logo from './logo.svg';
import './App.css';

//JSX문법 : Javascript와 Html을 구분없이 한번에 사용할 수 있는 문법
//규칙1 : 사용자정의 태그(컴포넌트)에서 출력하고자 하는 내용은 반드시 "하나의 태그"로 묶여있어야함!
//        ex)div, h1 등 ..
//규칙2 : 표현식 { } 중괄호를 이용해서 Javascript에 있는 "데이터"를 출력(사용)할 수 있음!
//        ex)변수, return값 등..
//        --> if, for 사용할 수 없음!
//규칙3 : JSX에서는 class라는 키워드 대신 "className"이라는 키워드를 사용함!
//규칙4 : JSX에서는 반드시 여는태그와 닫는태그가 존재함
//        ex) input, br태그역시 닫는태그 적기 <input></input>

function App() {
  // App이라는 이름으로 사용자 정의태그를 만듬!

  let name = "도아";
  let myStyle = {
    backgroundColor : 'blue',
    color : 'yellow'
  }

  // 예제) 오늘의 날짜, 계절 출력하기
  let name2 = prompt("이름을 입력해주세요!");
  let date = new Date(); //현재 시간
  //년
  let year = date.getFullYear();
  //월
  let month = date.getMonth()+1; //getMonth() : 0~11출력 
  //일
  let day = date.getDate();
  //"."은 date에있는 녀석중에서 뽑아오겠다!!

  let season = "";
  if(month=='3'|| month=='4'||month =='5'){
    season = "봄"
  }else if(month=='6'|| month=='7'||month =='8'){
    season = "여름"
  }else if(month=='9'|| month=='10'||month =='11'){
    season = "가을"
  }else if(month=='12'|| month=='1'||month =='2'){
    season = "겨울"
  }

  return (

    <div>
      <div>
        {/* name에 있는 값이 '도아'라면 '도아의 React 첫시작'
        '도아'가 아니라면 '오늘은 칼퇴!!' => 삼항연산자
        */}
        { name == '도아'?
        <h1 className='myName'>{name}의 React 첫 시작</h1>
        :
        <h1>오늘은 칼퇴</h1>
        }
        <h1 style={{backgroundColor : 'black', color : 'red'}}>{name}의 React 두번째 시작</h1>
        {/* JSX에서 태그에 바로 스타일을 적용시켜줄때는, JavaScript 객체 형식으로 적용해줘야함!
            첫번째 중괄호 : Javascript문법을 사용하겠다! 
            두번째 중괄호 : (JS안에 있는) 객체
        */}
        <input></input>
      </div>
      <div>
          <h1 style={myStyle}>React 세번째 시작</h1>
          <h1>React 네번째 시작</h1>
      </div>


      {/* 예제) 현재 날짜, 계절 출력 */}
      <h1>JSX DATE 실습</h1>
      <h1>{year}.{month}.{day}</h1>
      <hr></hr>
      <p>{name2}님 지금은 {season}입니다. 좋은하루 보내세요!</p>
     
    </div>

  );
}

export default App;
