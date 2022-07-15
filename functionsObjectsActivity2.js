let orderCount = 0;

const takeOrder = (topping, topping2) => {
    console.log(`Pizza with ${topping} and pizza with ${topping2}`);
    orderCount++;
    console.log(orderCount)
}

takeOrder("pineapple", "pepperoni");
takeOrder("extra cheese", "ham");
takeOrder("garlic butter", "chicken");
