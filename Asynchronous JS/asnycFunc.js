//async
//await

//async keyword

/*
- fungsi async akan otomatis menjadi promise
- kalo fungsinya punya data, maka resolvenya akan ngirim data juga yang bisa diolah
- kalo dalam function ada object throw error, maka akan menjalankan bagian reject
*/
//contoh
const helo = async () => {
  // throw 'error uy'
  return "Hello world";
};

async function hola() {
//   return "hello";
  throw "bye";
}

helo()
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log(err);
  });

hola()
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log(err);
  });

//Await Keywoard
/* 
- keywoard await hanya bisa kita gunakan di dalam function dengan "async"
- await akan melakukan jeda proses selanjutnya didalam function, menunggu promise yang dijalankan resolved
*/

const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve();
      }, delay);
    });
  };

async function cange(){
    //harus menambahkan await agar bisa proses berjalam 1 1 seperti proses red dulu baru blue
    await colorChange("red",1000)
    await colorChange("blue",1000)
    return 'all done'
}

//.then digunakan untuk handler ketika proses selesai
// cange().then((res)=>{
//     console.log(res)
// })

async function printWarna(){
    await cange()
    console.log("done from print warna")
}

printWarna()

//contoh

const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

async function requestHandler() {
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error', error);
	}
}