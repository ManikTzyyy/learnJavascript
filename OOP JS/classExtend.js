// pada OOP kita bisa membuat object yang memiliki property sama di singkat agar kodenya tidak panjang (tidak ingin repototif)

//pada code ini tentunya ada property yang mengulang seperti name dan age dan greetnya. kita bisa menggunakan extend agar property sperti name dan age bisa digunakan di object lainnya
// class Anjing {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         return `gukguk`
//     }
//     greet(){
//         return `hi nama saya ${this.name}`
//     }
// }

// const anjing1 = new Anjing("blacki",2)

// console.log(anjing1)
// console.log(anjing1.talk())
// console.log(anjing1.greet())

// class Kucing{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         return  `meong`
//     }

//     greet(){
//         return `hi nama saya ${this.name}`
//     }
// }

// const kucing1 = new Kucing("memo", 5)
// console.log(kucing1)
// console.log(kucing1.talk())

class Hewan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hi nama saya ${this.name}`;
  }
  getdata(){
    const {name, age} = this
    return `Nama : ${name}, umur : ${age}`
  }
}

//tambahkan extends object agar bisa menggunakan propertynya
class Anjing extends Hewan {
  talk() {
    return `gukguk`;
  }
}

const anjing1 = new Anjing("blacki", 2);

console.log(anjing1);
console.log(anjing1.talk());
console.log(anjing1.greet());

class Kucing extends Hewan {
  talk() {
    return `meong`;
  }

}

const kucing1 = new Kucing("memo", 5);
console.log(kucing1);
console.log(kucing1.talk());



//dengan menggunakan extends maka Hewan menjadi class parents dan kucing dan anjing  menjadi child class

//kita juga bisa menambhkan properti baru kepada hewan di kelas childnya

class Burung extends Hewan {
    constructor(name, age, warna) {
        //kita perlu menggunakan super dan mengisi parameternya agar bisa menggunakan nama dan age dari kelas parentnya
        super(name, age)
        this.warna = warna;
    }
    talk() {
        return `pitpit`;
      }

    
}

const burung1 = new Burung("opet", 1, "biru")
console.log(burung1)
console.log(burung1.talk())
console.log(burung1.greet())
console.log(burung1.warna)

//getdata

console.log(anjing1.getdata())
console.log(kucing1.getdata())
console.log(burung1.getdata())