var subtractProductAndSum = function (n) {
  n = Array.from(String(n), Number);

  const product = n.reduce((prev, curr) => prev * curr);
  const sum = n.reduce((prev, curr) => prev + curr);

  return product - sum;
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/1449657019

console.log(subtractProductAndSum(234));
