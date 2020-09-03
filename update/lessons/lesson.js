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
 
 // деструктуризация
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

// AJAX запросы
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

// Промиы
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
//

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));