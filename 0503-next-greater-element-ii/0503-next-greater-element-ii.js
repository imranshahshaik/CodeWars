/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    // need to replicate same array using 2*n -1 iterations & i%n as index
    // remaining same logic
    const n = nums.length
    const array = new Array(nums.length).fill(-1)
    const stack = [] //1,2,1,1,2,1
    for(let i = 2*n-1; i>=0; i--){
        while(stack.length>0&&nums[i%n]>=stack[stack.length-1]){
            stack.pop()
        }
        if(!stack.length){
            stack.push(nums[i%n]);
            continue;
        }
        if(nums[i%n]<stack[stack.length-1]){
            array[i%n]=stack[stack.length-1];
            stack.push(nums[i%n])
        }

    }
    return array;
};