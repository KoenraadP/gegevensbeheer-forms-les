"use strict";

// formulier zelf koppelen
const form = document.getElementById("form"); // <form>
// alle input tags verzamelen
const inputs = document.querySelectorAll("input"); // alle <input>
// errors div koppelen waarin we de foutboodschappen willen plaatsen
const errorsDiv = document.getElementById("errors"); // <div id="errors">

// code die uitgevoerd wordt
// wanneer het formulier verstuurd wordt
// standaard wordt de volledige pagina herladen
// wanneer het formulier verstuurd wordt
// omdat er geen specifieke action is
form.addEventListener("submit", function (e) {

    // het herladen van de pagina standaard blokkeren
    // voorkom de standaard action --> prevent default (action)
    e.preventDefault();

    // eerst styling weer verwijderen
    // dus alle rode en groene randen weg
    RemoveClasses();

    // array om foutboodschappen in te verzamelen
    let errors = [];

    // errors div leeg maken
    errorsDiv.textContent = "";

    // validity van alle input tags controleren
    // m.a.w.: zijn ze goed ingevuld
    inputs.forEach(element => {
        // zorgen dat de submit input NIET opgenomen wordt
        // in de check hieronder
        // om te zorgen dat de knop niet rood of groen wordt
        if (element.type !== "submit") {
            // wat als het WEL goed ingevuld is
            if (element.validity.valid) { // === true
                // groene rand geven door toekennen valid class
                element.classList.add("valid");
            }
            // wat als het NIET goed ingevuld is
            else {
                // rode rand geven door toekennen error class
                element.classList.add("error");
                // foutboodschap in variabele opslaan en 
                // er ook bij zetten over welk element het gaat
                // voorbeeld: username: Vul dit veld in.
                let validationMessage = element.id + ": " + element.validationMessage;
                // validationMessage in errors array stoppen
                errors.push(validationMessage);
            }
        }
    });

    // controleren of er errors zijn
    // wanneer zijn er errors? wanneer de errors array effectief data bevat
    if (errors.length > 0) {
        errors.forEach(element => {
            // iedere error in aparte <p> plaatsen
            let p = document.createElement("p");
            p.textContent = element;
            // p toevoegen aan div
            errorsDiv.append(p);
        });
    }
    else {
        // als alles OK ingevuld werd
        // pop-up tonen en doorgaan naar de creo website
        alert("Login OK!");
        // verschillende opties om URL aan te passen
        location.assign("https://www.creo.be");
        // location.replace("https://www.creo.be");
        // location.href = "https://www.creo.be";
    }

})

// function die bij alle input tags
// alle classes verwijdert
// door gewoon het attribute class te verwijderen
function RemoveClasses() {
    inputs.forEach(element => {
        // volledige class attribute verwijderen
        // dus dan zijn alle classes weg
        element.removeAttribute("class");
    });
}