const printName = (name: string) => {
    console.log(name);
}

printName("Nanda");

function calculatePrice(price:number, quantity:number): number{
    return price * quantity;
}

console.log("Total Price :- "+calculatePrice(125.50, 2));
console.log("Total Price with discount :- "+calculatePrice(125.50, 2)/2);