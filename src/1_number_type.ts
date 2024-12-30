// number type

let year:number 
year = 2022;
// year = '2023' // It will throw error
console.log("Year: "+year+" and type : "+ (typeof year)); // Year: 2022 and type : number

let cost:number = 204.30;
console.log("Cost: "+cost+" and type : "+ (typeof cost)); // Cost: 204.3 and type : number

let myBits: number = 0B100;
console.log("Binary Number: "+myBits); // Binary Number: 4

let myOctals: number = 0O100;
console.log("Octals Number: "+myOctals); // Octals Number: 64

let myHexaDecimal: number = 0X100;
console.log("HexaDecimal Number: "+myHexaDecimal); // HexaDecimal Number: 256

// number vs Number
let value = 1000; // primtive type
let otherValue = new Number(20); // Number object

// let age: number = 30;
// function add(a: number, b: number): number {
//  return a + b; 
// }

// const x: Number = new Number(10);
// const y: Number = new Number(20);
// const z: number = x.valueOf() + y.valueOf();
// console.log(z); // 30 
