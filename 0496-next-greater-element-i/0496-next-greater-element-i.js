/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const array = [] //1,3,4,2
    const stack = []
    for (let i = nums2.length - 1; i >= 0; i--) {
        if (!stack.length) { //
            array[i] = -1
            stack.push(nums2[i])
            continue;
        }

        while (nums2[i] >= stack[stack.length - 1]) {
            stack.pop();
            if (!stack.length) {
                stack.push(nums2[i]);
                array[i] = -1;
                break;
            }
        }

        if (nums2[i] < stack[stack.length - 1]) {
            array[i] = stack[stack.length - 1]
            stack.push(nums2[i])
        }
    }
 //3,4,-1,-1 .. [1,3,4,2] for [4,1,2] //-1,3,-1
 const map = new Map();
    for(let i in array){
        map.set(nums2[i], array[i]) //{1:3,3:4,4:-1,2:-1}
    }
const result = []
    for(let i of nums1){ //-1,3,-1
        result.push(map.get(i))
    }
    return result;
    // const result = []
    // const map = new Map()
    // for(let i = 0;i<nums2.length; i++){
    //     map.set(nums2[i],i)
    // }

    // for(let i = 0; i<nums1.length; i++){ //2,4      1,2,3,4
    //     for(let j = map.get(nums1[i]); j<nums2.length; j++){
    //         if(nums1[i]<nums2[j]) {result.push(nums2[j]); break;}
    //         if(j==nums2.length-1) result.push(-1)
    //     }
    // }
    // return result
};