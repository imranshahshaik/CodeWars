/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {')':'(','}':'{',']':'['} //() stack= (
    const stack = []
    for(char of s){
        if(char in map){
            if(stack.length == 0){
                return false;
            }
            else{
                if(stack[stack.length-1]==map[char]){
                    stack.pop();
                    
                }
                else{
                    return false;
                }
            }
        }
        else{
            stack.push(char)
        }
    }
   if(stack.length>0){
    return false
   }
   return true;
};