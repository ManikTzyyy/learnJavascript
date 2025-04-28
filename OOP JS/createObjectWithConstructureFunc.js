function Color(r, g, b) {
  this.red = r;
  this.green = g;
  this.blue = b;
}
//ketika memberikan nilai seperti ini, ini tidak akan mengembalikan nilai apapun, karena kita tidak memberikan return pada function tersebut
Color(213, 121, 212);
console.log(Color);

//namun jika menggunakan new, ini akan mengembalikan nilai object yang kita buat
const color1 = new Color(213, 121, 212);
console.log(color1); // Output: 213


//cara untuk membuat prototpye didalam object Color
Color.prototype.toHex = function () {
    const {red, green, blue} = this;
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}  

console.log(color1.toHex())


Color.prototype.rgba = function (a = 1.0){
   const {red, green, blue} = this;
   return `rgba(${red}, ${green}, ${blue}, ${a})`;
}

const color2 = new Color(211,212,212).rgba() 






//Function Constructor untuk Vehicle

function Vehicle(name, year, brand, type) {
  this.name = name;
  this.year = year;
  this.brand = brand;
  this.type = type;
//   this.isOlderThan = function (year) {
//     return year > this.year;
//   };
}

const vehicle1 = new Vehicle("car", 2020, "toyota", "gasoline");

console.log(vehicle1); // Output: car

// console.log(vehicle1.isOlderThan(2025))

//cara untuk membuat prototpye didalam object bvehiclae
Vehicle.prototype.getDetails = function () {
  const { name, year, brand, type } = this;
  return `Name : ${name} - year : ${year} - brand : ${brand} - type : ${type} `;
};

console.log(vehicle1.getDetails());

//cara membuat subclass dengan menggunakan properti yang sama dari vehicle
function VehicleELectric(name, year, brand, battery) {
  Vehicle.call(this, name, year, brand, "electric", battery);
  this.battery = battery;
}

//method untuk mencreate subclass 

VehicleELectric.prototype = Object.create(Vehicle.prototype)
VehicleELectric.prototype.constructor = VehicleELectric

const vehicle2 = new VehicleELectric("Tesla", 2000, "tesla", "litium" )

console.log(vehicle2)
