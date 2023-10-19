'use strict';
let numero;
do {
    numero = prompt('Introduce un número mayor que 100: ')
}while(!(numero === null || numero === '' || numero>100))

alert ('el número introducido es: ' +  numero);