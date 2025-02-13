"use strict";

// volledige adres tonen
// console.log(location);
// enkel stukje van formulier tonen
// dit is het stuk van de url die start met een vraagteken
// console.log(location.search);
// zonder vraagteken
// starten bij het tweede karakter in de string
// dit staat op plaats 1
// console.log(location.search.slice(1));
// console.log(location.search.substring(1));


// alle form key/value pairs apart opslaan
// const formData = location.search.slice(1).split("&");

// alles uit formData tonen
// formData.forEach(element => {
//     console.log(element);
// })

// enkel de values tonen
// formData.forEach(element => {
//     console.log(element.split("=")[1]);
// });

// makkelijkere manier :)
const formData = new URLSearchParams(location.search);

// p element uit html koppelen
const results = document.getElementById("results");

// in p element alle form data tonen
// formData.forEach(element => {
//     results.innerHTML += element + "<br>";
// });

// ook de 'keys' tonen naast de 'values'
formData.forEach((value,key) => {
    results.innerHTML += key + " = " + value + "<br>";
});
