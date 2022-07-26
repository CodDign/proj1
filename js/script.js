"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');


let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++) {

    let a = prompt("Один из последних просмотренных фильмов", '');
    let b = +prompt("На сколько оцениваете его?", '');
    
        
    if(a == null || a.trim() == "" || a.length >= 50 || b == 0 || b.length == 0 || Number.isNaN(b)){
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }

}

if(personalMovieDB.count < 10){
    alert('Maло фильмoв');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Классный зритель');
} else if(personalMovieDB.count >= 30){
    alert('Киноман');
} else{
    alert('Ошибка');
}


console.log(personalMovieDB);




// let amount = 2;

// for (let i = 0; i < amount.length; i++) {
// }