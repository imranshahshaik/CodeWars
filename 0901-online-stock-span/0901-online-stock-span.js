
var StockSpanner = function() {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    const st = this.stack
    while(st.length && price>=st[st.length-1][0]){
        span+=st[st.length-1][1]
        st.pop();
    }

    if(!st.length || price<st[st.length-1][0]){
        st.push([price,span])
    }
    return span;
}

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */