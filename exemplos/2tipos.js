"use strict";
function somaValores(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
console.log(somaValores(1, 4));
console.log(somaValores('ola ', 453));
console.log(somaValores(2, ' ola'));
console.log(somaValores('ola ', 'td bem?'));
