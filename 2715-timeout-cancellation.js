var cancellable = function(fn, args, t) {
    var timeout = setTimeout(() => {
        fn(...args)
    }, t)
    
    var cancelFn = () => clearTimeout(timeout);

    return cancelFn;
};

// Runtime complexity O(1)
// Space complexity O(1)
// https://leetcode.com/problems/timeout-cancellation/solutions/5415474/04-07-2024/