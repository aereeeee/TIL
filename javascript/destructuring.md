# 디스트럭쳐링
- 파괴하다, 필요한 것만 뽑아서 쓰자
- ...rest도 디스트럭쳐링 기법

## 객체 디스트럭처링 (Object destructuring)
- 리액트에서 많이 씀
```javascript
const obj = { firstName: 'Un', lastName: 'Lee' };
const { firstName, lastName } = obj; //이 부분이 헷갈리는 포인트
console.log(firstName, lastName);

//--------------------------------

const { prop1, prop2 } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }

// default value
const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }
```

* 객체 필터링할때

```javascript
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
//todo=>todo.completed 로 쓸것을 디스트럭쳐링으로 줄임
//이게 많이 쓰는 방식!! 내가 쓸 객체 프로퍼티만 불러서 사용하기
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
```


```javascript
const person = { Name: 'Ungmo', age:24};
const {Name:이름, age:나이}=person; 

console.log(이름);

```