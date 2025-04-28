// Array.every() dan Array.some() adalah metode yang digunakan untuk memeriksa elemen dalam array.
// Array.every() mengembalikan true jika semua elemen dalam array memenuhi kondisi yang diberikan.
// Array.some() mengembalikan true jika setidaknya satu elemen dalam array memenuhi kondisi yang diberikan. 

const nilai = [1, 2, 3, 4, 5];
const hasil = nilai.every((x) => x > 0);
console.log(hasil); 

const hasil2 = nilai.some((x) => x > 6); 

console.log(hasil2);