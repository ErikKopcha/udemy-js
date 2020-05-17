'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

  // isNaN - если внутри не число, то возвращается правда ()
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done!');
    } else {
      i--;
      console.log('Error');
    }
  }
}

rememberMyFilms();

function detectPersonLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Вы просмотрели мало фильмов!');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель!');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
  } else {
    console.log('Произошла ошибка!');
  }
}

detectPersonLevel();

function showMyDB(hidden) {
  if(hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
  }
}

writeYourGenres();
