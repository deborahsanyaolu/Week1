// Create a variable called num. 
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202). 

let num = 8008;
let rev = 0;

rev = Number(String(num).split('').reverse().join(''));

if (num == rev) {
console.log(`${num} also reads backwards as ${rev}, meaning that it is a palindrome.`);
}
else (
    console.log(`${num} reads backwards as ${rev}, meaning that it is not a palindrome.`)
);