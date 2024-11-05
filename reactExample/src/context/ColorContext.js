// 프로젝트를 할때, 다양한 데이터들이 많기 때문에 context폴더를 만들어서 관리하면 편함!
// js = jsx 같음! node도 js를 쓰기 때문에 리액트와 구분하기 위해 jsx를 썼었음
// 주로 jsx는 컴포넌트를 사용할때 사용함

//1. context(계좌) 만들기
import { createContext } from "react";

export const ColorContext = createContext(null);
// 어디서든 쓸 수 있도록 export