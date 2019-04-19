# Two Sum
[문제](https://leetcode.com/problems/two-sum/)

```javascript
var twoSum = function(nums, target) {
    const res=[];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                res.push(i);
                res.push(j);
                return res;
            }
        }
    }
};
```


* runtime best
```javascript
var twoSum = function(nums, target) {
    for (key in nums) {
        var tar = target - nums[key];
        console.log(parseInt(key)+1)
        if (nums.slice(parseInt(key)+1,nums.length).includes(tar)){
            return [key,nums.slice(parseInt(key)+1,nums.length).indexOf(tar)+parseInt(key)+1]
        }
    }   
};
```