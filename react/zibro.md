# 집으로

## commit convention
- huskey :git hook 편하게 쓰는 유틸리티

#### type  
- build: npm package등 바꿀떄
- docs: 문서만 바꿀떄
- `feat`: new feature
- fix: 버그수정
- perf: 성능향상
- refactor: 아무것도 해당안되지만 코드 변화
- style: 코드 포맷팅
- chore: 잡일들

```
type(선택사항 scope ex)로그인 어떤 컨텍스트인지]:한칸띄고 간략한 설명  
    
자세한설명 필요하면 두칸띄고,, 브레이킹 체인지 있으면 무조건 여기 작성 BREAKING CHANGE: 자세한 내용
    
마지막줄은 closes issue #12 - 이슈 자동 클로즈
```
---

## semantic versioning
major.minor.patch

1.2.0

- major- 기존과 호환x
- minor- 호환은 가능
- patch- bug fix

---

## 코딩 컨벤션
- air bnb
- eslint : 저장할때 자동 고침
- editconfig: 사용 에디터마다 다른 부분 맞춰줌
- react hot loader: 변경일어난 부분만 새로고침

---

## Type / Feature  project structure
- Tpye: file type
 ```
    components/ 
        auth/
    containers/ 
        auth/
```
- Feature
```
    auth/
        components/
        containers/
```

### git
브랜치 feature/a 따서 작업 -> git push origin feature/a  
develope에 pull request날리고 리뷰 받고 merge하기  
머지되면 git pull origin develope

---

# styled component
- 요즘은 컴포넌트 단위로 작업하는게 트렌드. css,html,js나누지 않음
- style 상단/ 인터랙션 중간 / html구조 return부분 하단
- 라이브러리 설치

- 클래스 이름 안써도 됨
```javascript
    import styled from 'styled-component'
   
    //모든 돔에 적용가능 
    const wrapper = styled.div`
        background-color:#fff;
        color: ${({active}) => active && 'green'}
        /*active라는 프롭이 true면 초록색!*/
    `
    //!주의사항 내가 만든 컴포넌트: className prop으로 내려줘야함
    const Button = ({children, className}) => {
        <button type='button' className={className}>{children}</button>
    }
    //컴포넌트도 스타일드 가능!
    const StyledButton= styled(Button)`
        asdfads
    `
    <Wrapper type='button' onClick={} abc={}>dfasd</Wrapper>
    //styled의 대상이 dom element면 이미 알려진 타입같은 속성은 다 전달됨 다른건(abc)전달 안되고 걸러짐
    //styled 에 위에처럼 함수써서 프롭 가져오면 걸러지지 않고 전달됨!!
    <StyledButton type='button' onClick={} abc={}>>asdf</StyledButton>
    //styled의 대상이 컴포넌트면 싹다 내려감

```

- 이름 충돌이나 가독성 위해 네임스페이스 안에 작성
```javascript
    const S= {
        Button: styled(Button)`
        `
    }
    <S.Button></S.Button>

```
---
# Hook
- react class component에서만 쓸수있었던 스테이트 등 기능을 함수형 컴포넌트에서 쓰도록
- 관련 로직 라이프사이클에 따라 중복 작성/ 연관 없는 로직이 사이클 안에 붙어있음 --이런 문제 해결
  
* useState
```javascript
const [val, setVal] = useState('');
// val은 인풋에서 쓰고
// setVal은 onchage함수에서 쓰는 setState와 같은 개념

// 만약 스테이트 개체 여러개일떄 업데이트 하지 않은 개체는 날라감 
//그래도 이렇게 나눠서 쓰는게 훨씬 깔끔하고 리액트가 알아서 처리해줘서 성능저하도 없음
```

* useEffect
    - 사이드 이펙트 부수효과: 로직이 외부세계에 영향 미칠떄../ api호출하거나/ 
    - 사이드 이펙트 효율적으로 처리 - 데이터 받아오거나 셋인터벌걸거나 로컬 스토리지 쓰거나....
```javascript
 useEffect(()=>{
     apis.fetch();
 },[category,sth,sth])
//두번쨰 인자가 의존성 배열 -- 빈 배열이면 didMount와 똑같음. 마운트 되는 시점에 한번 실행
//didmount와 update에 나눠있었던 로직을 이렇게 하나로 쓸수 있음

useEffect(()=>{
    const timer=setInterval(()=>setT---)

    return ()=>{
        clearInterval(timer)
    }
},[])
//마운트 시점에 타이머 호출되고 언마운트될떄 리턴 불러옴!
//만약 의존성 배열에 디펜던시 있으면 걔가 업데이트 될때 작동되고 업데이트 되기 직전 언마운트될때 클리어
```
* 나머지는 따로 공부

---
# Redux
- 공홈가기
- props내려주는게 아니라 Store에 상태를 다 저장해놓고 아무데서나 쓸수 있음
- 리액트와 마찬가지로 store의 상태를 바로 바꿀수 없음 -- action이라는 애로 업데이트 가능
- 액션은 무슨일이 일어날지 정보를 담고잇는 객체..수도코드느낌 / 리듀서는 상태를 어떻게 변화시킬지 state의 모습을 담고있는 실무자.. 
- action을 store에 디스패치 -> 스토어가 리듀서 실행 -> 리듀서가 액션을 받아서 상태 업데이트 

```javascript
import {createStore, combineReducers} from 'redux'
const initialstate = {
    count:0,
    todos:[],
    ...
}


//리듀서와 액션을 정의
...
const reducer = (state=initialstate, action)=>{
    //스위치문으로 많이씀
    switch(action.type){
        case 'Increment'
            return state+1;
    }
}
...
//리듀서를 여러개로 나누고 나중에 합치기 
const rootReducer = combineReducers({
    count:countReducer,
    todo:todoReducer
})
const store= createStore(rootReducer)



store.getState();
//액션을 디스패치
store.dispatch({type:'Increment'})
// 상태를 구독- 상태 업데이트될떄마다 리액트에서 처리
store.subscribe(()=>{
    console.log('상태가 업데이트 될떄마다 호출됨')
})


```

- 리액트와 바인딩하려면 '리액트 리덕스' 라이브러리 깔아야함
```javascript
import {useSelector, useDispatch} from 'react-redux'
//렌더할때 씀
//useSelector = (getState + subscribe) 구독까지 하기떄문에 바뀌면 바로 렌더 다시함  
//useDispatch dispatch자체

```