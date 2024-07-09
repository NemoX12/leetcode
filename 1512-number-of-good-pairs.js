class HashTable {
    constructor() {
        this.table = {};
    }

    add(num) {
        if (this.table[num]) {
            this.table[num].count++;
        } else {
            this.table[num] = { count: 1 };
        }
    }

    getCount(num) {
        return this.table[num] ? this.table[num].count : 0;
    }
}

var numIdenticalPairs = function(nums) {
    let hashTable = new HashTable();
    let goodPairs = 0;

    for (let num of nums) {
        goodPairs += hashTable.getCount(num);
        hashTable.add(num);
    }

    return goodPairs;
};


console.log(numIdenticalPairs([1,2,3,1,1,3]))