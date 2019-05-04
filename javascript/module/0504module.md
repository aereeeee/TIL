- es5 시절 모듈화
- function scope여서 function 안에 변수넣고 바로 () 호출... 
    - 그냥 선언하면 전역으로 window에 붙으니까..

## 모듈화를 위한 노력
- commonjs : 브라우저에서는 파일 로딩되기 전까지 못불러오는 치명적 단점있음
- AMD
- IIFE
- UMD :위 모든 모듈방법을 호환하기 위해 사용하는 패턴

## ES6 Module
- import/export 문법생김

- 브라우저에서 안돌아가는이유
    - 비동기여서 스크립트 임포트시 언제 로딩되는지 모름
    - 크롬은 .mjs 확장자로 사용가능
    - script type=module로 지정하고 다이나믹 import하면 사용가능
    - 바벨로 프리컴파일하여 사용


[실습](https://codesandbox.io/s/yp98kk671v)