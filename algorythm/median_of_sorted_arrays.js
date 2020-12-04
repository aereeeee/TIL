/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/solution/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
};



/**
 * O(log(min(m,n)) approach
 * https://www.youtube.com/watch?v=LPFhl65R7ww&t=1013s
 * 
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1)
  }
  var l = 0;
  var r = len1;
  while (l <= r) {
    var mid1 = Math.floor((l + r) / 2);
    var mid2 = Math.floor((len1 + len2 + 1) / 2) - mid1;

    var left1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    var right1 = mid1 === len1 ? Infinity : nums1[mid1];
    var left2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    var right2 = mid2 === len2 ? Infinity : nums2[mid2];

    if (left1 <= right2 && left2 <= right1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        return Math.max(left1, left2)
      }
    } else if (left1 > right2) {
      r = mid1 - 1;
    } else {
      l = mid1 + 1;
    }
  }
};