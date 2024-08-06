var applyOperations = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }

    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] !== 0) {
            i++, j++;
        } else {
            if (nums[j] !== 0) {
                nums[i] = nums[j];
                nums[j] = 0;
                i++, j++;
            } else {
                j++;
            }
        }
    }

    return nums;
};

// O(n)
// O(1)
// https://leetcode.com/problems/apply-operations-to-an-array/submissions/1346539050

console.log(applyOperations([1,2,2,1,1,0]))