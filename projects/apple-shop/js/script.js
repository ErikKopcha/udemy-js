'use strict';

let menuList = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    menuItemLi = document.createElement('li'),
    promptForApple = document.querySelector('#prompt');

// добавление нового элемента в список меню
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menuList.appendChild(menuItemLi);

// изменяем порядок элементов списка меню
menuList.insertBefore(menuItem[2], menuItem[1]);

// заменяем картинку заднего фона
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

// меняем заголовок
title.textContent = 'Мы продаем только подлинную технику Apple';

// удаляем рекламу 
adv.remove();

// спрашиваем отношение пользователя к технике Apple
let yourOpinion = prompt('Как Вы относитесь к технике Apple?');
promptForApple.textContent = yourOpinion;