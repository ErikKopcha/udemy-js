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
