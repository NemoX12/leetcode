var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const res = [];
    
    function backtrack(idx, comb) {
        if (idx === digits.length) {
            res.push(comb);
            return;
        }
        
        for (const letter of digitToLetters[digits[idx]]) {
            backtrack(idx + 1, comb + letter);
        }
    }
    
    backtrack(0, "");
    
    return res;    
};

// Runtime complexity O(3^n * 4^m)
// Space complexity O(3^n * 4^m)
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/1325126141

console.log()