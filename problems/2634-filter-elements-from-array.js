var filter = function (arr, fn) {
    let filtered = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) filtered.push(arr[i]);
    }

    return filtered
};

// O(n)
// O(1)
// https://leetcode.com/problems/filter-elements-from-array/submissions/1354271238

console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }))