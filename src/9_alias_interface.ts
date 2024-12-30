// alias & interface

// Try creating a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(car);
// Output - { year: 2001, type: 'Toyota', model: 'Corolla' }

// Try creating a new interface using it below
interface Rectangle {
    height: number,
    width: number
};
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
// Output - { height: 20, width: 10 }

// Try creating a new interface and extending it like below
interface I2Rectangle {
    height: number,
    width: number
}
interface I2Rectangle {
    color: string
}
const coloredRectangle2: I2Rectangle = {
    height: 200,
    width: 100,
    color: "green"
};
console.log(coloredRectangle2);
// Output - { height: 200, width: 100, color: 'green' } 

interface IRectangle {
    height: number,
    width: number
}
  
interface IcoloredRectangle extends IRectangle {
    color: string
}
  
const coloredRectangle: IcoloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
  
console.log(coloredRectangle);
// Output - { height: 20, width: 10, color: 'red' }