var countSeniors = function(details) {
    let total = []

    for (let i = 0; i < details.length; i++) {
        let temp = parseInt(`${details[i][11]}${details[i][12]}`)
        if (temp > 60) {
            total.push(temp)
        }
    }

    return total.length
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/number-of-senior-citizens/submissions/1340670298?envType=daily-question&envId=2024-08-01

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]))