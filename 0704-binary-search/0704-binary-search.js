/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0,h=nums.length;
    while(l<=h){
        let mid = Math.floor((l+h)/2);
        if(target == nums[mid]) return mid;
        else if(target> nums[mid]){
            l = mid+1;
        }

        else{
            h=mid -1;
        }
    }
    return -1;
};