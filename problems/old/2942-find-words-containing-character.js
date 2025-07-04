var findWordsContaining = function (words, x) {
    let count = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].indexOf(x) !== -1) {
        count.push(i);
      }
    }
    return count;
  };

// Runtime complexity O(n * m)
// Space complexity O(n)
// https://leetcode.com/problems/find-words-containing-character/solutions/5409580/03-07-2024

console.log(findWordsContaining(["leet","code"], "e"))