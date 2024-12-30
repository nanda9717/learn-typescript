// classes
class User{
    name: string;
    age: number;
    isActive: boolean;

    constructor(name:string, age: number, isActive: boolean){
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }

    getUserDetail() : string {
        return "Name: "+this.name+", age: "+this.age+" and active: "+this.isActive;
    }
}

let person1 = new User("Nane",32,true);
console.log("Classes :- "+person1.getUserDetail());
// Output - Classes :- Name: Nane, age: 32 and active: true

// Extending Class

// Example 1
class Test{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    printName(): string{
        return "Class Test - printName: "+this.name;
    }   
}
let test = new Test("John Doe");
console.log(test.name, test.printName());

class SubTest extends Test{
    printName(): string {
        return "Class SubTest - printName: "+this.name;
    }
}
let subTest = new SubTest("Nanda");
console.log(subTest.name, subTest.printName())

// Example 2 

class Product{
    productId: number;
    constructor(productId: number){
        this.productId = productId;
    }

    getProductId():number{
        return this.productId
    }
    getProduct():any{
        return 'Product Id - '+ this.productId;
    }
}

let product: Product = new Product(9190);
console.log(product.productId, product.getProductId());

class Gadget extends Product{
    constructor(public productName:string, productId: number){
        super(productId);
    }

    getProduct():any {
        //console.log(super.getProduct());
        return 'Product Id - '+ this.productId + ' and name - '+ this.productName
    }
}
const g = new Gadget('Tablet', 12345);
console.log(g.getProduct())
console.log(g.getProductId());