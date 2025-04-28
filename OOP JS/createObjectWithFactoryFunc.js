// Factory Function
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      const { name, age } = this;
      console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    },
  };
}

// Menggunakan factory function untuk membuat objek
const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.

// Factory Function untuk membuat objek kendaraan
function createVehicle(type, brand, model, year) {
  return {
    type: type,
    brand: brand,
    model: model,
    year: year,
    getDetails() {
      const { type, brand, model, year } = this;
      console.log(
        `This is a ${type} made by ${brand}, model ${model}, manufactured in ${year}.`
      );
    },
    isOlderThan(yearToCompare) {
      return this.year < yearToCompare;
    },
  };
}

// Menggunakan factory function untuk membuat objek kendaraan
const vehicle1 = createVehicle("Car", "Toyota", "Corolla", 2015);
const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2018);

vehicle1.getDetails(); // Output: This is a Car made by Toyota, model Corolla, manufactured in 2015.
vehicle2.getDetails(); // Output: This is a Motorcycle made by Honda, model CBR500R, manufactured in 2018.

console.log(vehicle1.isOlderThan(2020)); // Output: true
console.log(vehicle2.isOlderThan(2020)); // Output: true

function createAnimal(name, color) {
  return {
    name: name,
    color: color,
    greet() {
      const { name } = this;
      console.log(`i am ${name}`)
    },
  };
}

const animal1 = createAnimal("Dog", "Brown");

console.log(animal1.name)
animal1.greet(); // Output: i am Dog


//Function Converter RGB

// function convertRGB(r,g,b){
//     return {
//         red : r,
//         green : g,
//         blue : b,
//         toHex(){
//             const { red, green, blue } = this;
//             return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
//         },
//         toRGB(){
//             const { red, green, blue } = this;
//             return `rgb(${red}, ${green}, ${blue})`;
//         },
//     }
// }

// const color1 = convertRGB(255,122,234)
// console.log(color1.toHex())

function convertRGB(r, g, b) {
  const color = {};
  color.red = r;
  color.green = g;
  color.blue = b;

  color.toHex = function () {
    const { red, green, blue } = this;
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  };

  return color; // Make sure to return the object
}

const color1 = convertRGB(255, 122, 234);
console.log(color1.toHex())

