var replaceElements = function (arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    if (curr > max) max = curr;
  }

  return arr;
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/5269057/skdjgksjdhgkj/

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
