//metode ini bisa digunakan untuk membuat object dengan cara yang lebih efisien dan terstruktur, serta memudahkan kita dalam mengelola kode dan memperluas fungsionalitas object yang kita buat. Constructor function adalah sebuah function yang digunakan untuk membuat object baru dengan properti dan metode tertentu. Kita bisa menggunakan prototype untuk menambahkan metode ke constructor function, sehingga semua instance dari constructor function tersebut akan memiliki akses ke metode tersebut. Dengan menggunakan constructor function, kita bisa membuat object dengan cara yang lebih efisien dan terstruktur, serta memudahkan kita dalam mengelola kode dan memperluas fungsionalitas object yang kita buat. Constructor function adalah sebuah function yang digunakan untuk membuat object baru dengan properti dan metode tertentu. Kita bisa menggunakan


//cara buatnya yaitu dengan

class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b
        this.name = name
    }

    colorName(){
        console.log(`this is ${this.name}`) 
    }

    toHex(){
        const {r, g, b} = this;
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    rgba(a = 1.0){
        const {r, g, b} = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }


}

const color1 = new Color(255, 122, 234, "pink")
console.log(color1) // Output: Color { r: 255, g: 122, b: 234, name: 'pink' }
console.log(color1.toHex()) // Output: #ff7bea
color1.colorName()

const colorAlpha = color1.rgba(0.5) // Output: rgba(255, 122, 234, 0.5)
console.log(colorAlpha)