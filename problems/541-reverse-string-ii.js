var reverseStr = function (s, k) {
  let newStr = "";

  for (let i = 0; i < s.length; i += 2 * k) {
    let part1 = s
      .slice(i, i + k)
      .split("")
      .reverse()
      .join("");

    let part2 = s.slice(i + k, i + 2 * k);

    newStr += part1 + part2;
  }

  return newStr;
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/reverse-string-ii/submissions/1455065305

console.log(reverseStr("abcdefg", 2));
