var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];    
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/climbing-stairs/submissions/1322810309

console.log(climbStairs(2))