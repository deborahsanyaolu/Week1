let balance = 1000
let pin = 1111
const balanceCheck = (amount, input) => {
    if (amount <= balance && pin -- input) {
        console.log(`You have withdrawn ${amount}`)
    } else {
        console.log("You don't have enough money")
    }
}

balanceCheck(1100)