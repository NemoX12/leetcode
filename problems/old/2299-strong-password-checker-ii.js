var strongPasswordCheckerII = function(password) {
    const regex = /^(?=.*[0-9])(?!.*(.)\1+)(?=.*[!-\/:-@[-`{-~])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d!-\/:-@[-`{-~]{8,}/g
    return regex.test(password)
};

// O(n)
// O(1)
// https://leetcode.com/problems/strong-password-checker-ii/submissions/1347679557

console.log(strongPasswordCheckerII("IloveLe3tcode!"))