"use strict";
function getFruit(fruit) {
    return `${fruit.name} is having price of ${fruit.price}`;
}
let grapes = { name: 'Grapes', price: 70 };
console.log("Interface Function : " + getFruit(grapes));
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
