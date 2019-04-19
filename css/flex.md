# flex
* 부모 컨테이너 요소에 display:flex 및 설정 적용

```css
display:flex;
justify-content:center;
align-items:center;

flex-directiont:row;
```
* 적용가능 프로퍼티들 space-around, space-between, flex-end, flex-start ...
* direction에 적용가능 프로퍼티  row, column, row-reverse, column-reverse..
* justify content는 direction이 디폴트일 때 수평에 대한 정렬!
* align items는 그 반대에 대한 정렬! 디폴트로 수직!

---
* 자식 각각을 정렬 할 때
```css
align-self: flex-end;
```
* 디폴트일때 각각의 자식을 수직에 대해 정렬함  