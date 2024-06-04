var countOdds = function (low, high, i = 0) {
  return low % 2 === 0 && high % 2 === 0
    ? Math.floor((high - low) / 2)
    : Math.ceil((high - low + 1) / 2);
};

// Time Complexity: O(1)
// Space Complexity: O(1)
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/5258866/one-line-code-beats-97-js/

console.log(countOdds(3, 7));
