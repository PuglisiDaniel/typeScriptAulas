"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somarNumeros(n1, n2, devPrintar, frase) {
    let resultado = n1 + n2;
    if (devPrintar) {
        console.log(frase + resultado);
    }
    return n1 + n2;
}
let devPrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase));
        }
    });
}
