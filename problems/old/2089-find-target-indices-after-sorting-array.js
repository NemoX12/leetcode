var targetIndices = function (nums, target) {
    let found = []

    for (let i = 0; i < nums.length; i++) {
        let nti = nums[i];
        let s = i - 1;

        while (s >= 0 && nums[s] > nti) {
            nums[s + 1] = nums[s];
            s = s - 1;
        }

        nums[s + 1] = nti;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            found.push(i)
        }
    }

    return found
};

// Runtime complexity O(n^2)
// Space complexity O(1)
// https://leetcode.com/problems/find-target-indices-after-sorting-array/submissions/1331807769

console.log(targetIndices([1,2,5,2,3], 2))