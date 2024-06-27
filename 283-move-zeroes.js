var moveZeroes = function (nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;    
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/move-zeroes/solutions/5377807/27-06-2024/

console.log(moveZeroes([0,1,0,3,12]))