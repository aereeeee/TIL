# stack
Last In First Out

## method
- push()
- pop()
- peek()
- isEmpty()
- clear()
- size()
  
## stack class
```javascript
function Stack(){
    let items=[]; //const or let?

    this.push = (elem) => {
        items.push(elem); //js array.push method 사용
    };
    this.pop = () => {
        return items.pop() //js array.pop method 사용
    };
    this.peek = () => {
        return items[items.length-1];
    };    
    this.isEmpty = () => {
        return items.length ==0;
    };    
    this.clear = () => {
        items=[];
    };
    this.size = () => {
        return items.length;
    };
    this.print = () => {
        console.log(items.toString());
    };
}

```

## using stack class
> 10진수를 2진수로 바꾸기
>> -> stack에 나머지 넣고 결과 pop
  
```javascript
function divideBy2 = (num) => {
    let modStack=new Stack();
    let modnum;
    let binaryString='';

    while(num>0){
        modnum=Math.floor(num%2);
        modStack.push(modnum);
        num = Math.floor(num/2);
    }

    while(!modStack.isEmpty()){
        binaryString += modStack.pop().toString();
    }

    return binaryString;
}
```

>> 10진수를 n진수로 바꾸기
```javascript
function baseconverter = ({num,n}) => {
    let modStack = new Stack();
    let modnum;
    let baseString='';
    const digits='0123456789ABCDEF';

    while(num>0){
        modnum=Math.floor(num%n);
        modStack.push(modnum);
        num=Math.floor(num/n);
    }
    while(!modStack.isEmpty()){
        baseString += modStack.pop().toString();
    }
    return baseString;
}
```

---
### Q
1. 클래스는 const let 무엇으로 선언..?
    - es6에서 class문법 추가됨 
```javascript
class Foo {}

const foo = new Foo();
```
- 위 코드에서 new 연산자와 함께 호출한 Foo는 클래스의 이름이 아니라 constructor(생성자)이다. 표현식이 아닌 선언식으로 정의한 클래스의 이름은 constructor와 동일하다.
  
2. array const선언 시 원소 다루는 것 자유?까먹음