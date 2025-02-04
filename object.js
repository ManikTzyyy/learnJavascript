//membuat object 


const barang = {
    nama : "baju",
    harga : 10000,
    size : [1,2,3],
    location : {
        indonesia : "id",
        unitedKingdom : "id"
    }
}

//memanggil property didalam object

console.log(barang.harga)
console.log(barang.nama)

//memanggil property array dan object didalam object

console.log(barang.size[2])
console.log(barang.location.indonesia)