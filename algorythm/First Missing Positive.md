# Merge Two Sorted Lists
[문제](https://leetcode.com/problems/first-missing-positive/)

* indexOf를 이용하여 flag를 하나씩 더해가며 배열에 존재하는지 확인
* indexOf로 인해 O(n2)
* 공간복잡도는 가장 선방..
  
```javascript
var firstMissingPositive = function(nums) {
    if(nums.length===0) return 1;
    var flag = 1;
    while(nums.indexOf(flag)!==-1){
      flag++;
    }
    return flag;
};
```

* 런타임 1위
* includes()사용
  
```javascript
var firstMissingPositive = function(nums) {
    if(nums.length===0) return 1
    
    let min=1
    while(nums.includes(min)){
        min++
    }
    
    return min
};
```