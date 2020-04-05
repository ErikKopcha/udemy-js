'use strict';



////////////////////////////// Типы данных



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



////////////////////////////// Операторы в JS



// let incr = 10,
//     decr = 10;

// console.log(incr++); // инкремент
// console.log(decr--); // декремент

// console.log(5 % 2); // остаток от деления

// console.log('2' == 2);

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && !isClose);



////////////////////////////// Условия 



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



////////////////////////////// Циклы



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



////////////////////////////// Функции



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



////////////////////////////// callback



// function first() {
//   setTimeout( function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log('i learn ' + lang);
//   callback();
// }

// learnJS('JavaScript',  function() {
//   console.log('3 lesson');
// });

// function done() {
//   console.log('3 lesson');
// }
// learnJS('JavaScript', done);



////////////////////////////// object



// let options = {
//   width: 1024,
//   height: 1024,
//   name: 'test',
// };

// console.log(options.name);
 
// options.bool = false;
// options.colors = {
//   border: 'black',
//   background: 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//   console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);



////////////////////////////// massive



// let arr = ['first', 2, 3, 'four', 5];

// item - каждый элеиент
// і - номер каждого элемента
// mass - массив какой используется
// arr.forEach(function (item, i, mass) {
//   console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// arr[99] = 99; // нельзя так
// console.log(arr.length); // выводит не количество элем, а последний индекс + 1
// console.log(arr);

// // arr.pop(); // удалить последний элемент
// // arr.push('5'); // добавить элемент
// // arr.shift(); // удаляет первый элемент
// // arr.unshift('1'); // добавляет первый элемент

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr);

// let mass = [1, 3, 5, 6, 7];

// // чтобы получить только значение массива - of
// for (let key of mass) {
//   console.log(key);
// }

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(','); // разбивает элементы массива
// console.log(arr);

// let arr = ['ass', 'qwewew', 'qweww'],
//     i = arr.join(', '); // склеивает элементы массива в строки
// console.log(i);

// Сортировка по алфавиту (строки)
// let arr = ['ass', 'qwewew', 'qweww'],
//     i = arr.sort();
// console.log(arr);

// Сортировка по алфавиту (числа)
// let arr = ['12', '1', '111'],
//     i = arr.sort(compareNum);

// function compareNum(a, b) {
//   return a-b;
// }

// console.log(arr);

// let soldier = {
//   health: 400,
//   armor: 100
// };

// let john = {
//   health: 100
// };

// john.__proto__ = soldier; // добавляет Джона к потомкам soldier
// console.log(john);
// console.log(john.armor);



////////////////////////////// динамическая типизация



// - to string
// 1
// console.log(typeof(String(null)));
// // 2
// console.log(typeof('s' + false));
// // 3
// console.log('https:ss' + 4);

// // - to number
// // 1
// console.log(typeof(Number(null)));
// // 2
// console.log(typeof(5 + +'5'));
// // 3
// console.log(typeof(parseInt('15px', 10)));

// // let ans = +prompt('Hello?', ''); // всегда получим ответ число
// // 1
// let switcher = null;
// if (switcher) {
//   console.log('working..');
// }

// switcher = 1;
// if (switcher) {
//   console.log('working..');
// }

// // 2
// console.log(typeof(Boolean('5')));
// // 3
// console.log(typeof(!!'5'));



////////////////////////////// динамическая типизация ДЗ



// let x = 5;
// console.log(x++); // 5
// console.log([] + false - null + true); // NaN
// console.log([] + 1 + 2); // 12
// console.log('1'[0]); // 1
// console.log(2 && 1 && null && 0 && undefined); // null
// console.log(null || 2 && 3 || 4); // 3
// console.log(+"Infinity"); // Infinity
// console.log("Ёжик" > "яблоко"); // false
// console.log(0 || "" || 2 || undefined || true || falsе); // 2



////////////////////////////// получение элементов со страницы



// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');
    
// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'black';
// }

// // item - каждый элемент
// // i - номер конфеты
// // hearts - весь массив
// heart.forEach(function (item, i, hearts) {
//   item.style.backgroundColor = 'blue';
// });

// let div = document.createElement('div'),
//     text = document.createTextNode('YEEEEAAAAAP!!!!!');

// div.classList.add('black');

// // div.innerHTML = '<h1>Hello!!!</h1>';
// div.textContent = 'Hello !!!'; // безопасный прием текста от пользователя 

// // document.body.appendChild(div);
// document.body.insertBefore(div, circle[0]); // что вставляем и перед чем
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);
// // wrapper.appendChild(div);

// document.body.replaceChild(btn[1], circle[1]); // что вставляем и вместо чего вставляем