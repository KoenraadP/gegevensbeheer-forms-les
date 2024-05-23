"use strict";

// form koppelen aan variabele
let form = document.getElementById("form");

// error div koppelen aan variabele
let errorsDiv = document.getElementById("errors");

// alle input vakjes verzamelen in array
let inputs = document.querySelectorAll("input");

// event voor versturen formulier
// wanneer het formulier verstuurd wordt, dan...
form.addEventListener("submit", function(e){

    // standaard gedrag van het versturen, blokkeren
    e.preventDefault();

    // alle input vakjes overlopen in een loop
    // controleren of ze correct ingevuld zijn
    inputs.forEach(element => {
        
        // als het element correct ingevuld werd
        // volgens de HTML validatie regels in het document
        // submit knop negeren
        if (element.validity.valid == true && element.id != "submit") {
            // css class met de naam valid toevoegen
            // deze class zit in een aparte css file
            element.classList.add("valid");
        }
        else {
            // vakje rode rand geven als het fout ingevuld werd
            // submit opnieuw negeren
            if (element.id != "submit") element.classList.add("error");
        }

    });

})