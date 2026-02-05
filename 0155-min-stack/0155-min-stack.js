
var MinStack = function () {



    
    this.arr = [];
    this.minArray = [];
    this.peek = -1;
    this.min;
  
};

/** 
 * @param {string} val
 * @return {string}
 */
MinStack.prototype.push = function(val) {
    if(this.peek == -1) {this.min = val;
    this.minArray.push(val)}
   this.peek++;
    this.arr.push(val)
    
    if (val <= this.min) {
        this.minArray.push(val)
        this.min = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.peek == -1) {
        return 0;
    }
    let rem = this.arr.pop();
    if (rem == this.min) {
         this.minArray.pop()
        this.min = this.minArray[this.minArray.length -1];
    }
    this.peek--;
    return 0;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.peek == -1) return 0;
    return this.arr[this.peek];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // if(this.min == undefined) return 0;
    this.min = this.minArray.length
  ? this.minArray[this.minArray.length - 1]
  : 0;
return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 