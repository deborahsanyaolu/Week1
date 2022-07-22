// Create a variable called word that takes a string. Create 
// an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false.

let word = "evie";

if (word[0] == word[word.length-1]) {
    console.log('true');
    return true;
}
else console.log('false');
return false;