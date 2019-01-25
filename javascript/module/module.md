# 모듈 module

* https://poiemaweb.com/es6-module
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import

## 모듈이란

- 모듈이란 애플리케이션을 구성하는 개별적 요소
- 재사용 가능한 코드 조각
- 세부 사항을 캡슐화하고 공개가 필요한 API만을 외부에 노출
- 자바스크립트에서 일반적으로 파일 단위로 분리되어 있으며 애플리케이션은 필요에 따라 명시적으로 모듈을 로드하여 재사용


## 장점

- 기능별로 분리되어 작성되므로 코드의 단위를 명확히 분리하여 애플리케이션을 구성할 수 있음 
- 재사용성이 좋아서 개발 효율성과 유지보수성을 높일 수 있음

## 자바스크립트에서의 모듈

클라이언트 사이드 자바스크립트는 파일마다 독립적인 파일 스코프를 갖지 않고 하나의 전역 객체(Global Object)에 바인딩되기 때문에 전역 변수가 중복되는 등의 문제가 발생할 수 있어 모듈화 구현이 어렵다.

### 모듈 로더 라이브러리 
브라우저에서 모듈을 사용하기 위해서는 CommonJS 또는 AMD를 구현한 모듈 로더 라이브러리를 사용

* CommonJS
    * node.js에서 채택한 방식으로 서버사이드에 적합하다
    * module.exports 또는 exports 객체를 통해 모듈을 정의하고 require 함수를 사용하여 임포트
```javascript
const $ = require('moduleA');
const Z = require('moduleZ');
module.exports = {
  a: $,
  b: Z,
};
```

* AMD(Asynchronous Module Definition) - 비동기적 모듈 선언
    * 대표적인 라이브러리 `RequireJS`
```javascript
<script src="require.js"></script>
```
```javascript
define(['moduleA', 'moduleZ'], function($, Z) {
  console.log($);
  console.log(Z);
  return {
    a: $,
    b: Z,
  }
});
```
```javascript
require(['myModule'], function (my) {
  console.log(my.a); // moduleA
  console.log(my.b); // moduleZ
});
```

## ES6 모듈 시스템
 ES6에서는 클라이언트 사이드 자바스크립트에서도 동작하는 모듈 기능을 추가-[이제 대부분의 브라우저에서 지원 됨](https://caniuse.com/#feat=es6-module)

- 독립적인 파일 스코프를 갖기 때문에 모듈 안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조
- 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 export해야 함. 선언된 변수, 함수, 클래스 모두 export할 수 있음.

## export
- named export : 모듈 하나에서 유명 내보내기는 여러 개 존재할 수 있음, 가져올 때는 내보낼 때와 동일한 이름을 사용하거나, import { name as newName } 구문을 사용해야 함
- default export : 기본 내보내기는 모듈 내에서 하나만 가능, 기본 내보내기는 어떤 이름으로도 가져올 수 있음

### named export
```javascript
// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
  return x * x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}
```
```javascript
// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };
```
### default export
 default를 사용하는 경우, var, let, const는 사용할 수 없다.
```javascript
export default expression;
export default function (…) { … } // class, function* 에서 동일
export default function name1(…) { … } // class, function* 에서 동일
export { name1 as default, … };
```

## import

* export한 모듈을 로드하려면 export한 이름으로 import한다. 각 모듈은 {}안에 하나 혹은 여러개가 들어갈 수 있다.

```javascript
// 같은 폴더 내의 lib.js 모듈을 로드.
//'./lib'과 같이 "bare" 모듈 지정자로 불리는 것들은 현재 지원되지 않는다.
import { pi, square, Person } from './lib.js';

console.log(pi);         // 3.141592653589793
console.log(square(10)); // 100
console.log(new Person('Lee')); // Person { name: 'Lee' }
```

* 한꺼번에 import할 수도 있다. 이때 import되는 항목은 as 뒤에 지정한 이름의 변수에 할당된다.

```javascript
// lib라는 이름으로 import
import * as lib from './lib';

console.log(lib.pi);         // 3.141592653589793
console.log(lib.square(10)); // 100
console.log(new lib.Person('Lee')); // Person { name: 'Lee' }
```

* 이름을 변경하여 import

```javascript
import { pi as PI, square as sq, Person as P } from './lib';

console.log(PI);    // 3.141592653589793
console.log(sq(2)); // 4
console.log(new P('Kim')); // Person { name: 'Kim' }
```

* default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import한다.

```javascript
//Example.js
const a = 1;
const b = 2;
export { a };
export const c = 3;
export default b;
```
```javascript
import d, { a, c as e } from './Example';
console.log(a, d, e); // 1, 2, 3
```
## 브라우저에서 JS 모듈 사용하기
```javascript
<script type="module" src="main.mjs"></script>
<script nomodule src="fallback.js"></script>
```

 ES6 모듈을 현재의 브라우저에서 사용하기 위해서는 SystemJS, RequireJS 등의 모듈 로더 또는 Webpack 등의 모듈번들러를 사용하여야 한다.
- 그냥 불러오면 import 만날때마다 통신 
- 번들러를 쓰면 하나의 파일로 통합해줌 


