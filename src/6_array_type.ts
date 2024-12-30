// array 

let names : string[] = ["Nanda","John"];
names.push("Dylan");
// names.push(23); // Error - Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("Array names : "+names);
// Output - Array names : Nanda,John,Dylan

let fruits: readonly string[] = ["Apple", "Banana"];
// fruits.push('Orange'); // Error - Property 'push' does not exist on type 'readonly string[]'.

let numbers = [2, 3, 6];
numbers.push(5);
// numbers.push("4"); // Argument of type 'string' is not assignable to parameter of type 'number'.
