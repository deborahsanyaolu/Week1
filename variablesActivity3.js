// Create a program that calculates the number 
// of days from today to your birth date. 
// Look for ‘Javascript Date’ on MDN

let birthday = new Date(2022, 10, 12)
let today = new Date(2022, 07, 12)
diffTime = birthday-today
diffDays = diffTime / (1000 * 3600 * 24)
console.log(`There are ${Math.round(diffDays)} days until my birthday`)
