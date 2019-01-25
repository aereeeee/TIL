# 이터레이션 프로토콜(iteration protocol)과 for-of 루프
---
- for of 로 순회가능한 을 의미 
- 타입별로 각각 다른 이터레이터 찍어보기.
- 이터레이터 사용 iterator.next()
    - interator.next().value : [key, value] 배열로 나옴
- new Map() 어레이랑 비슷한 맵 
- new Map([
    [key, value],
    [key, calue]
    ])
- map.set()으로 두개 넣는거나 같은 의미, 이터레이터가 이걸 가능하게 
- 다 돌면 .done 다음것도 있으면 .next
- 프로토콜 = 자바스크립트의 약속
- 이터레이션 프로토콜은 두가지로 구성 이터러블 프로토콜/ 이터레이터 프로토콜  
- 심볼 닷 이터레이터를 키로 구현한 메소드 있으면 이터러블 프로토콜을 준수한 것.
- 심볼 닷 이터레이터를 키로 갖는 메소드가 반환한 개체 : 이터레이터 - 이터러블 객체를 어떤식으로 순회하는지 방법을 알려주는
- 이터러블 프로토콜을 만족하면 포 오브, 디스트럭쳐링, 스프레드 연산자 등을 사용할수 있게 약속
- 어레이 같은거는 **Symbol.iterator** 가지고 있으므로 바로 프로토콜에 따른 기능 사용
- 피보나치 구현 외워서 해보기


## 이터레이션 프로토콜

- ES6 `이터러블(iterable)` 과 `이터레이터(iterator)` 를 정의한 이터레이션 프로토콜이 추가됨

> #### 이터러블(iterable)
> 
> 이터러블은 **순회 가능한 자료 구조**이다. **Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현**하는 것에 의해 순회 가능한 자료 구조인 이터러블이 된다.
 ex) Array.prototype(Symobl.iterator)
 for문처럼 순회 
> #### 이터레이터(iterator)
>
> 이터레이터는 순회 가능한 객체이다. Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다. 이터레이터는 순회 가능한 자료 구조인 이터러블의 각 요소를 순회하기 위한 포인터로서 **next 메소드**를 갖는다. next 메소드는 value, done 프로퍼티를 갖는 객체(iterator result)를 반환하며 이 메소드를 호출하여 이터러블 객체를 순회하며 단계별로 제어할 수 있다.
ㄷdone이 트루가 될때까지 넥스트
 

## Iterables

`iterable` 프로토콜은 반복 가능한 객체를 나타내는 프로토콜로 `for..of` 등에서 반복되는 행동을 정의하는 객체를 `반복 가능`하다고 한다.
반복 가능한 객체로는 내장 객체인 `Array`, `Map`, `Set`, `String` 등이 있다. 또한, `[Symbol.iterator]`라는 키를 가진다.

```javascript
/*
이터러블
Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현해야 한다.
배열에는 Array.prototype[Symbol.iterator] 메소드가 구현되어 있다.
*/
const iterable = [1, 2, 3];


/*
이터레이터
이터러블의 Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다.
*/
const iterator = iterable[Symbol.iterator]();

/*
다음과 같은 방식으로 멀티라인이 아닌 한줄로도 처리 가능하다.
*/
const iterator2 = [1, 2, 3][Symbol.iterator]();


/*
이터레이터는 순회 가능한 자료 구조인 이터러블의 각 요소를 순회하기 위한 포인터로서 value, done 프로퍼티를 갖는 객체(iterator result)를 반환하는 next 메소드를 갖는 객체이다.
이터레이터의 next 메소드를 호출하여 이터러블 객체를 순회하며 단계별로 제어할 수 있다.
*/
iterator.next().value; // 1
iterator.next().value; // 2
iterator.next().value; // 3
iterator.next().done; // true
```

반복가능한 객체를 만들기 위해서는 `[Symbol.iterator]`라는 키에 `next`라는 메소드를 가지는 객체를 반환하는 함수를 할당한다. 이 때, 이 함수의 반환 값은 `value` 프로퍼티를 가진 객체이다.



## Iterator

`iterator` 프로토콜은 반복 가능한 객체의 값을 시퀸스대로 처리하는 프로토콜로 다음은 iterator 에 대한 설명이다.

1. 컬렉션 내의 항목에 대해 한 번에 하나씩 접근하면서 현재의 위치를 추적하는 방법을 알고 있는 객체
2. 반복 가능 인터페이스에 의해 반환되는 객체

iterator 객체는 `next` 메소드를 통해 다음 시퀸스를 진행하게 된다. 이 메소드는 위에서 살펴본 대로 `value`와 `done`을 가진 객체를 리턴한다.

```javascript
const obj = {
  [Symbol.iterator]: () => {
    let i = 0;

    return {
      next: () => ({ value: i++ }), //중괄호는 함수 실행블록. 객체를 의미하는 중괄호를 반환할 때 소괄호로 감싸야함 
    };
  },
};

const iterator = obj[Symbol.iterator]();

iterator.next().value; // 0
iterator.next().value; // 1
// ...
//for a of obj 하고 a 반환하면 무한로프반환 
```



### 어디서 사용되지?

- spread 연산자

  ```javascript
  const hello = 'hello world';
  const helloArr = [...hello];
  
  for (let a of helloArr) {
      console.log(a);
  }
  ```



### 유저가 직접 정의해서도 사용 가능하다.

```javascript
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]


// 이렇게도 사용 가능
function* gen(){
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }
```



## For-of 루프

for-of 루프는 이터러블 객체를 순회한다. for-of 루프는 이터러블 객체를 순회할 때마다 이터레이터의 next 메소드를 호출한다. next 메소드가 반환하는 객체(iterator result)의 done 프로퍼티가 true가 될 때까지 반복하며 value 프로퍼티의 값을 for-of 루프의 of 앞에 선언한 변수에 할당하고 반복문의 코드 블럭을 실행한다.

```javascript
// 배열
for (const val of ['a', 'b', 'c']) {
  console.log(val);
}

// 문자열
for (const val of 'abc') {
  console.log(val);
}

// Map
for (const [key, value] of new Map([['a', '1'], ['b', '2'], ['c', '3']])) {
  console.log(`key : ${key} value : ${value}`); // key : a value : 1 ...
}

// Set
for (const val of new Set([1, 2, 3])) {
  console.log(val);
}
```

위의 코드를 구식의 for문으로 만든다면?

```javascript
const arr = ['a', 'b', 'c'];

for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}
```

이터레이터와 for of 문을 사용하면 무한 루프를 만들 수 있다.

```javascript
function idMaker(){
    var index = 0;
    
    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

---
- https://poiemaweb.com/es6-iteration-for-of
- https://github.com/eastroots92/TIL-Today_I_Learned/blob/master/JavaScript/ES6/%EC%9D%B4%ED%84%B0%EB%A0%88%EC%9D%B4%EC%85%98%20%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EA%B3%BC%20for-of%20%EB%A3%A8%ED%94%84.md