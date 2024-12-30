// never & void

// function sum(a:number, b:number): void{
//     return a + b;
// }
// Output - It will eror - Type 'number' is not assignable to type 'void'.

function sum(a:number, b:number): void{
    console.log((a + b));
}
sum(23, 20);
// Output - 43

// function sum2(a:number, b:number): never{
//     let c = a + b;
// }
// Output - It will error - A function returning 'never' cannot have a reachable end point.

function raiseError(msg: string): never{
    throw new Error(msg);
}
