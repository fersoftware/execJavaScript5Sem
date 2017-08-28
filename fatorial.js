"use strict";

function somaNumeros(n) {
    var soma = 1, i = n;

    for(i; i > 0; i--) {
        soma *= i;
    }
    return soma;
}

function facRec(n) {
    if(n === 0)
        return 1;
    else
        return n * facRec(n -1);
}

var n = 0;

do {
    n = parseInt(prompt("Digite a quantidade de números"));
}while (isNaN(n));

alert("Resultado: " + somaNumeros(n));
alert("Resultado Fatorial: " + facRec(n));
