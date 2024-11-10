var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    let uniqueChars = new Set(s);
    return uniqueChars.size < s.length;
  }

  let diffs = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffs.push(i);
    }
  }

  return (
    diffs.length === 2 &&
    s[diffs[0]] === goal[diffs[1]] &&
    s[diffs[1]] === goal[diffs[0]]
  );
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/buddy-strings/submissions/1448752800

console.log(buddyStrings("ab", "ba")); // true
console.log(buddyStrings("ab", "ab")); // false
console.log(buddyStrings("aa", "aa")); // true
console.log(buddyStrings("abcd", "badc")); // false
