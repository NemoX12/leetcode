var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length;
    
    let baseSatisfaction = 0;
    for (let i = 0; i < n; i++) {
        if (!grumpy[i]) {
            baseSatisfaction += customers[i];
        }
    }
    
    let additionalSatisfaction = 0;
    let maxAdditionalSatisfaction = 0;
    
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i]) {
            additionalSatisfaction += customers[i];
        }
    }
    
    maxAdditionalSatisfaction = additionalSatisfaction;
    
    for (let i = minutes; i < n; i++) {
        if (grumpy[i]) {
            additionalSatisfaction += customers[i];
        }
        if (grumpy[i - minutes]) {
            additionalSatisfaction -= customers[i - minutes];
        }
        
        maxAdditionalSatisfaction = Math.max(maxAdditionalSatisfaction, additionalSatisfaction);
    }
    
    return baseSatisfaction + maxAdditionalSatisfaction;
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5346726/21-06-2024/

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3))
