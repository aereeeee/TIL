# let, const와 블록 레벨 스코프
https://github.com/Yuni-Q/TIL/blob/master/front/javascript/variable.md

모든 변수 호이스팅 함.
단 바는 호이스팅되면 undefined 값이 출력
let은 에러남

// 함수 선언
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// 함수 표현식
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar는 함수가 아닙니다
var bar = function() {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]

변수호이스팅
선언’ 초기화 까지
함수호이스팅
선언’ 초기화 할당은 세단계 다 호이스팅됨
->함수 표현식으로 쓰면 변수 호이스팅으로 되는거라 에러남

이렇게 차이있으니 선언식/표현식 통일해서 쓰는게 좋음

린트쓰면 선언전에 함수쓰면 에러로침 그래서 표현식으로 쓴다 - 찬연님


실무- 컨스트만 씀 스위치문이나 이프문은 따른 함수로 대체하니 렛은 안씀
포문도 안씀...

함수형 프로그래밍= 불변값만 쓰는/ 포문도 안쓰고 ->한번공부해보기

//
undefined 변수는 선언되었지만 값이 할당되지 않은 변수입니다.
널은 명시적으로 널을 할당한것. 
함수가 실행 결과에 따라 값을 반환하지 않으면 변수에 할당되며, 변수가 undefined 값을 갖습니다. 이것을 검사하기 위해, 엄격한 (===) 연산자 또는 typeof 에 undefined 문자열을 사용하여 비교하십시오. 확인을 위해 추상 평등 연산자(==)를 사용해서는 안되며, 이는 값이 null 이면 true 를 반환합니다.

브라우저가 갖는게 호스트객체 언어가 갖는게 내장객체

값을 추가 삭제하는거면 콘스트씀 아예 다른 값을 할당해야 렛쓰는게 맞다
다시 말하자면 재할당은 불가능하지만 할당된 객체의 내용(프로퍼티의 추가, 삭제, 프로퍼티 값의 변경)은 변경할 수 있다.
---
- https://poiemaweb.com/es6-block-scope
