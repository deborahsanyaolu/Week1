// Create a variable for any pizza topping. 
// Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} should not be on a pizza.”

let topping = 'pineapple'
 switch (topping) {
    case "pepperoni":
    case "chicken":
        console.log(`${topping} is an important ingredients for my pizza!`);
        break;
    case "chillis":
    case "tomato":
        console.log(`${topping} is a delicious topping for my pizza!`)
        break;
    case "pineapple":
        console.log(`${topping} should not be on a pizza..`)
        break;
    default:
        console.log(`Your choice of ${topping} is not recognised by this tiny list of hard-coded toppings. Haha.`)
 }