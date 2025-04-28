function headline2(greeting) {
    const hi = 'Hi';
    const hello = 'Hello';
    const text = document.createElement('p');
    text.textContent = greeting; // supaya paragrafnya ada isinya
    
    if (greeting.includes(hi) && greeting.includes(hello)) {
      text.style.color = 'red';
    } else if (greeting.includes(hi)) {
      text.style.color = 'green';
    } else if (greeting.includes(hello)) {
      text.style.color = 'blue';
    }
  
    document.body.append(text);
  }
  