var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    return value1 + value2;
};

// Runtime complexity O(1)
// Space complexity O(1)
// https://leetcode.com/problems/add-two-promises/submissions/1317530992