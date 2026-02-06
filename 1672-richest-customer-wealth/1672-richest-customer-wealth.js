/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    for (acc of accounts){
        let sum = 0
        for(a of acc){
            sum+=a
        }
        max = max>sum?max:sum
    }
    return max
};