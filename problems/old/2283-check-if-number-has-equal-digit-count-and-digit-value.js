var digitCount = function (num) {
  let res = "";
  for (let i = 0; i < num.length; i++) {
    let reg = new RegExp(`${i}`, "gi");
    let matched = num.match(reg) || [];

    if (matched.length === parseInt(num[i])) {
      res += "t";
    }
  }
  return res.length === num.length;
};

// Runtime complexity O(n^2)
// Space complexity O(n)
// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/submissions/1447979829

console.log(digitCount("1210"));
