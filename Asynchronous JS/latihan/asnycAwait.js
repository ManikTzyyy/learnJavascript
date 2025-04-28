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
//versi async

console.log(`==========================================`);

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

function cekWifi() {
  console.log("Cek Koneksi Wifi....");
  return new Promise((resolve, reject) => {
    const sukses = Math.random() > 0.5;
    if (sukses) {
      resolve("WiFi terhubung! 📶");
    } else {
      reject("Wifi tidak terhubung");
    }
  });
}

function openYoutube() {
  console.log("mencoba membuka youtube...");
  return new Promise(function (resolve, reject) {
    const sukses = Math.random() > 0.5;
    if (sukses) {
      resolve("Youtube terbuka, saatnya nonton");
    } else {
      reject("gagal membuka");
    }
  });
}


async function proses(){
    try{
        const resultWifi = await cekWifi()
        console.log(resultWifi)
        const resultYoutube = await openYoutube()
        console.log(resultYoutube)
    }
    catch(err){
        console.log("Error :", err)
    }
}

proses()