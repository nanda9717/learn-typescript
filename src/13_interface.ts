// ============== interface ==================
interface Fruit{
    name: string;
    readonly price: number;
    color?: string;
}

function getFruit(fruit: Fruit){
    return `${fruit.name} is having price of ${fruit.price}`;
}

let grapes: Fruit = { name: 'Grapes', price: 70}
console.log("Interface Function : "+getFruit(grapes));

interface Shape {
    getArea: () => number;
}
  
class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
}
  
const myRect = new Rectangle(10,20);
  
console.log(myRect.getArea());
