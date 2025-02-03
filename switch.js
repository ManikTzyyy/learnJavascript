const buttoncheckDay = document.getElementById('checkDay');


function checkDay() {
  const day = prompt("masukan angka");
  const dayinput = Number(day);

  switch (dayinput) {
    case 1:
      console.log("sunday");
      break;
    case 2:
      console.log("monday");
      break;
    case 3:
      console.log("tuesday");
      break;
    case 4:
      console.log("wednesday");
      break;
    case 5:
      console.log("thursday");
      break;
    case 6:
      console.log("friday");
      break;
    case 7:
      console.log("saturday");
      break;
  }
}
buttoncheckDay.addEventListener('click', checkDay);