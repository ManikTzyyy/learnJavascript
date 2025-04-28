//Sistem rental motor

class Motor {
  constructor(nama, platNomor, hargaSewaPerHari) {
    (this.nama = nama),
      (this.platNomor = platNomor),
      (this.hargaSewaPerHari = hargaSewaPerHari),
      (this.disewa = false);
  }
  sewa(jumlahHari) {
    //validasi sewa tidak bisa 2kali
    const { hargaSewaPerHari, disewa } = this;
    if (disewa == true) {
      return `Mohon maaf motor sudah disewa`;
    } else {
      this.disewa = true;
      this.jumlahHari = jumlahHari;
      const totalBiaya = jumlahHari * hargaSewaPerHari;
      return `total biayanya adalah ${jumlahHari} X ${hargaSewaPerHari} = Rp${totalBiaya}`;
    }
  }
  kembalikan() {
    const { disewa } = this;
    this.disewa = false;
    return `Terimakasih sudah menyewa motor`;
  }
  //   info() {
  //     const { nama, platNomor, hargaSewaPerHari, disewa } = this;
  //     if (disewa == true) {
  //       return `Nama : ${nama} - Plat Nomor : ${platNomor} - Harga Sewa : Rp ${hargaSewaPerHari} - Motor tidak tersedia `;
  //     } else {
  //       return `Nama : ${nama} - Plat Nomor : ${platNomor} - Harga Sewa : Rp ${hargaSewaPerHari} -  Motor tersedia`;
  //     }
  //   }
}

class MotorBebek extends Motor {
  info() {
    const { nama, platNomor, hargaSewaPerHari, disewa } = this;
    if (disewa == true) {
      return `Nama : ${nama} - Plat Nomor : ${platNomor} - Harga Sewa : Rp ${hargaSewaPerHari} - Motor tidak tersedia -  fitur kick starter `;
    } else {
      return `Nama : ${nama} - Plat Nomor : ${platNomor} - Harga Sewa : Rp ${hargaSewaPerHari} -  Motor tersedia - fitur kick starter`;
    }
  }
}

class MotorMatic extends Motor {
  info() {
    const { nama, platNomor, hargaSewaPerHari, disewa } = this;
    if (disewa == true) {
      return `Nama : ${nama} - Plat Nomor : ${platNomor} - Harga Sewa : Rp ${hargaSewaPerHari} - Motor tidak tersedia -  fitur auto starter `;
    } else {
      return `Nama : ${nama} - Plat Nomor : ${platNomor} - Harga Sewa : Rp ${hargaSewaPerHari} -  Motor tersedia - fitur auto starter`;
    }
  }
}

const daftarMotor = [
  new MotorMatic("Nmax", "DK 68 EA", 15000),
  new MotorBebek("Supra", "DK 18 AA", 5000),
  new MotorBebek("Revo", "DK 89 BB", 6000),
  new MotorMatic("Beat", "DK 77 CC", 12000),
];

// function tampilkanMotor(daftarMotor){
//   console.log("Daftar Motor")
//   const j = daftarMotor.length
//   for(let i = 0; i < j ; i++){
//     console.log(`Motor ke-${i+1}`)
//     console.log(daftarMotor[i].info())
//     console.log("---------------")
//   }
// }

function tampilkanStatus(daftarMotor) {
  console.log("===== Daftar Status Motor Rental =====");
  daftarMotor.forEach((motor, index) => {
    console.log(`Motor #${index + 1}`);
    console.log(motor.info());
    console.log("--------------------------------------");
  });
}