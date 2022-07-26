"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');

let filmName = prompt("Один из последних просмотренных фильмов", '');
let filmGrade = +prompt("На сколько оцениваете его?", '');


let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

personalMovieDB.movies[filmName] = filmGrade;



console.log(personalMovieDB);




// let amount = 2;

// for (let i = 0; i < amount.length; i++) {
// }