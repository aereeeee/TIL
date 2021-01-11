# Longest Substring Without Repeating Characte
[문제](https://leetcode.com/problems/longest-substring-without-repeating-characters/)


- 스택, 링크드 리스트 등 자료구조 생각해보기.

### Set
  
- `Set` 객체는 `자료형에 관계 없이` 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다. 즉 중복되는 값을 가지지 않는 값들의 리스트
- 값의 순서 없음
- 알아서 중복 값들 중 맨 앞만 남기고 무시
- add method와 size attr
- 새로운 값 추가할때 `Obhect.is(10,10)//true` 메소드로 비교함
- has() 값 존재하는지 확인 불리언 반환
- delete() set에서 값제거
- clear() set에서 모든 값 제거
- 반복할때 forEach() 메소드 사용
  - forEach()의 콜백이 받는 세가지 인자 value, key(index), array 중 set은 키(인덱스)가 없기 때문에 value=key 이다.
- 스프레드 연산자로 배열로 변환 가능

```javascript
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(1));
// expected output: true
```

#### new WeakSet()
- set이 객체를 가질때 변수에 객체를 할당할 때와 같은 방법으로 참조. 따라서 set인스턴스가 존재하는한 가비지 콜렉션 불가능 
- WeakSet은 하위 메소드에 객체만 인자로 넘길 수 있음
- 넌 이터러블
- 사이즈 속성 없음

[참조-자바스크립트 set](https://medium.com/@khwsc1/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-es6-set%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-9b7294dfba99)

### substring
- 문자열 추출 메서드
- string.substring(startindex,endindex)

---

## solution
- 두개 핀놓고 둘 사이 셋에 집어넣어서 string length 와 set 사이즈 비교함 : 중복값이 있는지 체크하는 알고리즘을 set이 대체한 격
- 사이즈가 다르다면 중복값이 있으므로 앞핀을 이동
- 사이즈가 같다면 중복값 없으므로 뒤핀을 이동 


```javascript
var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 1;
  let ans = 0;

  while(i<s.length && j<=s.length){
      if(makeset(s.substring(i,j))){
          ans=(j-i)>ans? (j-i) : ans;
          j++;}else{
              i++
          }
    }
    return ans; 
}

function makeset(substring){
 let a= new Set(substring);
 if(a.size != substring.length)
    return false;
return true;
}


```

### fastest solution

```javascript
var lengthOfLongestSubstring = function(s) {
   var max = 0 , start = 0 ;
    for (let end = 1; end <= s.length; end++ ){
        var sub = s.substring(start , end );
        var isub =sub.indexOf(sub[sub.length - 1])!== sub.length - 1 ;
        if (isub) {
           start += (sub.indexOf(sub[sub.length - 1]) + 1);        
        }
        max = Math.max(end - start , max);
         }
    return max ;
}
```