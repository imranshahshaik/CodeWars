/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
        const pusher = []
    let popper = 0;
    for (let item of pushed) {
        pusher.push(item)
        while (popper < popped.length && pusher[pusher.length - 1] == popped[popper]) {
            pusher.pop(); popper++;
        }
    }
    return pusher.length==0
};