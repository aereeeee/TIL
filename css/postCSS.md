# postCSS
- 자바스크립트 기반의 플러그인을 사용하여 CSS 기능을 자동화하는 소프트웨어 개발 도구
- plugin 중 `postCSS preset Emv`

### functional pseudo-classes
- 마치 function처럼 작동함
```css
li:matches(nth-child(even), .target){}

li:not(.target){}
```

### css variables
- variable을 추가하려면 `root`에 저장한다
- `root`는 html 상위의 element
- variables만 있는 파일 만들어서 글로벌하게 사용가능
```css
:root{
    --color:#000;
}

li a{
    color:var(--color);
}
```

### custom selector
- 원하는 엘리먼트 여러개를 하나의 커스텀 셀렉터로 만들 수 있음
- 셀렉터만 있는 파일 만들어서 글로벌하게 사용가능
```css
@custom-selector : --headers h1, h2, h3, h4, h5;
:--headers{
    color:#000;
}
```

### custom media query
```css
/* @custon-media --ipad-size (max-width:850px); */
/* @custon-media --ipad-size (width<=850px); */
@custon-media --ipad-size ( 450px <= width < 850px);
@maeid (--ipad-size){
    body{
        background-color:#000;
    }
}
```
### css4 새로운 속성
- color modification
- color functional
- system ui
```css
h1{
    color:color-mod(#000 lightness(50%));
    color:gray(100);

    font-family: system-ui;
}
```
  - whiteness, lightness, 블렌드도 있음!! 
  - 호버시 색상변환 lightness로 세련되게 

### Nesting rules
- &을 붙여서 네스팅하기!
```css
main{
    background-color:#000;
    & section{
        background-color:#ff0;
        width:40px;
        &li{
            ...
            &:hover{

            }
        }
    }
}
```

### 팁!
- [postcss grid kiss](https://github.com/sylvainpolletvillard/postcss-grid-kiss)
- [flebox froggy](https://flexboxfroggy.com/#ko)
- [grid garden](https://cssgridgarden.com/#ko)