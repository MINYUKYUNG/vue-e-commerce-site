# vue-e-commerce-site

## 배포 링크
https://vue-project-vite-ts.vercel.app/

## 기술 스택
- Vue3 (Composition API) + Vite + TypeScript
- Vue Router
- Vuex
- CSS Framwork: tailwindcss, daisyui
- Axios API

## About project
1. Vue.js 온라인 쇼핑몰 프로젝트
    - Composition API + Typescript 로 파일 구성
    
2. 기능 구현
    - 다크 모드: input 태그의 checkbox 기능을 사용하여, localStorage에 데이터 보관
    - 검색 기능: input 태그의 @input 이벤트 리스너 기능을 사용
    - 장바구니 시스템: Vuex 전역상태관리를 통해 localStorage에 데이터 보관
    - 상품 데이터: Vuex를 이용하여 전역으로 상태관리

3. 화면 미리보기 ( **화면을 클릭하면 배포한 사이트로 이동합니다** )
    - Light Mode
    [![light](./src/assets/images/light%20ver.png)](https://vue-project-vite-ts.vercel.app/)
    - Dark Mode
    [![dark](./src/assets/images/dark%20ver.png)](https://vue-project-vite-ts.vercel.app/)

## 실행 방법
1. repository clone
```
$ git clone https://github.com/MINYUKYUNG/vue-e-commerce-site.git
```
2. dependencies install
```
npm install
```
3. project start
```
npm run dev
```

## 폴더 구조
| 폴더 | 구분 |
| -- | -- |
| apis | api 호출 함수 폴더 |
| assets | 이미지, 폰트 폴더 |
| components | 공통 컴포넌트 파일 폴더 |
| pages | url 주소 페이지 파일 폴더 |
| routes | Vue 라우팅 파일 폴더 |
| store | 전역상태관리 파일 폴더 |