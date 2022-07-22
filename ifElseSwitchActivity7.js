// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.

let enterAString = "rfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

function findLastVowIndex(x) {
    const match = x.match(/[aeiou](?!.*[aeiou])/i);
    return match ? match[0] : 'No match';
}

let lastVow = findLastVowIndex(enterAString);

let lastVowIndex = enterAString.lastIndexOf(lastVow);

console.log(lastVowIndex);