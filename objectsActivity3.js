// Create an object called coffeeShop with key values of:branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all 
// items chosen with costs and total costs.

const coffeeShop = { //object

    name: "Starbucks",

    branch: "Trafford Park",

    OrderType: ["Eat in","Takeout"],

    drinks: [["Toffee Latte", 4.99], //multi array1 drinks and price
            ["Macchiato", 5.99],
            ["Hot Chocolate", 3.99]],

    foods: [["Chicken Sandwich", 6.99],//multi array2 food and price
            ["Prawn Cocktail Crisps", 2.50],
            ["ruit Salad", 5.99]],

        drinksTotalOrdered (item, price){ //method 1
            return this.drinks [item][price];
        },
        foodTotalOrdered (item, price){ //method 2
            return this.foods[item][price];
        }
};



console.log(`\n${coffeeShop.name} \n\n${coffeeShop.branch}\n
${coffeeShop.OrderType[1]}\n
Your Order is:\n1 x ${coffeeShop.drinksTotalOrdered(0,0)} £${coffeeShop.drinksTotalOrdered(0,1)}
2 x ${coffeeShop.drinksTotalOrdered(1,0)} £${coffeeShop.drinksTotalOrdered(1,1)}
1 x ${coffeeShop.foodTotalOrdered(0,0)} £${coffeeShop.foodTotalOrdered(0,1)}
1 x ${coffeeShop.foodTotalOrdered(2,0)} £${coffeeShop.foodTotalOrdered(2,1)}\n\n
Grand Total: £${coffeeShop.drinksTotalOrdered(0,1) + coffeeShop.drinksTotalOrdered(1,1) + coffeeShop.drinksTotalOrdered(1,1) + coffeeShop.foodTotalOrdered(0,1) + coffeeShop.foodTotalOrdered(2,1)}`)