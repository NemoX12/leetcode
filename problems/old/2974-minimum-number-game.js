var numberGame = function(nums) {
  let sortedNums = nums.sort((a,b) => a - b)
  let ans = []
  for(let i = 0; i < sortedNums.length; i++) {
      if(i === 0 || i % 2 === 0) {
          ans.push(sortedNums[i + 1])
      } else if(i % 2 === 1 ) {
          ans.push(sortedNums[i - 1])
      }
  }
  return ans
};

// Runtime complexity O(n logn)
// Space complexity O(n)
// https://leetcode.com/problems/minimum-number-game/solutions/5362286/24-06-2024/

console.log(numberGame([5,4,2,3]))