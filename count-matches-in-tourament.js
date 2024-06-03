var numberOfMatches = function (n, m = 0) {
  if (n < 2) {
    return m;
  }

  if (n % 2 !== 0) {
    m += (n - 1) / 2;
    n = (n - 1) / 2 + 1;
  } else {
    m += n / 2;
    n = n / 2;
  }

  return numberOfMatches(n, m);
};

console.log(numberOfMatches(7));
