var frequencySort = function (nums) {
    let count = Array(201).fill(0);

    nums.forEach(num => {
        count[num + 100]++;
    });

    return nums.sort((a, b) => {
        if (count[a + 100] === count[b + 100]) {
            return b - a;
        }
        return count[a + 100] - count[b + 100];
    });
};

// Runtime complexity O(log n)
// Space complexity O(1)
// https://leetcode.com/problems/sort-array-by-increasing-frequency/submissions/1330567713?envType=daily-question&envId=2024-07-23

console.log(frequencySort([1,1,2,2,2,3]))