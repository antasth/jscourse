'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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



if (personalMovieDB.count < 10) {
    alert(`Просмотрено ${personalMovieDB.count} фильмов это довольно мало `);
} else if (personalMovieDB.count >= 30) {
    alert(`Просмотрено ${personalMovieDB.count} фильмов это довольно много `);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else {
    alert('COUNT ERROR');
}

console.log(personalMovieDB);
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, 
и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - 
"Вы классический зритель", 
а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами

Код возьмите из предыдущего домашнего задания*/