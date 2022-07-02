# vue-project-vite-ts
- Vue3 (Composition API) + Vite + TS
- Vuex + Vue Router
- CSS Framwork: tailwindcss, daisyui
- Axios API

## About project
- Vue.js 온라인 쇼핑몰 프로젝트
  - Composition API + Typescript로 파일 구성
- 기능 구현
  - 다크 모드: input 태그의 checkbox 기능을 사용, Vuex 전역상태관리를 통해 localStorage에 보관
  - 검색 기능: input 태그의 @input 이벤트 리스너 기능을 사용
  - 장바구니: Vuex 전역상태관리를 통해 localStorage에 보관
- 화면 미리보기 ( 화면을 클릭하면 배포한 사이트로 이동합니다 )
  - Light Mode
[![light](./src/assets/light%20ver.png)](https://vue-project-vite.vercel.app/)
  - Dark Mode
[![dark](./src/assets/dark%20ver.png)](https://vue-project-vite.vercel.app/)

### Project setup
```
npm install
```

### Project test
```
npm run dev
```

### Project build
```
npm run build
```