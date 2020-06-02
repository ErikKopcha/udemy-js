'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('.add'),
    inputFilm = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('.checkbox'),
    buttonSuccess = addForm.querySelector('button');


promo.forEach(el => el.remove());
genre.textContent = 'драма';
promoBg.style.background = 'url(img/bg.jpg) center center/cover no-repeat';

// чистим блоки
movieList.innerHTML = '';

// добавляем новые фильмы


// сортируем фильмы
movieDB.movies.sort();

// вставляем фильмы
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1 + '. '} ${film}
      <div class="delete"></div>
    </li>
  `;
});