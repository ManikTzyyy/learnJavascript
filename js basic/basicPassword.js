function checkPassword() {
  const password = prompt("masukan password");

  if (password == "test") {
    alert("Benar");
  } else {
    alert("salah");
  }
}


const button = document.getElementById('checkPassword');
button.addEventListener("click", checkPassword)