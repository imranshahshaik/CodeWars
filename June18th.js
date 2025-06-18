//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function counter (num){
    let array = []
    for(let i = 1; i<=num; i++){
        array.push(i)

    }
    document.querySelector('body').textContent = array.join(', ')
    console.log(array)
}
counter(5)

//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ['interstellar', 'inception', 'triangle', 'predestination']
const movieTitle = document.querySelector('h2')
movieTitle.textContent = movies.join(', ')
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const nums = [1,2,3]
const updatedNums = nums.map(num=>num+3)
const h1 = document.createElement('h1')
document.body.append(h1)
h1.textContent = updatedNums.join(', ')
//Find the average of all the numbers from question three

const avg = nums.reduce((sum,num)=>sum +num, )
document.querySelector('span').innerText = avg


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzbuzz (num){
    for(let i = 1; i <=num; i++){ 

    if(i % 3==0 && i %5==0){
        console.log('fizzbuzz')
    }
    else if(i%3==0){
        console.log('fizz')
    }
    else if(i%5==0){
        console.log('buzz')
    }
    else {
        console.log(i + ' ')
    }
}}
fizzbuzz(15)
