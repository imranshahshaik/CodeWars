/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    // abbaca
    const stack = [];
    for (let ch of s) {
        stack.push(ch)
        if (stack[stack.length-2] == stack[stack.length-1] && stack.length>=2) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.join('');
};


// most optimal or interview ready.
// var removeDuplicates = function(s) {
//     const stack = [];
//     for (let ch of s) {
//         if (stack.length && stack[stack.length - 1] === ch) {
//             stack.pop();
//         } else {
//             stack.push(ch);
//         }
//     }
//     return stack.join('');
// };
