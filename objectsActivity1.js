// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it 
// should return “Hello my name is ${this.name}”

const person = {
    name: "Debbie",
    age: 26,
    movies: ["Love & Basketball", "Titanic", "Matilda"],
    sayHi (){
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.sayHi())
console.log(`I am ${person.age} and my Top 3 movies are:\n${person.movies[0]}\n${person.movies[1]}\n${person.movies[2]}`)