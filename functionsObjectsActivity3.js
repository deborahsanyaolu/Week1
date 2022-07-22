let balance = 9000;

let atm = (pin, value) => {
    if (pin === 5980 && value <= balance){
        balance -= value;
        console.log(Withdrew ${value}. New balance: ${balance}.)
   }else if (value > balance){
    console.log(You are trying to withdraw ${value}. Your available balance is ${balance}.)
   }else {
    console.log("Incorrect pin")
   }
}
atm(5980, 500);
atm(5980, 9500);
atm(7504, 100);