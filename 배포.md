# spread
- ... 연산자
- 잘게 펼치기
- 참조 주소아니라 똑같은 새 배열로 복사할 때 
- 성능은 뮤테이터 쓰는것보다 훨씬 안좋음

```javascript
const sum=(a,b,c)=>(a+b+c);

const num=[1,2,3];

sum(...num);

const mem=['k','m', ...num, 'j','l'];

```
# rest
- 펼쳐진거 합치기


* 뮤테이터 - 기존의 아이를 변경하는 라잌 push / concat은 뮤테이터 아님
* 리액트는 뮤테이터 안좋아함 모든것은 immutable하게 관리
* 어레이 앞에 추가하려면 unshift()
* pop(), shift() 는 맨뒤, 맨앞 값 빼기
* splice()는 원하는 위치에 추가
