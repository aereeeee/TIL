# Add two numbers

- sum+L1 -> sum+L2 => new node
- carry가 생기면 다음번 sum에 ++

#### test case  
- 자릿수가 달라도 계산
- 한 배열이 null이여도 계산
- 새로운 자릿수가 추가될 수 있음

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let node = new ListNode();
    let head = node;
    let sum=0;
    let carry=0;
    
    while(l1!==null||l2!==null||sum==1){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return node.next;
};
```