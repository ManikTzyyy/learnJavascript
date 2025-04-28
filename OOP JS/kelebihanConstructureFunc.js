// kita bisa membuat object dengan menggunakan function constructor dimana kita bisa membuat super class seperti Product dan subclass seperti ElectronicProduct, kita bisa menggunakan constructor function untuk membuat object dengan cara yang lebih efisien dan terstruktur. Constructor function adalah sebuah function yang digunakan untuk membuat object baru dengan properti dan metode tertentu. Kita bisa menggunakan prototype untuk menambahkan metode ke constructor function, sehingga semua instance dari constructor function tersebut akan memiliki akses ke metode tersebut. Dengan menggunakan constructor function, kita bisa membuat object dengan cara yang lebih efisien dan terstruktur, serta memudahkan kita dalam mengelola kode dan memperluas fungsionalitas object yang kita buat.
// Constructor Function untuk Product
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

// Menambahkan metode ke prototype Product
Product.prototype.getDetails = function() {
    // return `${this.name} - ${this.brand} -${this.category}: $${this.price}`;
    return `${this.name} - ${this.category}: $${this.price}`;
};

// Constructor Function untuk ElectronicProduct (subclass)
function ElectronicProduct(name, price, brand, warranty) {
    // Memanggil constructor Product (superclass)
    Product.call(this, name, price, "Electronics");
    this.brand = brand;
    this.warranty = warranty; // dalam tahun
}

// Mengatur prototype inheritance
ElectronicProduct.prototype = Object.create(Product.prototype);
ElectronicProduct.prototype.constructor = ElectronicProduct;

// Menambahkan metode khusus untuk ElectronicProduct
ElectronicProduct.prototype.getWarrantyInfo = function() {
    return `${this.name} by ${this.brand} comes with a ${this.warranty}-year warranty.`;
};

// Membuat instance dari ElectronicProduct
const laptop = new ElectronicProduct("Laptop", 1500, "Dell", 2);


console.log(laptop.getDetails()); 
// Output: Laptop - Electronics: $1500

console.log(laptop.getWarrantyInfo()); 
// Output: Laptop by Dell comes with a 2-year warranty.


const beras = new Product("Beras","top", 20000, "Makanan")
console.log(beras.getDetails());
// Output: Beras -undified -Makanan: $20000
//hasilnya undefined karena kita tidak mendefinisikan brand pada constructor function Product