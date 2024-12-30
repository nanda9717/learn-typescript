// ============================= Access Modifiers ========================

// Public - Properties declared as public are accessible outside the class. It is the default access modifier.

class ProductNew2{
    public productId: number;

    constructor(productId : number){
        this.productId = productId;
    }

}

let productNew2: ProductNew2 = new ProductNew2(123456); 
console.log('Access Modifiers : Public -' + productNew2.productId);

// Protected - Properties and methods declared with protected access modifier are accesible with in class as well as within the inherited classes.

class ProductNew3{
    protected productId: number;

    constructor(productId: number){
        this.productId = productId
    }
}
class GadgetNew3 extends ProductNew3{
    getProduct(): any{
        return "Product Id : "+ this.productId
    }
}

let g3 : GadgetNew3 = new GadgetNew3(1231);
console.log(g3.getProduct());
// console.log(g3.productId);        // Error

// Private - Properties and methods declared with private access modifier are accessible within the class only, but not outside the class.

class ProductNew4{
    private productId: number;

    constructor(productId: number){
        this.productId = productId
    }
}
class GadgetNew4 extends ProductNew4{
    getProduct(): any{
        return "Product ID"
        // return "Product Id : "+ this.productId             // Error - cant access private modifier in sub class
    }
}

let g4 : GadgetNew4 = new GadgetNew4(1231);
console.log(g4.getProduct());

// Static - Static properties belongs to the class and not to the instance of the class.A property or method declared with a static keyword can be access using the class name instead of the instance of the class.

// Example 1

class ProductNew5{
    static productName: string = "Mobile";
    static getProductDetails(): string {
        return "Product Name: "+ ProductNew5.productName;
    }
    getProduct():string{
        return "Product Name:" +ProductNew5.productName;
    }
}

console.log("Access Modifiers - Static :" +ProductNew5.productName);
console.log("Access Modifiers - Static :" +ProductNew5.getProductDetails());

// Example 2
class FruitS{
    price: number;
    protected static count: number = 0;

    constructor(price: number){
        this.price = price
        FruitS.count++;
    }

    static getCount(){
        return FruitS.count;
    }
}
const apple = new FruitS(30);
console.log(FruitS.getCount());
const orange = new FruitS(23);
console.log(FruitS.getCount());
// 1
// 2

// readonly

class Fruit{
    readonly price: number;

    constructor(price: number){
        this.price = price;
    }

    // setPrice(){
    //     this.price = 100;
    // } 
    // Error - Cannot assign to 'price' because it is a read-only property.

}
const mango = new Fruit(120);
// mango.price = 110; // Error - Cannot assign to 'price' because it is a read-only property.
console.log("Readonly :- "+mango.price)
// Readonly :- 120