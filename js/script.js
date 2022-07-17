'use strict';

let numberOfFilms ;


function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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





let lastSeenFilm,
    lastSeenFilmRate;

//! С ИСПОЛЬЗОВАНИЕМ ЦИКЛА FOR
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        lastSeenFilm = prompt('Один из последних просмотренных фильмов?', '');
        lastSeenFilmRate = prompt('На сколько оцените его?', '');
    
        if ((lastSeenFilm != '' && lastSeenFilm != null) &&
            (lastSeenFilmRate != '' && lastSeenFilmRate != null) &&
            (lastSeenFilm.length < 10)) {
            personalMovieDB.movies[lastSeenFilm] = lastSeenFilmRate;
        } else {
            alert("неверное значение");
            i--;
        }
    }
}

rememberMyFilms();

//! С ИСПОЛЬЗОВАНИЕМ ЦИКЛА WHILE
// let i = 0;
// while (i < 2) {
//     lastSeenFilm = prompt('Один из последних просмотренных фильмов?', '');
//     lastSeenFilmRate = prompt('На сколько оцените его?', '');
//     i++;

//     if ((lastSeenFilm != '' && lastSeenFilm != null) &&
//         (lastSeenFilmRate != '' && lastSeenFilmRate != null) &&
//         (lastSeenFilm.length < 10)) {
//         personalMovieDB.movies[lastSeenFilm] = lastSeenFilmRate;
//     }
//     else {
//         alert("неверное значение");
//         i--;
//     }
// }

//! С ИСПОЛЬЗОВАНИЕМ ЦИКЛА DO WHILE
// let i = 0;
// do {
//     lastSeenFilm = prompt('Один из последних просмотренных фильмов?', '');
//     lastSeenFilmRate = prompt('На сколько оцените его?', '');
//     i++;

//     if ((lastSeenFilm != '' && lastSeenFilm != null) &&
//         (lastSeenFilmRate != '' && lastSeenFilmRate != null) &&
//         (lastSeenFilm.length < 10)) {
//         personalMovieDB.movies[lastSeenFilm] = lastSeenFilmRate;
//     }
//     else {
//         alert("неверное значение");
//         i--;
//     }    
// } while (
//     i < 2
// );

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert(`Просмотрено ${personalMovieDB.count} фильмов это довольно мало `);
    } else if (personalMovieDB.count >= 30) {
        alert(`Просмотрено ${personalMovieDB.count} фильмов это довольно много `);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else {
        alert('COUNT ERROR');
    }
}

detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

let favoriteGenre;

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        favoriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = favoriteGenre;
    }
}

writeYourGenres();
showMyDB();

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания