'use strict';

// // Типы данных
// let number = 5;
// let string = 'hello!';
// let sym = Symbol();
// let boolean = true;
// null;
// undefined;
// let obj = {};

// // Вывод infinity && NaN
// console.log(4 / 0);
// console.log('string' * 9);

// ///Вывод undefined
// let something;
// console.log(something);

// // Объект
// let persone = {
//   name: 'Alex',
//   age: 25,
//   isMarried: false
// };
// console.log(persone.name);

// Массив
// let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];
// console.log(arr[0]);

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




// Условия 
// let num = 50;

// if (num < 49) {
//   console.log('No!');
// } else if (num > 100) {
//   console.log('No!');
// } else {
//   console.log('Yes!');
// }

// (num == 50) ? console.log('Yes!') : console.log('No!');

// switch (num) {
//   case num < 49:
//     console.log('No!');
//     break;
//   case num > 100:
//     console.log('No!');
//     break;
//   case num > 80:
//     console.log('No!');
//     break;
//   case 50:
//     console.log('Yes!');
//     break;
//   default:
//     console.log('error');
//     break;
// }




// Циклы
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }




// Функции
// let num = 0;
// function showMessage(text) {
//   console.log(text);
//   num++;
// }

// showMessage('Hello!!!');
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// let calc = (a, b) => a + b;

// console.log(calc(3, 4));
// console.log(calc(8, 4));

// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = 'test';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2px';
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));