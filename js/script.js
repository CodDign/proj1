"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр номер ${i+1}`, '');
    }
}
writeYourGenres();

function rememberMyFilm(){
    for (let i = 0; i < 2; i++) {

        let a = prompt("Один из последних просмотренных фильмов", '');
        let b = +prompt("На сколько оцениваете его?", '');
        
            
        if(a == null || a.trim() == "" || a.length >= 50 || b == 0 || b.length == 0 || Number.isNaN(b)){
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
    
    }  
}
rememberMyFilm();


function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert('Maло фильмoв');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Классный зритель');
    } else if(personalMovieDB.count >= 30){
        alert('Киноман');
    } else{
        alert('Ошибка');
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
