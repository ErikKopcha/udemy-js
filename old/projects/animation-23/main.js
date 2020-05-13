'use strict';

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box'),
    btns = document.querySelector('.first');

function myAnimation () {
  let pos = 0;
  let id = setInterval(frame, 10);

  function frame () {
    if (pos === 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

function myAnimationRevert () {
  let pos = 300;
  let id = setInterval(frame, 10);

  function frame () {
    if (pos === 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btns.addEventListener('click', myAnimationRevert);

// делегирование
let btnBlock = document.querySelector('.btn-block'),
    buttons = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.second')) {
    console.log('Hello!');
  }
});