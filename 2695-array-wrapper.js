var ArrayWrapper = function (nums) {
    this.nums = nums
};

ArrayWrapper.prototype.valueOf = function () {
    if (this.nums.length == 0) {
        return 0
    } else {
        let sum = 0;
        for (let i of this.nums) {
            sum += i
        }
        return sum
    }
}

ArrayWrapper.prototype.toString = function () {
    return JSON.stringify(this.nums)
}

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/array-wrapper/submissions/1321689292