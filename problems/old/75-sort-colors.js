var sortColors = function (nums) {
    const output = function (n) {
        for (let i = 0; i < n.length; i++) {
            let nti = n[i];
            let s = i - 1;
            while (s >= 0 && n[s] > nti) {
                n[s + 1] = n[s];
                s = s - 1;
            }
            n[s + 1] = nti;
        }
        return n;
    }

    return output(nums)
};

// Runtime complexity O(n^2)
// Space complexity O(1)
// https://leetcode.com/problems/sort-colors/solutions/5302354/12-06-2024/

console.log(sortColors([2,0,2,1,1,0]))