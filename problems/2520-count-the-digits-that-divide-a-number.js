var countDigits = function (num) {
  let string = `${num}`;
  let res = 0;

  for (let i = 0; i < string.length; i++) {
    if (num % parseInt(string[i]) === 0) {
      res++;
    }
  }

  return res;
};

// Runtime complexity O(log n)
// Space complexity O(log n)
// https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/1448451423

console.log(countDigits(1248));
