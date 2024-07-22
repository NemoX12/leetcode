var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

// Runtime complexity O(log n)
// Space complexity O(1)
// https://leetcode.com/problems/search-insert-position/solutions/5367412/25-06-2024/

console.log(searchInsert([1,3,5,2,6], 2))