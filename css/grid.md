# grid

- 부모 컨테이너에 그리드 속성을 적용하면 자식 박스들은 그리드에 맞추어 정렬된다.
- column은 *가로* row는 *세로* 방향!!

### 기본속성
**부모**에게 적용해야한다.

```css
grid-template-columns: 30px 50px;
grid-tempalte-rows: 30px 12px;
grid-gap: 5px;
```
* 몇 열 몇 행인지 각 행이 얼만큼의 크기를 가지는지 서술해준다.

```css
grid-auto-columns: 60px;
grid-auto-rows: 60px;

grid-auto-flow: row || column
```
* 템플릿으로 정하지 않은 셀들에 대해서 자동으로 얼만큼의 크기를 가질지 설정해준다.
* 오토 플로우의 디폴트는 로우이다. 대부분의 웹은 위에서 아래로 흐르기 때문.
* 오토 플로우는 오토로 설정된 셀들을 열과 행 중 무엇으로 처리할지 결정해준다.

---
### 그리드 에리어
* 부모에게 적용
```css
grid-template-areas: "header header header" "content content sidebar" "content content sidebar" "footer footer footer";
```
* 자식에게 적용
```css
grid-area: header;
```
* 자식들의 순서에 상관없이 지정한 에리어대로 만들어준다.
* auto-rows로 높이를 정해줄 필요있을 수도
  
---
### fr 단위
* fr은 일단 차지할 수 있는 최대크기를 내가 분배한 대로 나누어 갖는 것.
* 이제 % 쎄굿바
    
---
### repeat()
* 똑같은 형태로 반복되는 셀 설정할때 유용
* 부모에게 그리드 템플릿같은 설정 적용할때 사용
```css
grid-template-columns: repeat(3, 1fr) 4fr;
```
  
---
### minmax()
* 1개 셀에 대해서 가질수 있는 최소 최대크기 정해줌
```css
grid-template-columns: minmax(400px, 2fr) repeat(3, 1fr);

grid-template-columns: max-content repeat(3, 1fr);
grid-template-columns: min-content repeat(3, 1fr);
```
* 첫번째 셀에게 민맥스적용
* max-content min-content는 셀 내부의 컨텐츠 크기만큼 커지던지 컨텐츠의 최소가능크기만큼 작아지던지 설정
    
---
### auto-fit, auto-fill
* repeat()의 첫번째 인자 즉 셀 개수자리에 적용하는 syntax
* `fit`은 지금 있는 자식의 개수만큼 반복하고 너비는 자동 조절된다.
* `fill`은 너비는 고정, 부모를 꽉 채울 수 있는 자식의 개수만큼 유령 자식도 만들어서 반복한다.

```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

```
* 개꿀
* 개수는 자식 만큼, 크기는 자동 반응형
  
---
## 정렬하기
(디폴트 상태일 때)
- `justify`는 수평에 대해 정렬
- `align`은 수직에 대해 정렬
- `place`는 두개 합쳐서 `align justify`

### ~~content
* 부모요소에 대해 자식들이 수평, 수직 정렬
  
### ~~~items
* 자식 요소 각각이 컨테이너가 되어 내부의 컨텐츠들이 수평, 수직 정렬

### ~~~self
* **자식**에게 적용하는 정렬속성으로 적용한 자식 하나만 수평 수직 정렬 적용됨
  
---
### 셀 자리차지하기
* 각각의 **자식**에게 적용
* 자리차지하게 될때 비는 공간은 `grid-auto-flow`에 `dense, row dense, column dense` 프로퍼티를 사용하여 처리
```css
grid-row:1 / -1;
grid-column:span3;

grid-column-start:1;
grid-column-end:-1;

/* row start, column start, row endm column end;*/
grid-area: 2 / 1 / 4 / -1;

```
* 어느 갭라인에서부터 어느 갭라인까지냐! 각각의 칸에 특정 사이즈 설정할때 사용
* 1/-1은 처음부터 끝까지
* span숫자로 사이즈 정해줄수 있음
* start, end붙여서 풀어쓸수 잇음
  
* grid-area는 한칸이 라인갭 어디서부터 어디까지 차지할지 설정
   
### 갭라인에 이름붙이기
```css
grid-template-columns:[fistline]1fr[secondline]1fr;

```
* 이름붙여서 grid-row, grid-columns 에 사용