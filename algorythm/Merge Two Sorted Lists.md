# Merge Two Sorted Lists
[문제](https://leetcode.com/problems/merge-two-sorted-lists/)

* 노드가 연결된 리스트 형태
* l1.next는 앞의 노드를 제거함을 의미
* 재귀로 풀기

```javascript
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
    
};
```
