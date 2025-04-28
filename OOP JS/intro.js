//OOP merupakan Object Oriented Programming, dimana dalam sebuah OOP terdapat object prototype yang dimana memiliki mekanisme untuk menurunkan sebuah fitur yang ada pada object ke object lain

//Contoh

const arr = [1,2,3]

console.log(arr)
console.log(arr.length)
arr.pop();
console.log(arr)
//fungsi seperti pop, length, push merupakan sebuah prototpye pada tipe data array.
// kita bisa membuat prototype kedalam objeck kita
//ini merupakan sebuah contoh protoype yang kita buat menggunakan arrow function
arr.helo = () => {
    console.log('hello world')
}
//kita bisa menggunakan prototype tersebut dengan cara

arr.helo() //ini akan menghasilkan helo world

//tapi kita tidak bisa menggunakan prototype tersebut pada tipe data array lainnya, karena kita hanya membuat prototype pada array yang kita buat sebelumnya
//contoh
const arr2 = [6,7,8]

//arr2.helo() //ini akan menghasilkan error, karena kita tidak membuat prototype pada arr2

//jadi untuk dapat menggunakan prototype pada tipe data array lainnya kita harus membuat prototype pada object utama dari array tersebut, seperti

Array.prototype.helo = () => {
    console.log('hello world')
}

//sekarang kita bisa menggunakan prototype tersebut pada semua array yang kita buat


//fact lainnya, kita bisa mengedit sebuah prototype yang sudah ada, seperti contoh kita edit prototype pop pada array
Array.prototype.pop = () => {
    return 'ini adalah prototype pop yang sudah kita edit'
}

console.log(arr.pop())
//hasilnya akan menjadi 'ini adalah prototype pop yang sudah kita edit'