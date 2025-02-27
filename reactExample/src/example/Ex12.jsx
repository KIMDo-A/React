import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Ex12 = () => {

// 1. 가장 처음 실행 되는 부분
// 변수, state, 함수 등 화면에서 사용할 가능성이 있는 요소를 초기화
// use~로 시작하는 모든 기능들을 이곳에서 선언(=React Hook)
    console.log('1번 실행')
    const [movieList, setMovieList] = useState([]);

 // 예제) 영화 진흥 위원회 데이터를 화면에 띄워보자!
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=670461200e385674dbe59dacdac3744d&targetDt=20241105`;

// 3. useEffect(()=>{},[]) 함수,배열
// - 화면을 세팅한(=2) 직 후 실행(화면을 만든 다음 값을 가져옴)
// - 복잡하고 무거운 값들을 이곳에서 불러와 줄것
// - backend에서 보내주는 값, DB 값, 외부에서 가져온 API 값..
useEffect(()=>{
    console.log('3번 실행 - 화면 렌더링 완료 직후')

    //useEffect에서는 가지고 오는데 "오래걸리는 값"들을 호출한다.
    //왜? 사용자 입장에서는 화면이 아예 안뜨는 것 보다 순차적으로 뜨는 것을 더 빠르다고 느낌
    //=> 그렇기 때문에 빨리 띄울 수 있는건 먼저 띄우고, 그 다음에 무거운 작업을 하는 것

    // Axios : 비동기통신 라이브러리 (정교한 작업 가능) -cf) JS에서는 Jquery를 사용한 AJAX(비동기통신)를 사용했었음
    /* 1) axios 설치 : npm i axios
       2) import axios from 'axios'
       3) axios
            .통신방식(주소) -> get/post
            .then(함수)
            .catch(함수) => 가져오는데 실패했다면?
    */

    axios // axios 라는 라이브러리를 이용해서 "비동기통신"을 하겠다.
    .get(url) //get방식으로 데이터를 가져오겠다.(서버에서 한다면 서버주소 적기)
    //.then(res=>{console.log(res)}) // then : 가져오는데 성공했으면~ 함수실행
    // 객체에 접근하려면 "." !!
    //.then(res=>{console.log(res.data.boxOfficeResult.dailyBoxOfficeList)})
    // 영화리스트 전체를 가져오므로 [], 화면에 보이는 변수선언(state), 반복은 map사용
    .then(res=>{setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList)})
    console.log('movieList', movieList)

},[])
// 4. useEffect(()->{},[변화를 감지할 대상])
// - []안에 작성한 값이 바뀔 때마다, 함수가 실행
// - useEffect(()=>{},[num])
// - num의 값이 바뀔 때 마다 useEffect함수가 실행된다.

  return (
    <div>
        {/* 2. 화면구성요소 */}
        {console.log('2번 실행 - 화면 렌더링 중...')}
        <h2>영화 순위</h2>
        {movieList.map(item=>
        <p>{item.rank}. {item.movieNm}</p>
        )}
    </div>
  )
}

export default Ex12
