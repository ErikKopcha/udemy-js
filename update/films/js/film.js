'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

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

if (personalMovieDB.count < 10) {
  console.log('Вы просмотрели мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель!');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман!');
} else {
  console.log('Произошла ошибка!');
}

console.log(personalMovieDB.movies);