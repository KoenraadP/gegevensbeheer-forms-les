"use strict";

// nodige HTML elementen koppelen
// eerst de slider (input range)
const range = document.getElementById("skill");
// nu het span element waar het cijfer in staat
const number = document.getElementById("skillNumber");

// als ik de waarde van de range verander
// dan wil ik deze waarde zien verschijnen er net boven
// in het 'number' element
// "input" --> terwijl je aan het schuiven bent
// "change" --> pas nadat je de keuze gemaakt hebt
range.addEventListener("input",function(){
    // alert("Werkt dit?");
    number.textContent = range.value;
})