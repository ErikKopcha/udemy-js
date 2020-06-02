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
  checkbox = addForm.querySelector('[type="checkbox"]'),
  buttonSuccess = addForm.querySelector('button');

const deleteAdv = (arr) => {
  arr.forEach(el => el.remove());
};

const makeChanges = () => {
  genre.textContent = 'драма';
  promoBg.style.background = 'url(img/bg.jpg) center center/cover no-repeat';
};

// добавляем новые фильмы
addForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  let newFilm = inputFilm.value;
  const favorite = checkbox.checked;

  // проверка на пустую строку
  if (newFilm) {
    if (favorite) {
      console.log('Вы добавили любимый фильм');
    }
    // вырезаем 21 символ и добавляем три точки
    if (newFilm.length > 21) {
      newFilm = `${newFilm.substring(0, 22)}...`;
    }
    movieDB.movies.push(newFilm);
    sort(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
  }

  ev.target.reset();
});

// сортируем фильмы
const sort = (films) => {
  films.sort();
};

// вставляем фильмы
function createMovieList(fimls, parent) {
  parent.innerHTML = "";
  sort(fimls);

  fimls.forEach((film, i) => {
    parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1 + '. '} ${film}
      <div class="delete"></div>
    </li>
  `;
  });

  // удаляем фильмы
  document.querySelectorAll('.delete').forEach((el, i) => {
    el.addEventListener('click', () => {
      // при нажатии на корзину мы удаляем родителя корзины
      // и удаляем один элемент из базы данных(массива)
      el.parentElement.remove();
      movieDB.movies.splice(i, 1);
      // рекурсия для перестроения списка фильмов
      createMovieList(fimls, parent);
    });
  });
}

deleteAdv(promo);
makeChanges();
createMovieList(movieDB.movies, movieList);