/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // repeat no. of times ure asked every char.
    const stack = [];
    for(let ch of s){
        if(ch==']'){
            let substr = ''
            while(stack[stack.length-1]!='['){
                substr = stack.pop() + substr
            }
            stack.pop()
            let k = ''
            // while(stack[stack.length-1]=='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'){
                while(stack[stack.length-1] >= '0' && stack[stack.length-1] <= '9'){
                k = stack.pop() +k
            }
            stack.push(substr.repeat(+k))
        }
        else{
            stack.push(ch)
        }
    }
    return stack.join('')
};