// *Variables*
// Create a variable and console log the value

// Create a variable, add 10 to it, and alert the value

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function alert(){
    let n = 15;
    let nums = [10,2,3,4]
    let carry =0
    for(let i= 0; i+1<nums.length; i++){
        carry = carry + nums[i] - nums[i+1]

    }
    console.log(n -carry)
}
// alert()

// Create a function that divides one number by another and returns the remainder
function divider(){
    const dividend = 50
    const divisor = 200 
    console.log(divisor%dividend)
}
// divider()
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    let sum = a+b
    if(sum>50){
        console.log('jumanji!')
    }
}
// jumanji(10,40)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c){
    let multiply = a*b*c
    if (multiply %3 ==0){
        console.log('zebra')
    }
}
// zebra(1,4,5)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function pattern(word, num){
    for(let i = 0; i<num; i++){
        console.log(word)
    }
}
pattern('imran', 5)