var sortArray = function (nums) {
    const heapify = (nums, n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest != i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];
            heapify(nums, n, largest);
        }
    };

    let n = nums.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(nums, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        heapify(nums, i, 0);
    }

    return nums;
};

// Runtime complexity O(n logn)
// Space complexity O(1)
// https://leetcode.com/problems/sort-an-array/submissions/1332890353?envType=daily-question&envId=2024-07-25

console.log(sortArray([5,2,3,1]))