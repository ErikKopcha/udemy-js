// class CalcArea {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calcArea() {
//     return this.width * this.height;
//   }
// }

// class ColorArea extends CalcArea {
//   constructor(width, height, text, bgColor) {
//     super(width, height);

//     this.text = text;
//     this.bgColor = bgColor;
//   }
// }

// const div = new ColorArea(10, 20, 'Heeey', 'red');
// console.log('div: ', div.calcArea());

// let area = new CalcArea(10, 20);
// let square = new CalcArea(20, 2);

// console.log('area: ', area.calcArea());


// callback
// function call(lang, callbacks) {
//   console.log(`Я изучаю ${lang}`);
//   callbacks();
// }
//
// function callB() {
//   console.log('Я прошел этот урок!');
// }
//
// call('JS', callB);

// object 
//  let options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//      border: 'black',
//      background: 'red'
//    }, 
//    makeTest: function() {
//      console.log('test');
//    }
//  };
//
//  options.makeTest();
 
 ///////////////////////////////////////////////////////////////////// деструктуризация
 // вытаскиваем ключи в отдельную переменную
 // const {border, background} = options.colors;
 // console.log(border);

 // получаем количество ключей объекта
 // console.log(Object.keys(options).length);
 
 // console.log(options.name);
 //
 // delete options.name;
 // console.log(options);

// перебираем все свойства в объекте
// выводим ключ - значение каждого свойства
// let counter = 0;
//
//  for (let key in options) {
//    if ((typeof options[key]) === 'object') {
//      for (let i in options[key]) {
//        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//        counter++;
//      }
//    } else {
//      console.log(`Свойство ${key} имеет значение ${options[key]}`);
//      counter++;
//    }
//  }
//  console.log(counter)


// function c(number, basis = 2) {
//   console.log(number * basis);
// }

// c(3);

///////////////////////////////////////////////////////////////////// AJAX запросы
// const inputRub = document.createElement('input'),
//       inputUsd = document.createElement('input');
  
// inputRub.addEventListener('input', () => {
//   const request = new XMLHttpRequest();

//   // собирает настройки для запроса
//   // request.open(method, url, async, login, pass);
//   request.open('GET', 'current.json');

//   // что именно мы отправляем, HTTP заголовки
//   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//   // отправка запроса
//   // request.send(body); if method post
//   request.send();

//   // свойства объекта
//   // status - статус от запроса 100..200..300..400..500
//   // statusText - текстовое описание от сервера
//   // response - ответ от сервера
//   // readyState - текущее состояние запроса

//   // отследование запроса в текущий момент
//   request.addEventListener('load', () => {
//     if (request.status === 200) {
//       console.log(request.response);

//       const data = JSON.parse(request.response);
//       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//     } else {
//       console.error('Error!');
//       inputUsd.value = 'Что-то пошло не так.';
//     }
//   });
// });

// document.body.appendChild(inputRub);
// document.body.appendChild(inputUsd);

///////////////////////////////////////////////////////////////////// Промиы
// console.log('');
//
// const req = new Promise(function (resolve, reject){
//   console.log();
//
//   const product = {
//     name: 'TV',
//     price: 2000
//   };
//
//   resolve(product);
// });
//
// req.then((product) => {
//   console.log(productz);
// });

///////////////////////////////////////////////////////////////////// fetch
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify({name: 'Alex'}),
//   headers: {
//     'Content-type': 'application-json'
//   }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

///////////////////////////////////////////////////////////////////// методи перебору масивів

// filter
// const names = ['Ivan', 'Ann', 'Alex', 'Voldemart'];
// const shortNames = names.filter((name) => {
//   return name.length < 5;
// }); // < 5

// map
// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map((item) => {
//   return item.toLowerCase();
// }); // lovercase

// every/some
// const some = ['4', 'asd', 'A'];
// some.some(item => {
//   return typeof(item) === 'number';
// }); // true (якщо хоч один number)
//
// some.every(item => {
//   return typeof(item) === 'number';
// }); // false (якщо всі number)

//reduce
// const arr = [4, 5, 6, 1, 2];
// const res = arr.reduce((sum, current) => {
//   return sum + current;
// }); // сума всіх чисел

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal'
// };
//
// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);
//
// console.log(newArr); // ['ivan', 'ann']


/////////////////////////////////////////////////////////////////// localStorage

// const checkbox = document.getElementById('check');

// if (JSON.parse(localStorage.getItem('isChecked')) == true) {
//   checkbox.checked = true;
// } else {
//   checkbox.checked = false;
// }

// checkbox.addEventListener('change', () => {
//   if (checkbox.checked == true) {
//     localStorage.setItem('isChecked', true);
//   } else {
//     localStorage.setItem('isChecked', false);
//   }
// });


//////////////////////////////////////////////////////////////// RegExp

// const ans = 'AnnsnN';

// // i - шукаємо без регістру
// // g - декілька співпадінь
// // m - багатостроковий режим
// const reg = /n/ig;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// password
// const pass = prompt(`password`);

// console.log(pass.replace('/./g, "*"'));

// console.log('12-23-42'.replace(/-/g, ':'));

// test 
// const reg = /n/ig;
// const ans = '123wq';

// console.log(reg.test(ans)); // false

// \d - шукаємо цифри
// \w - всі букви
// \s - всі пробіли

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i)); // цифра буква цифра буква

// \D - не числа
// \W - не букви
// \S - не пробіли


///////////////////////////////////////////////////////// get set
// const persone = {
//   name: 'Alex',
//   age: 25,

//   get userAge() {
//     return this.age;
//   },

//   set userAge(num) {
//     this.age = num;
//   }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);

//////////////////////////////////////////////////////// інкапсуляція
// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function() {
//     console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//   };

//   this.getAge = function() {
//     return userAge;
//   };

//   this.setAge = function(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение!');
//     }
//   };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);

// console.log(ivan.getAge());

// ivan.userAge = 30;

// ivan.say();


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//   }

//   say() {
//     console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Недопустимое значение!');
//     }
//   }
// }

// const ivan = new User('Ivan', 27);

// ivan.age = 99;

// console.log(ivan.age);

// ivan.say();