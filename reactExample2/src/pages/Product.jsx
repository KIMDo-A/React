import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom' //useParams, useSearchParams

const Product = () => {

  /** useParams
   * - url의 파라미터(= 주소값을 결정지어주는 고유한 숫자) 정보를 가져올 수 있다
   * - 물품의 고유한 값을 설정/출력하는데 적합
   * - useParams는 "하나"밖에 사용할 수 없다!!!! -> 제일 중요한 정보 사용
   * - 즉 그 컴포넌트가 가지고 있는 고유한 성질을 담을 때 유용하게 사용 된다.
   * - 상품의 고유번호 / 회원 고유번호 / 학번 / 사번 (테이블 PK)
   * 
   * 사용 방법
   * a. <Route path="/경로:(컬럼)파라미터정보">
   * b. 컴포넌트 내부로 와서
   *    let { 파라미터정보 } = useParams();
   * 
   * /301145 파라미터 -> 301145가 상품 번호인 상품의 정보를 가져와주자
   * => 그 정보를 이곳에 세팅
   * -> backend서버가 데이터베이스를 찾아서 frontend로 줌
   */

  let {num} = useParams();
  console.log('게시물 번호', num)
  
  /** useSearchParams()
   * - 라우터 사용 시 QueryString 정보를 가져와서 관리하고 싶을 때 사용 -> 여러개 사용 가능
   * - url 뒤에 ?(물음표)속성=값&속성=값 ...
   * - 사용 방법은 굉장히 다양하다! 
   * - 들어온 경로 파악 / 검색 기능 / 인기글, 신규글 카테고리화 ... etc
   * - route를 손대지 않음
   * - ?뒤에는 어떤 내용이 와도 보여지는 화면에 영향이 없음
   */
  const [query, setQuery] = useSearchParams();
  //정해져있음! 꼭 query로 쓰기 -> state와 헷갈리기 때문
  
  console.log('인기글 여부 파악', query.get('best')) //true
  //value값가져오기

  return (
    <div>{num}번째 게시물 입니다.</div>
  )
}

export default Product