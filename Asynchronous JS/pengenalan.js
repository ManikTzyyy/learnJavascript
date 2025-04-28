// File: async_examples.js

/*
========================================
1. CALLBACK
========================================
Callback adalah fungsi yang dikirim sebagai argumen dan dipanggil setelah proses async selesai.
Biasanya digunakan ketika kita ingin menjalankan sesuatu setelah proses selesai, misalnya menunggu makanan sampai.
*/

function pesanMakananCallback(callback) {
    console.log("[Callback] Pesan makanan...");
    // Simulasi proses asynchronous menggunakan setTimeout
    setTimeout(function () {
      console.log("[Callback] Makanan sudah sampai!");
      callback(); // Memanggil callback ketika proses selesai
    }, 2000);
  }
  
  // Memanggil fungsi dan mengirimkan callback sebagai argumen
  pesanMakananCallback(function () {
    console.log("[Callback] Waktunya makan!\n");
  });
  
  /*
  ========================================
  2. PROMISE
  ========================================
  Promise adalah objek yang menyimpan hasil dari proses async.
  - resolve() akan dipanggil jika proses berhasil.
  - reject() akan dipanggil jika proses gagal.
  Kita bisa gunakan .then() untuk menangani hasil sukses dan .catch() untuk error.
  */
  
  function pesanMakananPromise() {
    return new Promise(function (resolve, reject) {
      console.log("[Promise] Pesan makanan...");
      setTimeout(function () {
        const sukses = true; // Ganti ke false untuk simulasi error
        if (sukses) {
          resolve("[Promise] Makanan sudah sampai!"); // janji terpenuhi
        } else {
          reject("[Promise] Gagal pesan makanan."); // janji gagal
        }
      }, 2000);
    });
  }
  
  // Menangani hasil dari Promise
  pesanMakananPromise()
    .then(function (hasil) {
      console.log(hasil);
      console.log("[Promise] Waktunya makan!\n");
    })
    .catch(function (error) {
      console.log(error);
    });
  
  /*
  ========================================
  3. ASYNC / AWAIT
  ========================================
  async/await adalah cara penulisan Promise yang lebih sederhana dan mirip kode synchronous.
  - async menandai fungsi sebagai asynchronous.
  - await menunggu hasil Promise selesai sebelum lanjut ke baris berikutnya.
  */
  
  async function makanDenganAsyncAwait() {
    try {
      console.log("[Async/Await] Pesan makanan...");
      const hasil = await pesanMakananPromise(); // Tunggu hasil Promise
      console.log(hasil);
      console.log("[Async/Await] Waktunya makan!\n");
    } catch (error) {
      console.log("[Async/Await] Error:", error);
    }
  }
  
  // Menjalankan fungsi async
  makanDenganAsyncAwait();
   