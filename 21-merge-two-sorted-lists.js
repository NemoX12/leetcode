var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2
    } else if (!list2) {
        return list1
    } else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
};

// Runtime complexity O(m + n)
// Space complexity O(m + n)
// https://leetcode.com/problems/merge-two-sorted-lists/solutions/5372833/26-06-2024/