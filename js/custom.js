'use strict';

// Типы данных
let number = 5;
let string = 'hello!';
let sym = Symbol();
let boolean = true;
null;
undefined;
let obj = {};

// Вывод infinity && NaN
console.log(4 / 0);
console.log('string' * 9);

///Вывод undefined
let something;
console.log(something);

// Объект
let persone = {
  name: 'Alex',
  age: 25,
  isMarried: false
};
console.log(persone.name);

// Массив
let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];
console.log(arr[0]);

// всплывашка
// alert('Hellor World!');

// Выбор ok and cancel = true / false
// let answer = confirm('Are you here?')
// console.log(answer);

// есть возможность вписать ответ на вопрос
// let answer = +prompt('Are you here?', 'Yes');
// console.log(typeof(answer));

// Операторы в JS
// let incr = 10,
//     decr = 10;

// console.log(incr++); // инкремент
// console.log(decr--); // декремент

// console.log(5 % 2); // остаток от деления

// console.log('2' == 2);

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && !isClose);