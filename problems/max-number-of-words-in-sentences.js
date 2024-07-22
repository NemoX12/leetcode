var mostWordsFound = function (sentences) {
  let max = [];

  for (let i = 0; i < sentences.length; i++) {
    let temp = 0;
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        temp += 1;
      }
    }
    max.push((temp += 1));
  }

  return Math.max(...max);
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
