var kthDistinct = function(arr, k) {
    const frequency = {};
    for (const str of arr) {
        frequency[str] = (frequency[str] || 0) + 1;
    }

    const distinct = [];
    for (const str of arr) {
        if (frequency[str] === 1) {
        distinct.push(str);
        }
    }

    return distinct.length >= k ? distinct[k - 1] : "";
};

// O(n)
// O(n)
// https://leetcode.com/problems/kth-distinct-string-in-an-array/submissions/1345279201?envType=daily-question&envId=2024-08-05

console.log(kthDistinct(["d","b","c","b","c","a"], 2))