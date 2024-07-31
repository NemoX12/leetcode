var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/missing-number/submissions/1339656395

console.log(missingNumber([3,0,1]))