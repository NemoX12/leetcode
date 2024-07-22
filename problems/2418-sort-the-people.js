var sortPeople = function(names, heights) {
    let obj = {}
    let ans = []

    for (let i = 0; i < heights.length; i++) {
        obj[heights[i]] = names[i]
    }

    for (let i in obj) {
        ans.push(obj[i])
    }

    return ans.reverse()
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/sort-the-people/submissions/1329440018?envType=daily-question&envId=2024-07-22

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))