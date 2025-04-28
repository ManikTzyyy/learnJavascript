//DOM (document object model)
/*
select document
- document.getElementById(ID)
- document.getElementByClassName(class)
- document.getElementByTagName(tag)

perbedaan id dengan lainnya adalah ketia menggunaan id, maka yang dipilih hanya satu sedangkan yang lain bisa memilih lebih dari 1

*/

//select seluruh gambar yg ada pada html menggunaknan get element by tag

const allImg = document.getElementsByTagName('img')
console.log(allImg)
//dengan hal tersebut kita bisa mengganti content imgnya dengan menggunaan for of

for(img of allImg){
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42bBNL8UCHLssvfRi5A5zWnUCKR_Mhjc9ZAz3xDOausULxyFLNkfxD2n2oN8Rzw5ZOXQ&usqp=CAU'
    //ini akan mengganti seluruh gambar yang ada
}

/*
selain menggunaan getElementBy, kita juga bisa menggunakan querySelector 

querySelector ada 2, yaitu
querySelectorAll dan querySelector
menggunaan querySelector akan mengambil element pertama, jika ada id atau class atau tag yang memiliki nilai sama, maka yang diambil adalah element pertama
-ID
document.querySelector('#id')
-class
document.querySelector('.class') 
-tag
document.querySelector('tag')

terleta pada (#, ., tag)
*/

//contoh ubah gambar menggunakan querySelectorAll

const imgClass = document.querySelectorAll("img");
console.log(imgClass);

for (img of imgClass) {
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42bBNL8UCHLssvfRi5A5zWnUCKR_Mhjc9ZAz3xDOausULxyFLNkfxD2n2oN8Rzw5ZOXQ&usqp=CAU";
}

//mengganti gambar index pertama saja
imgClass[0].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihOJIhgFiq0lXm2Z0e0I3oIUY4VywhLdgfmsuk1icAoGa_O_vDN-RioEFTyMt6omIwuI&usqp=CAU'
