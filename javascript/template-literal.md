템플릿 리터럴
줄바꿈허용, 플러스 안쓰고 ${}안에다.
https://leesoo7595.github.io/2019/01/01/JavaScript_extended_parameter_handling/
태그드
https://github.com/chayeoi/TIL/blob/master/javascript/tagged-template-literals.md
다시보기!
리액트쓰면 씨에스에스 위해 태그드템플릿 리터럴 사용 - 스타일드 컴포넌트


const person = 'Mike'
const age = 28

//펄슨의 표현식, 에이지의 표현식
function myTag(strings, personExp, ageExp) {
  const str0 = strings[0] // 'That '
  const str1 = strings[1] // ' is a '
  const ageStr = ageExp > 99 ? 'centenarian' : 'youngster'

  return `${str0}${personExp}${str1}${ageStr}`
}

const output = myTag`That ${person} is a ${age}`

console.log(output) // That Mike is a youngster

마이태그라는 함수보면
스트링스매개변수에는 저런 문자열이 담김 마지막은 빈 문자열
각 매개변수는 탬플릿 리터럴에 

템플릿 리터럴을 함수처럼 호출가능

const name = ‘조애리’;
console.log(`내 이름은 ${name}이다.`);