const janjiMinuman = function () {
  return new Promise((resolve, reject) => {
    const sukses = Math.random() > 0.5;
    setTimeout(function () {
      if (sukses) {
        resolve(() => {
          return sukses;
        });
      } else {
        reject("Gagal");
      }
    });
  }, 2000);
};

// janjiMinuman()
//   .then(function (res) {
//     console.log(res);
//     //   console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   challange

function orderMinuman() {
  return new Promise((resolve, reject) => {
    console.log("Pesan minuman...");
    setTimeout(() => {
      const sukses = Math.random() > 0.5; // 70% berhasil
      if (sukses) {
        resolve("Minuman sampai, segar banget! 🧃");
      } else {
        reject("Aduh, minuman gagal datang 😢");
      }
    }, 1500);
  });
}

function orderMakanan() {
  return new Promise((resolve, reject) => {
    console.log("Pesan makanan...");
    setTimeout(() => {
      const sukses = Math.random() > 0.5;
      if (sukses) {
        resolve("Makanan sampai, waktunya makan! 🍽️");
      } else {
        reject("Sorry bro gagal");
      }
      //
    }, 1500);
  });
}

// TODO: Panggil orderMinuman, lalu lanjutkan ke orderMakanan jika berhasil
// Tangani juga jika minuman gagal

// orderMinuman()
//   .then((res) => {
//     console.log(res);
//     orderMakanan()
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((er) => {
//         console.log(er);
//       });
//   })
//   .catch((er) => {
//     console.log(er);
//   });

//versi clean

// orderMinuman()
//   .then((resMinum) => {
//     console.log(resMinum);
//     return orderMakanan(); // <--- return supaya bisa .then() lanjut
//   })
//   .then((resMakan) => {
//     console.log(resMakan);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//versi async

console.log(`
    ==========================================
    
    
    `);

async function prosesOrder() {
  try {
    const resMinum = await orderMinuman();
    console.log(resMinum);

    const resMakan = await orderMakanan();
    console.log(resMakan);
  } catch (err) {
    console.log("error :", err);
  }
}

// prosesOrder()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("List Pengguna:");
    data.forEach((user) => {
      console.log(`${user.name} - ${user.email}`);
    });
  })
  .catch((error) => {
    console.log("Gagal fetch data:", error);
  });

