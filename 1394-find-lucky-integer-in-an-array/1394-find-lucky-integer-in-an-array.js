/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(nums) {
    //value must occur same number of times as its value.
    //track all ints first using map then have a conditional check for value=occurence.
    let map = {}
    for(let i =0; i<nums.length; i++){
        if(map[nums[i]]==undefined){
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]]++;
        }
    }
    let max = -1;
    // let all = Object.entries(map)
    for(let [key, value] of Object.entries(map)){
        key = Number(key)
        // since keys are stored as strings in objects convert them to numbers
        if((key) ==value && max<(key)) max = key;
    }
    return max;
};
