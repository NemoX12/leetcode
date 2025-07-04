var isHappy = function(n) {
    const getNext = (number) => {
        let totalSum = 0;
        while (number > 0) {
            let digit = number % 10;
            totalSum += digit * digit;
            number = Math.floor(number / 10);
        }
        return totalSum;
    }

    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};

// Runtime complexity O(log n)
// Space complexity O(1)
// https://leetcode.com/problems/happy-number/submissions/1337258873

console.log(isHappy(19))