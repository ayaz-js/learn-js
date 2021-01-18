let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Киноман');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('Запись закрыта')
    }
}

showMyBD(personalMovieDB.privat);

function writeYourGeners() {

    for (let i = 1; i <= 3; i++ ) {
        personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }    
}

writeYourGeners();

// console.log(personalMovieDB);