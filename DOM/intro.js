//DOM (document object model)
/*
select document
- document.getElementById(ID)
- document.getElementByClassName(class)
- document.getElementByTagName(tag)

perbedaan id dengan lainnya adalah ketia menggunaan id, maka yang dipilih hanya satu sedangkan yang lain bisa memilih lebih dari 1

*/

//select seluruh gambar yg ada pada html menggunaknan get element by tag

// const allImg = document.getElementsByTagName('img')
// console.log(allImg)
// //dengan hal tersebut kita bisa mengganti content imgnya dengan menggunaan for of

// for(img of allImg){
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42bBNL8UCHLssvfRi5A5zWnUCKR_Mhjc9ZAz3xDOausULxyFLNkfxD2n2oN8Rzw5ZOXQ&usqp=CAU'
//     //ini akan mengganti seluruh gambar yang ada
// }

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

// const imgClass = document.querySelectorAll("img");
// console.log(imgClass);

// for (img of imgClass) {
//   img.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42bBNL8UCHLssvfRi5A5zWnUCKR_Mhjc9ZAz3xDOausULxyFLNkfxD2n2oN8Rzw5ZOXQ&usqp=CAU";
// }

//mengganti gambar index pertama saja
// imgClass[0].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihOJIhgFiq0lXm2Z0e0I3oIUY4VywhLdgfmsuk1icAoGa_O_vDN-RioEFTyMt6omIwuI&usqp=CAU'


//Propetis dan method DOM
/*
- classList
    Digunakan untuk mengakses atau memodifikasi daftar kelas CSS dari elemen.
    Contoh:
    const element = document.querySelector('div');
    element.classList.add('new-class'); // Menambahkan kelas baru
    element.classList.remove('old-class'); // Menghapus kelas
    element.classList.toggle('toggle-class'); // Menambahkan/menghapus kelas secara bergantian

- getAttribute()
    Mengambil nilai atribut dari elemen HTML.
    Contoh:
    const link = document.querySelector('a');
    const hrefValue = link.getAttribute('href'); // Mengambil nilai atribut href

- setAttribute()
    Mengatur nilai atribut dari elemen HTML.
    Contoh:
    const link = document.querySelector('a');
    link.setAttribute('href', 'https://example.com'); // Mengatur nilai atribut href

- appendChild()
    Menambahkan elemen anak ke elemen induk.
    Contoh:
    const parent = document.querySelector('div');
    const child = document.createElement('p');
    parent.appendChild(child); // Menambahkan elemen <p> ke dalam <div>

- append()
    Menambahkan elemen atau teks ke elemen induk (bisa menambahkan beberapa elemen sekaligus).
    Contoh:
    const parent = document.querySelector('div');
    parent.append('Hello', document.createElement('span')); // Menambahkan teks dan elemen <span>

- prepend()
    Sama seperti append(), tetapi menambahkan elemen di awal elemen induk.
    Contoh:
    const parent = document.querySelector('div');
    parent.prepend('Hello', document.createElement('span')); // Menambahkan di awal elemen

- removeChild()
    Menghapus elemen anak dari elemen induk.
    Contoh:
    const parent = document.querySelector('div');
    const child = document.querySelector('p');
    parent.removeChild(child); // Menghapus elemen <p> dari <div>

- remove()
    Menghapus elemen itu sendiri dari DOM.
    Contoh:
    const element = document.querySelector('p');
    element.remove(); // Menghapus elemen <p>

- createElement
    Membuat elemen HTML baru.
    Contoh:
    const newElement = document.createElement('div'); // Membuat elemen <div>

- innerText
    Mengatur atau mendapatkan teks yang terlihat di dalam elemen.
    Contoh:
    const element = document.querySelector('p');
    element.innerText = 'Hello World'; // Mengatur teks yang terlihat

- textContent
    Mengatur atau mendapatkan teks di dalam elemen, termasuk teks yang tersembunyi.
    Contoh:
    const element = document.querySelector('p');
    element.textContent = 'Hello World'; // Mengatur teks termasuk yang tersembunyi

- innerHTML
    Mengatur atau mendapatkan konten HTML di dalam elemen.
    Contoh:
    const element = document.querySelector('div');
    element.innerHTML = '<p>Hello World</p>'; // Menambahkan elemen HTML di dalam <div>

- value
    Mengatur atau mendapatkan nilai dari elemen input, textarea, atau select.
    Contoh:
    const input = document.querySelector('input');
    input.value = 'New Value'; // Mengatur nilai input

- parentElement
    Mengambil elemen induk dari elemen tertentu.
    Contoh:
    const child = document.querySelector('p');
    const parent = child.parentElement; // Mengambil elemen induk dari <p>

- children
    Mengambil semua elemen anak dari elemen tertentu.
    Contoh:
    const parent = document.querySelector('div');
    const children = parent.children; // Mengambil semua elemen anak dari <div>

- nextSibling
    Mengambil elemen saudara berikutnya (termasuk node teks).
    Contoh:
    const element = document.querySelector('p');
    const next = element.nextSibling; // Mengambil elemen saudara berikutnya

- previousSibling
    Mengambil elemen saudara sebelumnya (termasuk node teks).
    Contoh:
    const element = document.querySelector('p');
    const previous = element.previousSibling; // Mengambil elemen saudara sebelumnya

- style
    Mengatur atau mendapatkan gaya CSS inline dari elemen.
    Contoh:
    const element = document.querySelector('div');
    element.style.color = 'red'; // Mengatur warna teks menjadi merah
*/