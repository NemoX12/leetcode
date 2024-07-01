var fib = function(n) {
    let arr = [0,1];
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n];
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/fibonacci-number/solutions/5396717/01-07-2024/

console.log(fib(2))