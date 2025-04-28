const kkm = 80;
let nilai = 90;

if (nilai > kkm) {
  console.log("selamat kamu lulus");
  //   alert("Lulus");
} else {
  console.log("kamu tidak lulus");
}

// looping using while and for

let i = 0;

while (i < 3) {
  console.log("this using while" + " " + i);
  i++;
}

for (i = i; i < 6; i++) {
  console.log("this using for" + " " + i);
}


// looping untuk mengambil nilai array
console.log("mengambil nilai array menggunakan looping")
const hewan = ["kucing","anjing","babi","ayam","bebek","rusa",]
console.log(hewan)
console.log("panjang array", hewan.length)

for (let i = 0; i < hewan.length; i++ ){
  console.log(i, hewan[i])
}