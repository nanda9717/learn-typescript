// null & undefined

let price;
console.log(price); // undefined

let priceNew: number;
// console.log(priceNew) // Error - Variable 'priceNew' is used before being assigned.
// To fix this issue we can use like it - let priceNew: number | undefined; 
priceNew = 2000;
console.log(priceNew); // 2000

let priceN;
priceN = null;
console.log(priceN, (typeof priceN)); // null, object

let price2: null;
// price2 = 200; // Error - Type '200' is not assignable to type 'null'.
// To fix this issue we can use like it - let price2: null | number;
price2 = null;
console.log(price2, (typeof price2)); // null, object

let price3: number | undefined | null;
console.log(price3);
console.log(price3 == null); // true 
console.log(price3 === null); // false
console.log(price3 == undefined); // true 
console.log(price3 === undefined); // true
