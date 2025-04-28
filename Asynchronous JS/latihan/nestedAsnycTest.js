/*
🎯 Tantangan: Fetch Data Postingan dan Komentar dari Postingan Tertentu
Langkah-langkah:

Ambil 1 post dari API menggunakan userId=1 dan tampilkan judulnya.

Ambil komentar dari post yang tadi diambil.

Tampilkan judul post dan komentar terkait.

URL API yang kita pakai:

Post: https://jsonplaceholder.typicode.com/posts?userId=1

Komentar: https://jsonplaceholder.typicode.com/comments?postId=1

🧩 Gaya Nested Async:
Fetch post terlebih dahulu.

Setelah itu, gunakan id post untuk fetch komentar.

Tampilkan judul post dan komentar-komentar terkait.

✍️ Langkah-Langkah Challenge:
Buat function getPost untuk mengambil post.

Dalam getPost, ambil id dari post pertama, lalu fetch komentar berdasarkan postId.

Tampilkan:

Judul Post

Semua komentar dari post tersebut
*/

async function getPost() {
  try {
    const responsePost = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const dataPost = await responsePost.json();

    const idPost = await Math.min(5, dataPost.length); //ini menjaga agar ketika user hanya memiliki maksimal 10 post maka ketika menginput 12 maka otomatis yang diambil menjadi 10

    const responeComment = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${idPost}`
    );

    const dataComment = await responeComment.json();

    console.log(`Judul Post : ${dataPost[idPost - 1].title}`);
    console.log(`===================Comment=======================`);

    // console.log(dataComment)

    //     const comment = await dataComment.map((com) => {
    //       console.log(
    //         `
    // Name : ${com.name}
    // Email : ${com.email}
    // body : ${com.body}

    // `
    //       );
    //     });

    dataComment.forEach((com) => {
      console.log(`
Name: ${com.name}
Email: ${com.email}
Body: ${com.body}
  
  `);
    });
  } catch (err) {
    console.log("error :", err);
  }
}
getPost();

//versi perbaikian 

/*


async function getPost() {
  try {
    const responsePost = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const dataPost = await responsePost.json();

    // Ambil post pertama
    const firstPost = dataPost[0];

    // Fetch komentar berdasarkan id post pertama
    const responseComment = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    const dataComment = await responseComment.json();

    // Tampilkan hasil
    console.log(`Judul Post: ${firstPost.title}`);
    console.log("=================== Comment ======================");
    
    // Tampilkan komentar
    dataComment.forEach((com) => {
      console.log(`
Name: ${com.name}
Email: ${com.email}
Body: ${com.body}

`);
    });

  } catch (err) {
    console.log("Error:", err);
  }
}

getPost();

*/ 