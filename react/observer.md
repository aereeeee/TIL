# Observer
- 옵저버: 페이지 컨텍스트 안에서 일어나는 일 관찰하기 위한
  - 라이프 사이클 감지, 콜백함수 실행 등
  - 이벤트 리스너가 하고 있는일과 비슷 but 비동기적으로 동작하여 성능에 영향주지 않는다
  - 비동기이므로 콜백 처리시 여러 관찰 대상이 전달될 수 있음/ 따라서 콜백함수는 단일 엔트리가 아니라 배열 엔트리로 
 
 #### 현재까지 
- MutationObserver
- IntersectionObserver 
- PerformanceObserver - 사용자 모니터링 도구
> maybe.. fetchObserver - 네트워크 프록시 영역 

#### 모양 
```javascript
let observer = new NAME(function (entries){
    //entries = 관찰되는 엘리먼트들의 배열
    //전달되는 인자들에 따라 어떤 옵저버인지가 결정
    entries.forEach(entry=>{
            blahblah
    });
})
observer.observe(WHAT);
// 옵저버에게 지금 무엇을 관찰하는지 알림
```
---

## IntersectionObserver
- 어떤 엘리먼트가 다른 엘리먼트와 겹쳐진 영역을 비동기적으로 관찰
- 3개의 주요 엘리먼트 속성 필요
    1. root: 루트 엘리멘트. 디폴트는 브라우저 뷰포트 : 어떤 엘리먼트에 대한 '캡처 프레임'을 초기화한다.
    2. rootMargin: 루트 엘리멘트 주변의 마진 : 라트에 정의된 '캡처 프레임'을 확장, 축소함
    3. threshold: 관찰되는 엘리멘트가 캡쳐 프레임과 교차할때 즉각적으로 반응하지 않게 설정. 
        - 디폴트 0 / threshold:0.5 옵저버 엘리먼트가  50%교차했을때 옵저버 실행
        - threshold:[0,0.2,0.5,1] 겹쳐지는 순간, 20퍼, 50퍼들어왔을때, 다 들어왔을때 반응
```javascript
const config ={
    root:null, //널이면 뷰포트가 디폴트
    rootMargin:'0px',
    threshold: 0.5
};
let observer = new IntersectionObserver(entries=>{

}, config);

// 옵저버에 관찰할 엘리멘트 전달
const sth= document.getElementById('sth dom');
observer.observe(sth);
```
- 한번에 한 엘리먼트만 전달 가능
- 관찰되는 엘리멘트들이 등록될때 옵저버 발생함: 초기화되었다는 의미
  
### Intersection Observer callback
- 콜백은 두개의 인자를 받음
1. 관찰된 엘리멘트들의 배열
2. 옵저버 자기 자신
   
### 1. IntersectionObserverEntry
- 첫벗쨰 인자인 엔트리 배열은 특별한 타입: 미리 정의되고 계산된 속성 집합 제공함
  1. rootBounds: '캡쳐 프레임'에 대한 사각형(root+rootMargin)
  2. boundingClientRect: 관찰되는 엘리멘트 사각형
  3. intersectionRect: 서로 겹쳐지는 캡쳐프레임 영역
  ```
  getBoundingClientRect(), offsetTop, offsetLeft과 
  레이아웃 스레싱(layout thrashing)을 유발하는 다른 비용이 큰 위치 관련 속성 및 메서드 호출 없이도 
  엘리먼트의 위치와 관련된 중요한 정보들을 제공한다는 것이다. 성능에 대한 승리다!
  ```
  4. inIntersectiong : 현재 캡처 프레임에 교차되는지 아닌지 알려줌, 이 값을 전역 플래그에 저장하고 사용
  ```javascript
  let isLeaving = false;
  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // "캡처 프레임"을 '통과'하면 플레그를 설정한다.
        isLeaving = true;
        // 통과한 엔트리로 무언가를 처리한다.
      } else if (isLeaving) {
        // "캡처 프레임" 안에 '존재'한다.
        isLeaving = false;
        // 존재하는 엔트리로 무언가를 처리한다.
      }
    });
  }, config);
  ```
  5. intersectionRatio: 캡쳐프레임 교차 비율
  6. target: 옵저버 함수에 전달되는 오리지널 엘리먼트에 해당 이벤트.타겟과 같음
[명세](https://w3c.github.io/IntersectionObserver/#intersection-observer-entry)

###  2. observer self reference
```javascript
new IntersectionObserver(function(entries, SELF){

})
```
- 관찰 중단 시나리오에서 유용, ex_이미지 레이지 로드, 지연 연결 등 
- unobserve 메소드 제공
---

## 응용하기

### 지연기능
- 브라우저의 뷰포트에 도달할 때까지 캐러셀 지연
- IntersectionObserverEntry 인터페이스의 isIntersecting 파라미터
  ```javascript
    const carousel = document.getElementById('carousel');
    let isLeaving = false;
    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isLeaving = true;
          entry.target.startCarousel();
        } else if (isLeaving) {
          isLeaving = false;
          entry.target.stopCarousel();
        }
      });
    }
    observer.observe(carousel);
  ```
### 에셋 레이지 로드

-이미지에 src속성 넣으면 안됨 data속성 사용!
```html
<img data-src="https://blah-blah.com/foo.jpg">
```
```javascript
const images = document.querySelectorAll('[data-src]');
const config = {...};

let observer =  new IntersectionObserver((entries, self)=> {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            preloadImage(entry.target);
            // 캡쳐프레임에 들어갈때마다 다운로드할 필요없으므로 처리된 이미지는 관찰 멈춘다. = removeEventListerner
            self.unobserve(entry.target)
        }   
        }
    });
},config);

images.forEach(image=>{observer.obsere(image)});

```
- unobserver 대신 완벽하게 해제하는 disconnect()호출도 가능 - 옵저버 관찰하는 것이 유일할때 유용. 

### 현재 영역 표시 메뉴바
```javascript
const pages = document.querySelectorAll('[data-src]');
const config = {...};

let observer =  new IntersectionObserver((entries, self)=> {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            
        }   
        }
    });
},config);

pages.forEach(page=>{observer.obsere(page)});

////
const config = { rootMargin: '-50px 0px -55% 0px' };
// 사용자 고려 측면: 뷰포트의 절반보다 조금 위부터 시작되어야 하고 네비게이션 바 높이도 뺴줘야함
```

#### 참고
IntersectionObserver는 도큐먼트의 포매팅 구조(formatting structure)에 있는 엘리먼트에 대해서만 교차 영역을 감지할 수 있다.
- display: none인 엘리먼트는 감지가 안된다는거?
- opacity: 0 또는 visibility:hidden은 보이지 않더라도 박스가 생성되므로 감지한다.
- 포지션 앱솔루트인 width:0px; height:0px인 엘리먼트는 괜찮다. 부모 엘리먼트의 경계 밖 (음수 margin, 음수 top, 음수 left 등)에 배치되는 경우, 그리고 부모 엘리먼트의 overflow:hidden 속성에 의해 가려져서 감지되지 않는 경우 포매팅 구조 범위에서 벗어나 있다고 판단.


[참조](https://github.com/codepink/codepink.github.com/wiki/%EB%84%88%EB%8A%94-%EB%82%98%EB%A5%BC-%EB%B3%B8%EB%8B%A4:-%EC%A7%80%EC%97%B0-%EB%B0%A9%EB%B2%95,-%EB%A0%88%EC%9D%B4%EC%A7%80-%EB%A1%9C%EB%93%9C%EC%99%80-IntersectionObserver%EC%9D%98-%EB%8F%99%EC%9E%91)