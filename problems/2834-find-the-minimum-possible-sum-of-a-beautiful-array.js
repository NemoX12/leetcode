var minimumPossibleSum = function(n, target) {
    const MOD = 1e9 + 7;
    let sum = 0;
    let count = 0;
    let number = 1;
    let added = new Set();

    while (count < n) {
        if (!added.has(target - number)) {
            sum = (sum + number) % MOD;
            count++;
            added.add(number);
        }
        number++;
    }

    return sum;
};

// Bugged on leetcode

console.log(minimumPossibleSum(2, 3))