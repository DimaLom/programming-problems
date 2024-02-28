/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function (nums) {
    const result = []
    
    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    
    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    
    return result
};
console.log('[1, 2, 3, 4]', productExceptSelf([1, 2, 3, 4]))
console.log('[-1, 1, 0, -3, 3]', productExceptSelf([-1, 1, 0, -3, 3]))
