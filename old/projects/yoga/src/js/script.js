 // когда загрузится весь DOM страницы
 window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let calc = require('./parts/calc'),
     form = require('./parts/form'),
     modal = require('./parts/modal'),
     slider = require('./parts/slider'),
     tabs = require('./parts/tab'),
     timer = require('./parts/timer');

     calc();
     form();
     modal();
     slider();
     tabs();
     timer();
 });