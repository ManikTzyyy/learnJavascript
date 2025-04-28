function masakMi(callback) {
  console.log("Sedang memasak mi...");

  // Simulasi proses masak selama 3 detik
  setTimeout(function () {
    console.log("Mi sudah matang!");
    // TODO: Panggil callback di sini
    callback();
  }, 3000);
  setTimeout(function () {
    console.log("tes");
    callback();
  }, 1000);
}

// TODO: Panggil masakMi dengan callback yang menampilkan "Waktunya makan mi 🍜"
// masakMi(function () {
//   console.log("Waktunya makan mi 🍜");
// });

function buatCoffee(callback) {
  console.log("sedang proses");
  setTimeout(() => {
    console.log("selesai");
    callback();
  }, 2000);
}

// buatCoffee(()=>{
//     console.log("silakan minum")
// })

// advance callback

// function orderMakanan(callback) {
//   console.log("Pesan makanan...");

//   setTimeout(function () {
//     const sukses = Math.random() > 0.5; // 50% kemungkinan berhasil
//     callback(sukses);
//     TODO: Panggil callback dengan parameter 'sukses'
//   }, 2000);
// }

// TODO: Panggil orderMakanan dan kasih callback yang bisa menanggapi sukses/gagal

// orderMakanan((sukses)=>{
//     console.log(sukses)
//     if(sukses){
//         console.log("Makanan sampai, waktunya makan! 🍽️")
//     }else{
//         console.log("Aduh, kurirnya nyasar 😭")
//     }
// })

// more advancade
//soal
// Output yang diharapkan (kalau sukses):
// "Pesan minuman..."
// "Minuman sampai, segar banget! 🧃"
// "Pesan makanan..."
// "Makanan sampai, waktunya makan! 🍽️"

// Atau (kalau gagal):
// "Pesan minuman..."
// "Aduh, minuman gak sampai 😢"

function orderMinuman(callback) {
  console.log("Pesan minuman...");
  setTimeout(function () {
    const sukses = Math.random() > 0.5; // 70% sukses
    callback(sukses);
  }, 1500);
}

function orderMakanan(callback) {
  console.log("Pesan makanan...");
  setTimeout(function () {
    callback(true); // makanan selalu berhasil (biar fokus ke chaining)
  }, 1500);
}

// TODO: Gabungkan kedua proses di bawah ini
orderMinuman((sukses)=>{
    console.log(sukses)
    if(sukses){
        console.log("Minuman sampai, segar banget! 🧃")
        orderMakanan((sukses)=>{
            console.log(sukses)
            console.log("Makanan sampai, waktunya makan! 🍽️")
        })
    }else{
        console.log("Aduh, minuman gak sampai 😢")
    }
})