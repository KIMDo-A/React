import React, {useState} from 'react' //useState
import '../App.css'
//import pic from '../img/pic.jpg' // 첫번째 방법

const Ex02 = () => {

    /* React에서 이미지를 띄우는 방법 3가지 

    1) src 폴더를 통해 이미지를 import
    -> import 변수 from '경로'

    2) public 폴더를 통해 이미지에 접근 -> 프로젝트때 많이 사용★ pic으로 쌓아서 반복문돌리기
    - public 폴더는 그 폴더 자체로 이미 "서버"와 통신 중
    - public 폴더에 있는 파일들은 "고유 주소"를 갖게 됨
    - http://localhost:3000/폴더이름/사진이름.확장자
    // let pic = "http://localhost:3000/img/pic.jpg" 

    3) 외부 url 을 이용
    let pic = "https://cdn.1boonnews.com/news/photo/202304/6339_17427_3416.png"
    */

    let pic = "https://cdn.1boonnews.com/news/photo/202304/6339_17427_3416.png"

    /* 좋아요 실습
    1. 비어있는 하트 클릭 시, 하트가 꽉찬 하트로 변경
                            + 내용이 좋아요 취소로 변경
    2. 꽉찬 하트를 클릭 시, 하트가 비어있는 하트로 변경
                            + 내용은 좋아요로 변경
    - 하트 state : emoji
    - 좋아요 state : txt
    - 좋아요를 핸들링하는 함수 : handleLike

    => 하트 클릭시 handleLike 실행 => 변화
    */

    const [emoji, setEmoji] = useState('♡');
    const [txt, setTxt] = useState('좋아요');

    const handleLike = () => {
        console.log('handleLike function')
        if(emoji == '♡'){
            //txt === '좋아요'
            setEmoji('♥')
            setTxt('좋아요 취소')
        }else if(emoji == '♥'){
            setEmoji('♡')
            setTxt('좋아요')
        }
    }

  return (
    <div className='div-center'>
        <img width='300px' src={pic}></img>
        <p>
            <span onClick={handleLike}>{emoji}</span>
            {" "}
            {/* 띄어쓰기 */}
            <span>{txt}</span>
        </p>
    </div>
  )
}

export default Ex02