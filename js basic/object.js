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
console.log(barang)
//memanggil property didalam object

console.log(barang.harga)
console.log(barang.nama)

//memanggil property array dan object didalam object

console.log(barang.size[2])
console.log(barang.location.indonesia)

//mengganti nilai dari property didalam objek

barang.nama = "celana"

console.log(barang)

//menambahkan property baru
barang.diskon = 20
barang.arrayBaru = [21,31,1]

console.log(barang)


//object didalam array

const product = [
    {
        nama : "apel",
        harga : 2000,
    },
    {
        nama : "pir",
        harga : 1000
    }
]

console.log(product[0].nama)
console.log(product[1].harga)