var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }

    return arr
};

// O(n)
// O(1)
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/1353046356

console.log(map([1,2,3], function plusone(n) { return n + 1; }))