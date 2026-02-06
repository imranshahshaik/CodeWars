/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
// formula is iff height[i]i.e height >both side max then min[both max] - height[i]
    const n = height.length
    let total = 0;
    const prefixMax = [];
    const suffixMax = [];

    let preMax = height[0]
    let sufMax = height[n-1]
    
    prefixMax.push(height[0])
    for(let i = 1; i<=n-1; i++){
        preMax = height[i]>preMax? height[i]: preMax
        prefixMax.push(preMax)
    }
    
    suffixMax[n-1]=height[n-1]
    for(let i = n-2; i>=0; i--){
        sufMax = height[i]>sufMax? height[i]:sufMax;
        suffixMax[i]=(sufMax)
    }
    for(let i = 0; i<height.length-1; i++){
        if(height[i]<prefixMax[i] && height[i]<suffixMax[i]) {
            total+= Math.min(prefixMax[i],suffixMax[i]) - height[i]
        }
    }
    return total;
};