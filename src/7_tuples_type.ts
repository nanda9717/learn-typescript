// tuples
let users : [string, number, boolean];
// users = ["Nanda", '23', true] // Error - Type 'string' is not assignable to type 'number'.
users = ["Nane", 23, true]

let colorCodes : [number, number, number] = [244, 255, 0];
// colorCodes = [...colorCodes, 255]; // Error - Type '[number, number, number, number]' is not assignable to type '[number, number, number]'. Source has 4 element(s) but target allows only 3.ts
// colorCodes[2] = "red"; // Error - Type 'string' is not assignable to type 'number'.
colorCodes.push(255); // It is not giving any but we can access it.
console.log("Tuples ColorCodes : "+colorCodes);
// console.log("Pushed color : "+colorCodes[3]); // Tuple type '[number, number, number]' of length '3' has no element at index '3'.
