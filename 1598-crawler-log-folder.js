var minOperations = function (logs) {
    let paths_stack = [];

    for (let log of logs) {
        if (log === "../") {
            if (paths_stack.length > 0) {
                paths_stack.pop();
            }
        } else if (log !== "./") {
            paths_stack.push(log);
        }
    }

    return paths_stack.length;
};

// Runtime complexity O(n)
// Space complexity O(n)
// https://leetcode.com/problems/crawler-log-folder/submissions/1316324175?envType=daily-question&envId=2024-07-10

console.log(minOperations(["d1/","d2/","../","d21/","./"]))