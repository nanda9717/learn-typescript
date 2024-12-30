"use strict";
// classes
class User {
    constructor(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    getUserDetail() {
        return "Name: " + this.name + ", age: " + this.age + " and active: " + this.isActive;
    }
}
let person1 = new User("Nane", 32, true);
console.log("Classes :- " + person1.getUserDetail());
// Output - Classes :- Name: Nane, age: 32 and active: true
// Extending Class
// Example 1
class Test {
    constructor(name) {
        this.name = name;
    }
    printName() {
        return "Class Test - printName: " + this.name;
    }
}
let test = new Test("John Doe");
console.log(test.name, test.printName());
class SubTest extends Test {
    printName() {
        return "Class SubTest - printName: " + this.name;
    }
}
let subTest = new SubTest("Nanda");
console.log(subTest.name, subTest.printName());
// Example 2 
class Product {
    constructor(productId) {
        this.productId = productId;
    }
    getProductId() {
        return this.productId;
    }
    getProduct() {
        return 'Product Id - ' + this.productId;
    }
}
let product = new Product(9190);
console.log(product.productId, product.getProductId());
class Gadget extends Product {
    constructor(productName, productId) {
        super(productId);
        this.productName = productName;
    }
    getProduct() {
        //console.log(super.getProduct());
        return 'Product Id - ' + this.productId + ' and name - ' + this.productName;
    }
}
const g = new Gadget('Tablet', 12345);
console.log(g.getProduct());
console.log(g.getProductId());
