var myPow = function (x, n) {
    function pow(x, n) {
        if (x === 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }

        let res = pow(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) {
            return res * x;
        }

        return res;
    }

    let ans = pow(x, Math.abs(n));

    if (n >= 0) {
        return ans;
    }

    return 1 / ans;
};

// O(log n)
// O(log n)
// https://leetcode.com/problems/powx-n/submissions/1355305838

console.log(myPow(2.00000, 10))