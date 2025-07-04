var arrayStringsAreEqual = function(word1, word2) {
    return word1.join("") === word2.join("")
};

// Runtime Complexity O(N + M)
// Space Complexity O(N + M)
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/5296798/11-06

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))