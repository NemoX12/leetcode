var countElements = function (nums) {
  let total = [];

  let max = Math.max(...nums);
  let min = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max && nums[i] > min) {
      total.push(nums[i]);
    }
  }

  return total.length;
};

console.log(countElements([11, 7, 2, 15]));

// Time Complexity O(n)
// Space Complexity O(1)
// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/submissions/1447962744
