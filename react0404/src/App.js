import logo from './logo.svg';
import './App.css';
import MenuBox from './components/MenuBox';
// import하기~
import Member from './components/Member';

function App() {
  /*
    컴포넌트(Component) : 리액트로 만들어진 앱을 이루는 최소 단위
                          반복되는 코드를 하나로 묶어서 컴포넌트로 만든다.
                          내가 원하는 코드를 묶어서 '태그화'시킨다.
                          -> 내가 직접 만들수 있는 태그!
                    ** 반드시!!! 대문자로 시작 => 기본 HTML 태그들과의 구분

      - 컴포넌트 생성 방법 (새로운 파일)
      Case 1) 함수 작성, return문 작성, export 작성
      Case 2) EXTENSION 설치 - ES7+ React/Redux/React-Native snippets
      - rafce + Enter   (react arrow function component)
  */

  /*
    프로퍼티 (props)
    - 상위 컴포넌트에서 하위 컴포넌트로 "값"을 전달할 때 사용
    -> 함수 안에 매개변수를 넣어 값을 전달
    EX) div 아래 있는 각각의 Member에게 민트초코, 카라멜마끼야또를 줌 -> 다른 결과값

    - 상위 컴포넌트 문법
    <하위컴포넌트이름 속성="값" 속성={변수}/>
      ** 컴포넌트는 무조건 대문자로 시작
      ** 문자열을 전달할 때는 큰따옴표를(""), 외의 값을 전달할때는 중괄호({}) 사용

    - 하위 컴포넌트 문법
    const 하위컴포넌트 = (props)=>{}
    props.속성

    const 하위컴포넌트 = ({속성1, 속성2})=>{}
    속성1, 속성2

  */

      // 반복되므로 변수로 관리!
      //let temp = prompt('아이스 또는 핫을 골라주세요')
      let temp = "아이스"
      let price = 5800
      let team = prompt('당신의 팀 이름이 무엇입니까?')

  return (
    <div className="App">
      <h1>메뉴판</h1>

      {/* components폴더 - MenuBox */}
      {/* 변수는 { } 중괄호 사용 */}
      <MenuBox name="민트초코" temp={temp} price={price}></MenuBox>
      <MenuBox name="카라멜마끼야또" temp={temp} price={price}></MenuBox>

      {/* 
      Example 1
      1) Member 라는 이름의 컴포넌트 파일을 생성하자. (components 폴더 안에)
      - 팀 이름
      - 내 이름이 포함되어 있을 것
      2) App.js 에서 Member 컴포넌트를 띄워보자
      3) Member를 두번 반복시켜보자

      Example 2
      팀원들의 이름이 담긴 Member컴포넌트를 작성해보자.
      1) 사용자에게 "당신의 팀 이름은?" => 입력한 값으로 팀 이름
      2) 나머지는 본인의 팀원 이름으로 세팅되도록
      */}

      <Member name="김도아" team={team}></Member>
      <Member name="김가연" team={team}></Member>
      <Member name="김성훈" team={team}></Member>
      {/* <Member></Member> */}

    </div>
  );
}

export default App;
