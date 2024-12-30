"use strict";
// Optional Properties & Non-null Assertion
function sumNew(a, b, c) {
    // added exclamation mark(!) to oprional param
    return a + b + c;
}
console.log(sumNew(2, 5, 8)); // Output - 15
console.log(sumNew(2, 5)); // Output - NaN
function discountPrice(price) {
    return price - 20;
}
console.log(discountPrice(50)); // Output - 30
// console.log(discountPrice(undefined)); // Error - Argument of type 'undefined' is not assignable to parameter of type 'number'.
// We will add exclamation mark(!)
console.log(discountPrice(undefined)); // NaN
