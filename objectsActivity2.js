// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a 
// string saying [Your Pet Name] is eating/drinking. 

const pet = {
    name: "Nemo",
    typeOfPet: "Goldfish",
    age: 1,
    colour: "Orange",
    eat () {
        return `${this.name} is eating.`
    },
    drink () {
        return `${this.name} is drinking.`
    }
};

console.log(pet.eat()+'\n'+pet.drink());