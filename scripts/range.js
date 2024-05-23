"use strict";

// span met cijfer koppelen aan variabele
let number = document.getElementById("skill-number");

// de range zelf (het input element) koppelen aan variabele
let range = document.getElementById("skill");

range.addEventListener("input", function(){
    number.innerHTML = range.value;
});