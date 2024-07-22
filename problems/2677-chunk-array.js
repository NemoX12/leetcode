var chunk = function (arr, size) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(...[arr.slice(i, i + size)]);
  }

  return newArr;
};

// https://leetcode.com/problems/chunk-array/submissions/1276443766
// Runtime 46ms
// Memory 50.88 MB

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 2));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 1));
