/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // area = height* width
    // width = (nse-pse-1)
    // so 2 sub problems nge etc and one loop to calculate them.
    const n = heights.length;
    const pse = []
    const nse = []
    const nstack = []
    for(let i=n-1; i>=0; i--){ 
       while(nstack.length && heights[i]<=heights[nstack[nstack.length-1]]){
        nstack.pop()
       }
       if(!nstack.length){
        nse[i]=n
       }
       else{
        nse[i] = nstack[nstack.length-1]
       }
        nstack.push(i)
  
    }
   const pstack = []
    for(let i=0; i<n; i++){ 
       while(pstack.length && heights[i]<=heights[pstack[pstack.length-1]]){
        pstack.pop()
       }
       if(!pstack.length){
        pse[i]=-1
       }
       else{
        pse[i] = pstack[pstack.length-1]
       }
        pstack.push(i)
  
    }

    let max = heights[0]
    for(let i in heights){
        let area;
        area = heights[i]*(nse[i]-pse[i]-1)
        if(area>max) max = area;
    }
    return max;
};