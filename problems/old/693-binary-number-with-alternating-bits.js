var hasAlternatingBits = function(n) {
    let s = "";
    while (n > 0) {
        s += n % 2
        n = n >> 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i - 1]) return false;
    }

    return true;
};

// O(log n)
// O(log n)
// https://leetcode.com/problems/binary-number-with-alternating-bits/submissions/1348820701

console.log(hasAlternatingBits(5))