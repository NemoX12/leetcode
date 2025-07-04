var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let j = nums2.indexOf(nums1[i]); 
        
        for (let k = j + 1; k < nums2.length; k++) {
            if (nums2[k] > nums1[i]) {
                result.push(nums2[k]);
                found = true;
                break;
            }
        }
        
        if (!found) {
            result.push(-1);
        }
    }
    
    return result;
};

// Runtime complexity O(n * m)
// Space complexity O(n)
// https://leetcode.com/problems/next-greater-element-i/solutions/5351842/22-06-2024/

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))