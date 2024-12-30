// Generics

let arrString = ['s','w','a','o','t','m'];
let arrNum = [23,456,21,580,1202,12345,231,68,90,98,7];

// Its normal javascript and with type 'string' both arrays(num & string) are working.

function getRandomValue(arr: any[]): any{
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
let res1: string = getRandomValue(arrString);
let res2: string = getRandomValue(arrNum);
console.log("Res1 :"+res1+" and type "+typeof res1);
console.log("Res2 :"+res2+" and type "+typeof res2);
// Output
// Res1 :t and type string
// Res2 :7 and type number


// So we will use generics to resolve it typescript. If we have array of numbers then will return number or if we have array of string it will return string.

function getRandomElement<T>(arr: T[]): T{
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

let result1: string = getRandomElement(arrString);
// let result2: string = getRandomElement(arrNum); // Error - Type 'number' is not assignable to type 'string'.
let result2: number = getRandomElement(arrNum);
console.log("Result1 :"+result1+" and type "+typeof result1);
console.log("Result2 :"+result2+" and type "+typeof result2);
// Output
// Result1 :t and type string
// Result2 :98 and type number

// Generics Constraits

type Person = {
    firstname: string;
}

function getPerson<T extends Person>(data: T){
    return data;
}

const details = { lastname: "Singh", firstname: "Nanda" }
console.log(getPerson(details));