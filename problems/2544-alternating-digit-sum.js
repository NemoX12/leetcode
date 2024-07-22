var alternateDigitSum = function(n) {
    let num = n.toString()
    let result = 0

    for (let i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            result += Number(num[i])
        } else {
            result -= Number(num[i])
        }
    }

    return result
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/alternating-digit-sum/solutions/5308715/13-06-2024/

console.log(alternateDigitSum(521))