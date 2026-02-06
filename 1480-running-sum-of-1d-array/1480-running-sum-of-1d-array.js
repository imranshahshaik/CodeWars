/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    let run = []
    for(num of nums){
        sum = sum + num
        run.push(sum)
    }
    return run
};