async function getUsers() {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await respone.json();
    console.log(data);
    data.forEach((user) => {
      console.log(`${user.name} - ${user.email} - ${user.address.street}`);
    });
  } catch (err) {
    console.log(err);
  }
}
// getUsers()


// soal

/*
Ambil data dari API post: https://jsonplaceholder.typicode.com/posts

Tampilkan hanya 5 postingan pertama

Tampilkan ke console dengan format:
Post #1: sunt aut facere repellat provident occaecati
Post #2: qui est esse
...


🧠 Syarat:
Gunakan async/await sepenuhnya

Handle error dengan try...catch

Tulis fungsi async sendiri

Jangan pakai template dariku 😎

 Bonus Challenge (kalau kamu mau):
Tambahkan fitur:

Ambil postingan berdasarkan userId tertentu, misalnya: https://jsonplaceholder.typicode.com/posts?userId=1

Tampilkan hanya judul yang punya userId 1

*/

async function getPost() {
  try {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await post.json();
    // console.log(data);
    // const titles = data.map((post) => post.title);
    // console.log(titles);
    // data.forEach((post, index) => {
    //   console.log(`${index + 1}. ${post.title}`);
    // });
    // const title = await data.title
    // console.log(data[1].title)

    //filter id user
    const idUser = 1
    const results = await data.filter((post) => post.userId === idUser);
    //looping for output
    console.log(`showing data for ID user ${idUser}`)
    for (let i = 0; i < 5; i++) {
        console.log(`Post #${i + 1} : ${results[i].title}`);
      }
    // for (let i = 0; i < Math.min(20, results.length); i++) {
    //     console.log(`Post #${i + 1} : ${results[i].title}`);
    //   }
      
  } catch (err) {
    console.log(err);
  }
}
//metode diatas lebih baik menggunakan query param seperti
//"https://jsonplaceholder.typicode.com/posts?userId=1"
//agar tidak boros 
getPost();
