# most-common-word
정규식 사용 입력 스트링을 정제  
for of 문에서 루프 돌며 금지단어 제외하고 카운팅하여 obj객체에 추가  
객체 속성을 배열에 추가, value가 큰 순서로 sorting  
```javascript
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const lowerp=paragraph.replace(/[!\?\.\,\;\']/g,"").toLowerCase();
    const words=lowerp.split(' ');

    var obj={};   
    var sol=[];
    for(let item of words){
        if(banned.includes(item)) continue;
        else if(obj[item]== undefined) obj[item]= 1;
        else ++obj[item];
    }
    
    for(let p in obj) sol[sol.length]= p; 
    sol.sort(function(a, b){    
        return obj[b]-obj[a];
    });
    return sol[0];
    
};
``` 
* `for(let p in obj) sol[sol.length]= p;` 배열에 추가할때 빈 배열의 length를 이용..

---
## better idea
,를 공백으로 바꿈 -> "  "공백 두개 문자생김 - banned 단어와 같이 걸러주기
