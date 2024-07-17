var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
      return -1;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (haystack.substring(i, i + needle.length) === needle) {
        return i;
      }
    }
    
    return -1;    
};

// Runtime complexity O(n * m)
// Space complexity O(1)
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1324042607

console.log(strStr("sadbutsad", "sad"))