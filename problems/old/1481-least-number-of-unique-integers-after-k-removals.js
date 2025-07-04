var findLeastNumOfUniqueInts = function(arr, k) {
    const frequencyMap = new Map();
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const frequencies = Array.from(frequencyMap.values()).sort((a, b) => a - b);
    let uniqueCount = frequencyMap.size;

    let i = 0;

    while (k > 0 && i < frequencies.length) {
        if (frequencies[i] <= k) {
            k -= frequencies[i];
            uniqueCount--;
        } else {
            break;
        }

        i++;
    }

    return uniqueCount;
};

// Runtime complexity O(n logn)
// Space complexity O(n)
// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/submissions/1338370395

console.log(findLeastNumOfUniqueInts([5,5,4], 1))