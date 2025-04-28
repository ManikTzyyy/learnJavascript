//test OOP js

//Factory Function
function createOrang(nama, age) {
  return {
    nama: nama,
    age: age,

    greet() {
      const { nama, age } = this;
      return `Halo nama saya ${nama} dan umur saya ${age} tahun`;
    },
  };
}

function createCar(name, brand, type) {
  const carProperty = {};
  (carProperty.name = name),
    (carProperty.brand = brand),
    (carProperty.type = type);

  carProperty.getData = function () {
    const { name, brand, type } = this;
    return `nama :${name} - brand :${brand} - type ${type} `;
  };

  return carProperty;
}

//Constructor Function

function Hewan(name, age, type) {
  (this.name = name), (this.age = age), (this.type = type);
}

Hewan.prototype.greet = function () {
  const { name, age, type } = this;
  return `halo aku ${name}, dan umurku ${age} - ${type}`;
};

function Kucing(name, age) {
  Hewan.call(this, name, age, "Cat");
}

Kucing.prototype = Object.create(Hewan.prototype);
Kucing.prototype.constructor = Kucing;

//class

class Char {
  constructor(name, power) {
    (this.name = name), (this.power = power);
  }
  getData(){
    const {name, power} =this
    


    return `Name : ${name}, power : ${power}`
  }
}

// class extend dari char

class Male extends Char {
    constructor(name, power, gender) {
       super(name, power)
       this.gender = "Male"
    
    }
}

