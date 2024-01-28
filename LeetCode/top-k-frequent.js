/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    if(!k || !nums.length) {
        return []
    }

    const counts = nums.reduce((dict, num) => {
        const count = dict[num]
        if (count) {
            dict[num] = count + 1
        } else {
            dict[num] = 1
        }

        return dict
    }, {})

    return Object
        .entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => +num)
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1,2,3], 1))
console.log(topKFrequent([12], 0))