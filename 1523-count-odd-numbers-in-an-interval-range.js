var countOdds = function (low, high, i = 0) {
  if (low > high + 1) return i;

  if (low % 2 !== 0) {
    i++;
  }

  return countOdds((low += 1), high, i);
};

// Time Complexity: O(1)
// Space Complexity: O(1)
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/5258866/one-line-code-beats-97-js/

console.log(countOdds(3, 7));
