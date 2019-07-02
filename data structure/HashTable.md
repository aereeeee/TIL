# hash table

해싱은 특정값을 가장 신속하게 찾는 방법. 테이블에서 키에 해당하는 값의 주소를 찾으므로 조회속도 빠르다.  
배열을 이용하여 만든다.
- 기본 메소드
  1. put(key.val) :원소 추가
  2. remove(key)
  3. get(key)

- 좋은 해시 함수는 원소 사빕과 조회속도가 빠르고 충돌 확률이 낮아야 한다
- 루즈루즈 해시 함수
  - 키를 구성하는 문자 아스키 값을 더한것이 해시값
- djb2 해시 함수 : 루즈루즈 개선
  - hash = 5381 임의의 수로 초기화
  - 키 순회하며 hash*33+key.charCodeAt(i)
  - hash%1031 마지막 임의의 소수로 나눈다..


```javascript
    function hashtable() {
        const table = [];
    }

    var loselosehash= (key) => {
        let hash=0;
        for( let i=0; i<key.length;i++){
            hash+= key.charCodeAt(i);
        }
        return hash%37
    }
```
```javascript
//put method
    this.put = function(key, val){
        let position=loselosehash(key);
        table[position] = value;
    }
//get method
    this.get = function(key){
        return table[loselosehash(key)];
    }
//remove
    this.remove= function(key){
        table[loselosehash(key)] = undefined;
    }

const hash= new hashtable();
hash.put('asdfa','asdfa@gmail.com');

```
---
- 해쉬값이 같으면 충돌 발생
- 해결하기 위해 
    1. 체이닝
    2. 선형 탐색
    3. 이중해싱
---   
### 체이닝
테이블 인덱스별로 연결리스트 생성/ 단점: 테이블 인스턴스 외에 메모리가 추가적으로 소요
--- 
### 선형 탐색
새 원소 추가 시 인덱스가 점유된 상태면 인덱스 ++ 찾아 충돌 회피

