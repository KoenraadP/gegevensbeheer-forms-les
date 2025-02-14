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
form.addEventListener("submit",function(e){
    
    // het herladen van de pagina standaard blokkeren
    // voorkom de standaard action --> prevent default (action)
    e.preventDefault();

    // eerst styling weer verwijderen
    // dus alle rode en groene randen weg
    RemoveClasses();

})

// function die bij alle input tags
// alle classes verwijdert
// door gewoon het attribute class te verwijderen
function RemoveClasses(){
    inputs.forEach(element => {
        // volledige class attribute verwijderen
        // dus dan zijn alle classes weg
        element.removeAttribute("class");
    });
}