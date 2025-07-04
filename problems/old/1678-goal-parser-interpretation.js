var interpret = function (command) {
    let res = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "(" && command[i + 1] === ")") {
            res += "o";
        } else if (command[i] === "(" && command[i + 1] === "a") {
            res += "al";
        } else if (command[i] === "G") {
            res += "G";
        }
    }
    return res;
};

// Runtime complexity O(n)
// Space complexity O(1)
// https://leetcode.com/problems/goal-parser-interpretation/solutions/5403018/02-07-2024/

console.log(interpret("G()(al)"))