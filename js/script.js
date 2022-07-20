'use strict';

let lastSeenFilm, 
    lastSeenFilmRate;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
               personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
        const lastSeenFilm = prompt('Один из последних просмотренных фильмов?', ''),
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert(`Просмотрено ${personalMovieDB.count} фильмов это довольно мало `);
        } else if (personalMovieDB.count >= 30) {
            alert(`Просмотрено ${personalMovieDB.count} фильмов это довольно много `);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else {
            alert('COUNT ERROR');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log(personalMovieDB);            
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
                i--;
            }
        }
        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
