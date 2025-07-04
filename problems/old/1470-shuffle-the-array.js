var shuffle = function(nums, n) {
  let second = nums.slice(n);
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(nums[i], second[i]);
  }

  return newArr;
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/shuffle-the-array/solutions/5341631/20-06-2024/

console.log(shuffle([2,5,1,3,4,7], 3))