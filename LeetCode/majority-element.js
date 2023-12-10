/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    return nums.sort()[Math.floor(nums.length / 2)]
};

console.log(majorityElement([ 3, 2, 3 ]));
console.log(majorityElement([ 2, 2, 1, 1, 1, 2, 2 ]));