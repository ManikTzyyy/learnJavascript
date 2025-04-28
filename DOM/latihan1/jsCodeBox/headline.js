//Given is a text headline. Write this string in a h1 HTML tag and append it to the HTML body.


function printHeadline(headline) {
    const heading = document.createElement('h1')
    heading.innerText = headline
    const body = document.querySelector('body')
    body.append(heading)
  }


console.log(printHeadline('Hello world'))