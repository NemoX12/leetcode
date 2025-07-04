var furthestDistanceFromOrigin = function (moves) {
  let cc1 = 0;
  let cc2 = 0;
  for (let c of moves) {
    if (c === "R") cc1++;
    if (c === "L") cc1--;
    if (c === "_") cc2++;
  }
  return Math.abs(cc1) + cc2;
};

// Runtime Complexity O(n)
// Space Complexity O(1)
// https://leetcode.com/problems/furthest-point-from-origin/submissions/1451662900

console.log(furthestDistanceFromOrigin("L_RL__R"));
