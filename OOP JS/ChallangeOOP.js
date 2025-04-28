//Sistem rental motor

class Motor {
  constructor(nama, platNomor, hargaSewaPerHari, ) {
    (this.nama = nama),
      (this.platNomor = platNomor),
      (this.hargaSewaPerHari = hargaSewaPerHari),
      (this.disewa = false);
  }
  sewa(jumlahHari) {
    //validasi sewa tidak bisa 2kali
    const { hargaSewaPerHari, disewa } = this;
    if (disewa == true){
        return `Mohon maaf motor sudah disewa`
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

const motor1 = new MotorBebek("Nmax", "DK 68 EA", 5000);
const motor2 = new MotorMatic("Supra", "DK 18 AA", 15000);
// motor1.sewa(2)


//sewa motor 4 hari
console.log(motor1.sewa(4))
//info motor ketika sudah disewa maka tidak tersedia
console.log(motor1.info())
//validasi motor tidak bisa disewa lagi
console.log(motor1.sewa(4))
//mengembalikan motor
console.log(motor1.kembalikan())
//status motor akan sudah tersewa
console.log(motor1.info())

