#  화살표 함수

화살표`=>` 뒤의 중괄호로 둘러싸여진 영역에 함수의 실행 코드를 작성한다.
```javascript
const add = (x, y) => {
  return x + y
}
```
이때 함수의 실행 블록이 반환 값만 갖는 경우라면, 중괄호와 return 키워드를 생략할 수 있다.
```javascript
const pow = x => x * x // x => { return x * x }
```
단 객체 리터럴 형식의 값을 반환하는 경우, 반환 값을 반드시 소괄호로 감싸야 한다. 이게 반환값인지 함수인지 판단해야하기 때문.
```javascript
const foo = () => ({ a: 1 })
```

화살표함수는 무조건 **함수 선언식**으로 작성한다.
- 함수표현식: function add(){}, 
- 함수 선언식: var foo= function(){}

> 기존 방식 함수는 prototype property가 있으므로
> constructor가 prototype을 참조하여 생성자 가능하지만,
> 화살표함수는 프로토타입이 없으므로 프로토타입 내부 컨스트럭터도 없음
 

제너레이터로 사용될 수 없다.
> 화살표 함수 내부에서 yield 키워드를 사용할 수 없다. 그 결과 화살표 함수는 제너레이터로 사용될 수 없다.


this value가 호출 시점이 아닌 상위 스코프에 의해 결정된다. 
> 화살표 함수는 자신만의 this value 가지지 않는다. 따라서 콜백함수에 사용할 떄 장점이 있음

---
참조 : [화살표 함수](https://poiemaweb.com/es6-arrow-function)