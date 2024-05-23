"use strict";

// results div koppelen aan variabele
let resultDiv = document.getElementById("results");

// location = volledige adres van de huidige pagina
// dit is dus inclusief de form data van een 'get' form
// console.log(location);

// location.search: alles vanaf en inclusief vraagteken
// voorbeeld: ?name=&email=&password=qsdfqsdfqsdf&age=&skill=3&date=&time=&extra=
// console.log(location.search);

// speciale ingebouwde function gebruiken om form data in verzameling variabele te steken
// dit werkt enkel met een GET formulier
let formData = new URLSearchParams(location.search);

// alle elementen uit form data tonen op pagina
formData.forEach((answer,question) => {
    resultDiv.innerHTML += question + " = " + answer + "<br>";
});