// Penjelasan tentang 'this' pada function

// 1. 'this' dalam Global Scope 
console.log(this); 
// Dalam konteks global (di luar function), 'this' mengacu pada objek global.
// Di browser, ini adalah 'window'. Di Node.js, ini adalah 'global'.

// 2. 'this' dalam Function Declaration
function showThis() {
    console.log(this);
}
showThis();
// Dalam function biasa (non-strict mode), 'this' mengacu pada objek global.
// Namun, dalam strict mode ('use strict'), 'this' akan menjadi undefined.

'use strict';
function showThisStrict() {
    console.log(this);
}
showThisStrict(); // undefined

// 3. 'this' dalam Method Object
const obj = {
    name: 'Object Example',
    showThis: function () {
        console.log(this);
    }
};
obj.showThis();
// Dalam method object, 'this' mengacu pada object yang memanggil method tersebut.

// 4. 'this' dalam Arrow Function
const arrowFunc = () => {
    console.log(this);
};
arrowFunc();
// Dalam arrow function, 'this' tidak memiliki konteks sendiri.
// 'this' akan mengacu pada konteks di mana arrow function didefinisikan.

// 5. 'this' dalam Constructor Function
function Person(name) {
    this.name = name;
}
const person1 = new Person('John');
console.log(person1);
// Dalam constructor function, 'this' mengacu pada instance baru yang dibuat.

// 6. 'this' dalam Event Listener
const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', function () {
    console.log(this);
    // Dalam event listener, 'this' mengacu pada elemen yang memicu event.
});
document.body.appendChild(button);

// 7. 'this' dengan call, apply, dan bind
function greet() {
    console.log(`Hello, ${this.name}`);
}
const user = { name: 'Alice' };
greet.call(user); // Hello, Alice
greet.apply(user); // Hello, Alice
const boundGreet = greet.bind(user);
boundGreet(); // Hello, Alice
// Dengan call, apply, dan bind, kita dapat mengatur nilai 'this' secara eksplisit.