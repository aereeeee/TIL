/**
 * https://leetcode.com/problems/trapping-rain-water/
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let acc = 0;

  if (height.length < 3) return acc;

  const heighest = height.reduce((max, cur) => {
    if (max <= cur) {
      return cur;
    } else {
      acc += max - cur;
      return max;
    }
  });

  height.reduceRight((max, cur) => {
    if (max === heighest) return max;
    if (max <= cur) {
      acc -= heighest - max;
      return cur;
    } else {
      acc += max - heighest;
      return max;
    }
  });

  return acc;
};

// fastest
// var trap = function (height) {
//   let leftMax = 0
//   let left = 0
//   let count = 0
//   let right = height.length - 1
//   let rightMax = 0

//   while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] > leftMax) leftMax = height[left]
//       else count += leftMax - height[left]
//       left++
//     } else {
//       if (height[right] > rightMax) rightMax = height[right]
//       else count += rightMax - height[right]
//       right--
//     }
//   }
//   return count
// };