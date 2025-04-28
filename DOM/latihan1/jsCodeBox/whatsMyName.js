/*
Read the first name and last name from the inputs (#firstname and #lastname) and write the full name into the #fullname input. If an input is not filled add this placeholder #.

Examples:

First name: Jane, last name: Doe => Jane Doe
First name: empty, last name: Doe: # Doe
First name: Jane, last name: empty: Jane #
*/

function whatIsMyName() {
  const first = document.querySelector("#firstname");
  const second = document.querySelector("#lastname");
  const full = document.querySelector("#fullname");

  if (first.value != "" && second.value != "") {
    full.value = `${first.value} ${second.value}`;
  } else if (first.value == "" && second.value != "") {
    full.value = `# ${second.value}`;
  } else if (first.value != "" && second.value == "") {
    full.value = `${first.value} #`;
  } else {
    full.value = "#";
  }
}
//another version
function whatIsMyName() {
  const firstName = document.getElementById("firstname").value || "#";
  const lastName = document.getElementById("lastname").value || "#";
  document.getElementById("fullname").value = `${firstName} ${lastName}`;
}
