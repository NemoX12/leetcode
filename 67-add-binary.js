var addBinary = function(a, b) {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2)
}

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/add-binary/solutions/5327465/17-06-2024/

console.log(addBinary(11, 1))