var heightChecker = function (heights) {
  let incorrect = 0;
  let expected = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      incorrect += 1;
    }
  }

  return incorrect;
};

// Runtime Complexity O(n logn)
// Space Complexity O(n)
// https://leetcode.com/problems/height-checker/solutions/5289530/dasdasdasdas/

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
