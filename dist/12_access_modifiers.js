"use strict";
// ============================= Access Modifiers ========================
// Public - Properties declared as public are accessible outside the class. It is the default access modifier.
class ProductNew2 {
    constructor(productId) {
        this.productId = productId;
    }
}
let productNew2 = new ProductNew2(123456);
console.log('Access Modifiers : Public -' + productNew2.productId);
// Protected - Properties and methods declared with protected access modifier are accesible with in class as well as within the inherited classes.
class ProductNew3 {
    constructor(productId) {
        this.productId = productId;
    }
}
class GadgetNew3 extends ProductNew3 {
    getProduct() {
        return "Product Id : " + this.productId;
    }
}
let g3 = new GadgetNew3(1231);
console.log(g3.getProduct());
// console.log(g3.productId);        // Error
// Private - Properties and methods declared with private access modifier are accessible within the class only, but not outside the class.
class ProductNew4 {
    constructor(productId) {
        this.productId = productId;
    }
}
class GadgetNew4 extends ProductNew4 {
    getProduct() {
        return "Product ID";
        // return "Product Id : "+ this.productId             // Error - cant access private modifier in sub class
    }
}
let g4 = new GadgetNew4(1231);
console.log(g4.getProduct());
// Static - Static properties belongs to the class and not to the instance of the class.A property or method declared with a static keyword can be access using the class name instead of the instance of the class.
// Example 1
class ProductNew5 {
    static getProductDetails() {
        return "Product Name: " + ProductNew5.productName;
    }
    getProduct() {
        return "Product Name:" + ProductNew5.productName;
    }
}
ProductNew5.productName = "Mobile";
console.log("Access Modifiers - Static :" + ProductNew5.productName);
console.log("Access Modifiers - Static :" + ProductNew5.getProductDetails());
// Example 2
class FruitS {
    constructor(price) {
        this.price = price;
        FruitS.count++;
    }
    static getCount() {
        return FruitS.count;
    }
}
FruitS.count = 0;
const apple = new FruitS(30);
console.log(FruitS.getCount());
const orange = new FruitS(23);
console.log(FruitS.getCount());
// 1
// 2
// readonly
class Fruit {
    constructor(price) {
        this.price = price;
    }
}
const mango = new Fruit(120);
// mango.price = 110; // Error - Cannot assign to 'price' because it is a read-only property.
console.log("Readonly :- " + mango.price);
// Readonly :- 120
