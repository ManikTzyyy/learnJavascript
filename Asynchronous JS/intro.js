/**
 * Callback function adalah fungsi yang dikirimkan sebagai argumen ke fungsi lain
 * dan akan dieksekusi setelah operasi tertentu selesai dilakukan. Callback
 * sering digunakan dalam pemrograman asinkron untuk menangani tugas-tugas
 * yang membutuhkan waktu untuk diselesaikan, seperti mengambil data dari API
 * atau membaca file.
 *
 * Dalam JavaScript, callback sering digunakan bersama fungsi seperti `setTimeout`,
 * `setInterval`, atau saat bekerja dengan event listener.
 *
 * Namun, penggunaan callback yang terlalu banyak dan bersarang dapat menyebabkan
 * apa yang dikenal sebagai "callback hell" atau "pyramid of doom," di mana kode
 * menjadi sangat bersarang dan sulit untuk dibaca serta dipelihara. Hal ini
 * ditunjukkan dalam contoh di atas, di mana beberapa pemanggilan `setTimeout`
 * bersarang satu sama lain, sehingga kode menjadi sulit diikuti.
 *
 * Untuk mengatasi masalah ini, JavaScript modern menyediakan alternatif seperti
 * Promises dan async/await, yang memungkinkan penulisan kode asinkron dengan cara
 * yang lebih mudah dibaca dan dipelihara.
 */
//cara javascript membaca kode itu single thread, artinya kodenya dieksekusi 1 per 1

//callback hell

//dalam javascript semua kodenya akan dijalankan 1 per 1 namun ketika dieksekusi terlihat kodenya berjlan bersamaan. ini karena engine dari browser yaitu menggunakan c++ yang menggunakan multi thread. 
//jadi mekanisme kode di baca adalah javascript akan menyimpan dulu semua fungsi yang didalam memori kemudian mengeksusinya bersamaan, namun ketika inginn membuat fitur yang ingin kodenya dijalankan setelah ini kita bisa menggunakan setTImeout sehingga codenya bisa dijalankan dan terlihat berurutan dengan menggunakn setTimeout
//adapun kekurangan dari menggunakan function ini yaitu, code akan menjadi panjang kekanan dan sulit untuk dibaca
//maka dari itu disarankan menggunakn asyncronous dari js
console.log("pyramid of doommmm");

setTimeout(function () {
  console.log("1");
  setTimeout(function () {
    console.log("2");
  }, 1000);
  setTimeout(function () {
    console.log("3");
  }, 1000);
  setTimeout(function () {
    console.log("4");
  }, 1000);
  setTimeout(function () {
    console.log("5");
  }, 1000);
}, 1000);

//code tersebut sangatlah tidak bagus, karna nanti akan sulit dipahami


