// Create a variable called password.
// Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

let password = "Password123"
if (password.length < 8) {
    console.log("Your password is too short.");
}
else (console.log(password));

// Create a variable called num. 
// Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. 
// Otherwise log something else

let num = 12
if (num % 3 == 0 || num % 5 == 0) {
    console.log(`${num} is divisible by either 3 or 5.`);
}
else (console.log(`${num} is NOT divisible by neither 3 nor 5.`))