var numIdenticalPairs = function(nums) {
    let good = 0

    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) good++
        }
    }
    
    return good
};

// Runtime complexity O(n^2)
// Space complexity O(1)
// https://leetcode.com/problems/number-of-good-pairs/solutions/5440568/08-07-2024/

console.log(numIdenticalPairs([1,2,3,1,1,3]))