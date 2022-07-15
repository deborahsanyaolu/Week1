// > Create 9 variables: space1, space2… space9. 
// > Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
// > Insert the variables into your board using the ${varName} syntax and make it look like the displayed board.

let space1 = "X"
let space2 = "O"
let space3 = " "

console.log (
    `
      |   |   
    ${space1} | ${space2} | ${space3} 
      |   |   
   -----------
      |   |   
    ${space1} | ${space1} | ${space3} 
      |   |   
   -----------
      |   |   
    ${space2} | ${space3} | ${space3} 
      |   |   
     `
)