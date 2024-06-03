var scoreOfString = function (s) {
  const word = Array.from(s);
  let temp = [];

  for (let i = 0; i < word.length; i++) {
    let l = word[i].charCodeAt(0);
    let r = word[i + 1] ? word[i + 1].charCodeAt(0) : 0;

    if (word[i + 1]) {
      temp.push(Math.abs(l - r));
    }
  }

  return temp.reduce((a, b) => a + b);
};

console.log(scoreOfString("hello"));
