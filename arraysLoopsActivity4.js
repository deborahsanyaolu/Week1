// Displays 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters. 
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

let films = [
    "Titanic",
    "Parent Trap",
    "Ghostbusters",
    "Toy Story"
];

// console.log(films);

// for (let i = 0; i < films.length; i++) {
//     console.log(films[i]);
// };

if (films[2] == "GhostBusters") {
    console.log(`Yay it’s Ghostbusters`)
}
else {
    console.log(`Boo! We want Ghostbusters!`)
}