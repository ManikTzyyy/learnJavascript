//cara membuat promise
//ini adalah cara untuk membuat object promise

new Promise((resolve, reject) => {
  resolve("promise berhasil"); //ini adalah bagian promise yang berhasil dijalankan
  reject("promise gagal"); //ini adalah bagian promise yang gagal dijalankan
});

//contoh penggunaan proimise jika berhasil melakukan apa dan jika gagal melakukan apa

new Promise((resolve, reject) => {
  resolve(() => {}); //kita juga dapat membuat sebuah function di dalam resolve dan reject
  reject(() => {});
});

//contoh penggunaan promise dengan backgrpound change

const colorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

//jadi ketika fungsi di panggil maka yang dijalankan pertama adaah red, kemudian jika berhasil maka jalankan green, kemudian jika berhasil maka jalankan blue
colorChange("red", 1000)
    .then(() => colorChange("green", 1000))
    .then(() => colorChange("blue", 1000))
