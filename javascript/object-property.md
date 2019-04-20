# 객체 리터럴 프로퍼티 기능확장

## 프로퍼티 축약표현
* 오브젝트 만들때 키네임이랑 변수랑 같으면 생략가능 매우 편리!

## 프로퍼티 키 동적 생성
- 프로퍼티의 키 이름을 동적으로 만들고 싶을 때 
- 리액트에서 이벤트 바인딩할 때 많이 씀
- 예를 들어 인풋값에 따라 스테이트 저장할떄
    - event.target.name으로 인풋태그 네임 가져오고 동적할당 
    ```javascript
    handler=(event)=> this.setState({[event.target.name]:event.target.value})
    ```
- 변수 값을 키이름으로 쓸때 대괄호사용

```javascript
const key=name;
const obj={[key]='aeree'}

```