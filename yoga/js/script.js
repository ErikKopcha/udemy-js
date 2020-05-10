 // когда загрузится весь DOM страницы
 window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // создаем табы
   let tab = document.querySelectorAll('.info-header-tab'),
     info = document.querySelector('.info-header'),
     tabContent = document.querySelectorAll('.info-tabcontent');

   // скрываем все блоки, кроме первого
   function hideTabContent(a) {
     for (let i = a; i < tabContent.length; i++) {
       tabContent[i].classList.remove('show');
       tabContent[i].classList.add('hide');
     }
   }

   hideTabContent(1);

   // показываем блоки
   function showTabContent(b) {
     if (tabContent[b].classList.contains('hide')) {
       tabContent[b].classList.remove('hide');
       tabContent[b].classList.add('show');
     }
   }

   // показываем привязанный блок к тайтлу
   info.addEventListener('click', function (event) {
     let target = event.target;

     if (target && target.classList.contains('info-header-tab')) {
       for (let i = 0; i < tab.length; i++) {
         if (target == tab[i]) {
           hideTabContent(0); // скрываем все блоки
           showTabContent(i); // показываем нужные
           break;
         }
       }
     }
   });

   // timer 

   let deadline = '2025.10.10';

   // узнаем промежуток времени между временем в данный момент и дедлайном
   function getTimeRemaining(endtime) {
     // превращает любую дату в количество миллисекунд, 
     // Date.parse(new Date()) здесь мы узнаем текущую дату, 
     // когда пользователь зашел на страницу
     let t = Date.parse(endtime) - Date.parse(new Date()),
       seconds = Math.floor((t / 1000) % 60), // получаем секунды
       minutes = Math.floor((t / 1000 / 60) % 60), // получаем минуты
       hours = Math.floor((t / (1000 * 60 * 60))); // получаем часы
     // если нужны дни
     // hours = Math.floor((t / 1000 / 60 / 60) % 24),
     // days = Math.floor((t / (1000 * 60 * 60 * 24))); // получаем дни

     // возвращает полное время, часы, минуты и секунды
     // которые мы потом запишем в верстку и зделаем ее динаминой
     return {
       'total': t,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds
     };
   }

   // функция для превращения статичной верстки в динамическую
   // id - id блока с таймером
   // endtime - сюда будет приходить дедлайн
   function setClock(id, endtime) {
     let timer = document.getElementById(id),
       hours = timer.querySelector('.hours'),
       minutes = timer.querySelector('.minutes'),
       seconds = timer.querySelector('.seconds'),
       // переменная для запуска интервала обновления таймера
       timeInterval = setInterval(updateClock, 1000);

     // создаем функцию обновления с дедлайном,
     // каждую секунду мы будем получать обновленные данные
     // о времени
     function updateClock() {
       let t = getTimeRemaining(endtime);
       // помещяем данные в верстку
       hours.textContent = t.hours;
       minutes.textContent = t.minutes;
       seconds.textContent = t.seconds;

       // добавляем 0, если число меньше 10
       function addZero(num) {
         if (num <= 9) {
           return '0' + num;
         } else {
           return num;
         }
       }
       // добавляем в верстку 0 
       hours.textContent = addZero(t.hours);
       minutes.textContent = addZero(t.minutes);
       seconds.textContent = addZero(t.seconds);

       // условие для остановки таймера и добавление нулей,
       // чтобы не было минуса
       if (t.total <= 0) {
         clearInterval(timeInterval);
         hours.textContent = '00';
         minutes.textContent = '00';
         seconds.textContent = '00';
       }
     }
   }
   // ф-ция для обновления часов каждую секунду

   // вызываем ф-цию с id и временем остановки таймера
   setClock('timer', deadline);

   // вызов модального окна

   function showModal() {
     let more = document.querySelector('.more'),
       overlay = document.querySelector('.overlay'),
       close = document.querySelector('.popup-close'),
       overlaySuccessClose = document.querySelector('.overlay__success-close'),
       overlaySuccess = document.querySelector('.overlay__success'),
       descriptionBtn = document.querySelectorAll('.description-btn');

     more.addEventListener('click', function () {
       overlay.style.display = 'block';
       // this - наша кнопка, на которую нажимаем
       this.classList.add('more-splash');
       // запрет на прокрутку страницы при открытым модальным окном
       document.body.style.overflow = 'hidden';
     });

     // вызов модалки на табах
     descriptionBtn.forEach((el) => {
       el.addEventListener('click', function () {
         overlay.style.display = 'block';
         this.classList.add('more-splash');
         document.body.style.overflow = 'hidden';
       });
     });

     close.addEventListener('click', function () {
       overlay.style.display = "none";
       more.classList.remove('more-splash');
       document.body.style.overflow = '';
     });

     overlaySuccessClose.addEventListener('click', function () {
       overlaySuccess.style.display = 'none';
       more.classList.remove('more-splash');
       document.body.style.overflow = '';
     });

     window.addEventListener('keydown', function (evt) {
       if (evt.keyCode === 27) {
         evt.preventDefault();
         overlay.style.display = "none";
         more.classList.remove('more-splash');
         document.body.style.overflow = '';
       }
     });
   }

   showModal();

   // form
   
   let message = {
     loading: 'Загрузка',
     success: 'Спасибо! Скоро мы с Вами свяжемся!',
     failure: 'Что-то пошло не так...'
   };

   let form = document.querySelector('.main-form'),
     input = document.querySelectorAll('input'),
     statusMessage = document.createElement('div'),
     overlaySuccess = document.querySelector('.overlay__success'),
     contactForm = document.querySelector('#form');

   statusMessage.classList.add('status');

   function sendForm(elem) {
     elem.addEventListener('submit', function (e) {
       e.preventDefault();
       elem.appendChild(statusMessage);

       let formData = new FormData(elem);

       function postData(data) {
         return new Promise(function (resolve, reject) {
           let request = new XMLHttpRequest();
           request.open('POST', 'server.php');
           request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

           request.send(formData);
           request.onreadystatechange = function () {
             if (request.readyState < 4) {
               resolve();
             }
             if (request.readyState === 4) {
               if (request.status == 200 && request.status < 300) {
                 resolve();
               } else {
                 reject();
               }
             }
           };
         });
       }

       function clearInput() {
         input.forEach((el) => {
           el.value = '';
         });
       }

       postData(formData)
         .then(() => statusMessage.innerHTML = message.loading)
         .then(() => {
           statusMessage.innerHTML = message.success;
           overlaySuccess.style.display = 'block';
         })
         .catch(() => statusMessage.innerHTML = message.failure)
         .then(clearInput);
     });
   }

   sendForm(form);
   sendForm(contactForm);

   // slider

   // отвечает за слайд, который показывается в текущий момент
   let slidIndex = 1,
     slides = document.querySelectorAll('.slider-item'),
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next'),
     dotsWrap = document.querySelector('.slider-dots'),
     dots = document.querySelectorAll('.dot');

   showSlides();

   function showSlides(n) {
     // если мы дошли до конца длины слайдов,
     // то возвращаемся к первому слайду
     if (n > slides.length) {
       slidIndex = 1;
     }
     // если мы листаем назад, то после первого слайда
     // мы возвращаемся к последнему слайду в массиве
     if (n < 1) {
       slidIndex = slides.length;
     }
     // скрываем все слайды и класс активной точки
     slides.forEach((el) => el.style.display = 'none');
     dots.forEach((el) => el.classList.remove('dot-active'));
     // показываем нужный слайд и даем активную точку
     // slidIndex - 1, чтобы показать первый слайд
     // тк в массиве 1 === 0
     slides[slidIndex - 1].style.display = 'block';
     dots[slidIndex - 1].classList.add('dot-active');
   }

   // увеличивает параметер slidIndex
   function plusSlides(n) {
     showSlides(slidIndex += n);
   }

   // определяем текущий слайд и устанавливаем его
   function currentSlide(n) {
     showSlides(slidIndex = n);
   }

   // при нажатии на кнопку назад
   // мы уменьшаем наш индекс на -1
   prev.addEventListener('click', () => {
     plusSlides(-1);
   });

   // при нажатии на кнопку вперед
   // мы увеличиваем наш индекс на 1
   next.addEventListener('click', () => {
     plusSlides(1);
   });

   // реализация кликов на точки
   dotsWrap.addEventListener('click', (event) => {
     for (let i = 0; i < dots.length + 1; i++) {
       // используем делегирование
       // узнаем элемент на который мы кликнули - target
       // + узнаем номер точки
       //dots.length + 1 - запускаем цикл на 1 раз больше, чтобы передать 4-ую точку
       //dots[i - 1] - из-за того, массив начинается с нуля
       if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
         currentSlide(i);
       }
     }
   });

   // calculator

   let persons = document.querySelectorAll('.counter-block-input')[0],
     restDays = document.querySelectorAll('.counter-block-input')[1],
     place = document.getElementById('select'),
     totalValue = document.getElementById('total'),
     personsSum = 0,
     daysSum = 0,
     total = 0;

   totalValue.innerHTML = 0;

   persons.addEventListener('change', () => {
     personsSum = +persons.value;
     total = (daysSum + personsSum) * 4000;

     if (restDays.value == '' || persons.value == '') {
       totalValue.innerHTML = 0;
     } else {
       totalValue.innerHTML = total;
     }
   });

   restDays.addEventListener('change', () => {
     daysSum = +restDays.value;
     total = (daysSum + personsSum) * 4000;

     if (persons.value == '' || restDays.value == '') {
       totalValue.innerHTML = 0;
     } else {
       totalValue.innerHTML = total;
     }
   });

   place.addEventListener('change', () => {
     if (restDays.value == '' || persons.value == '') {
       totalValue.innerHTML = 0;
     } else {
       // получаем value option из select
       // place.options[place.selectedIndex].value;
       let a = total;
       totalValue.innerHTML = a * place.options[place.selectedIndex].value;
     }
   });
 });