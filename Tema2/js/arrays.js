"use strict";

const capitalize = cadena =>    cadena.at(0).toUpperCase() + 
                                cadena.slice(1);

function camelize(kebabcase){
    const palabras = kebabcase.split('-');
    const primeraPalabra = palabras.shift();
    const palabrasEnMayuscula = palabras.map(capitalize);
    palabrasEnMayuscula.unshift(primeraPalabra);
    return palabrasEnMayuscula.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


const filterRange = (arr,a,b) => arr.filter(e=>e>=a && e<=b);

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

//alert( filtered ); // 3,1 (valores dentro del rango)

//alert( arr ); // 5,3,8,1 (array original no modificado)

/* Para filtrar en el propio array:

1.- Eliminar selectivamente con splice
2.- Eliminar todo con pop y añadir lo que interese con push

*/
function filterRangeInPlace(arr,a,b){

    let elemento;
    const aux=[];
    while (elemento=arr.pop()){
        if (elemento>=a && elemento<=b)
            aux.push(elemento);
    }

    while(elemento=aux.pop())
        arr.push(elemento);
}


const arrayAOrdenar = [5, 2, 1, -10, 8];

// ... tu código para ordenar en orden decreciente
const decreciente  = (a,b) => b-a;

arrayAOrdenar.sort(decreciente);

//alert( arrayAOrdenar ); // 8, 5, 2, 1, -10


const copySorted = a => a.slice().sort();
                        // [].concat(arr2).sort();
                        // a.map(e=>e).sort();
                        // usar bucles



let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr2 ); // HTML, JavaScript, CSS (sin cambios)


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(e=>({
        fullName: e.name + ' ' + e.surname,
        id: e.id
    }));

console.log(usersMapped);
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

//alert( usersMapped[0].id ) // 1
//alert( usersMapped[0].fullName ) // John Smith


let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr_2 = [ pete2, john2, mary2 ];

const comparaEdad = (u1,u2) => u1.age - u2.age;

const sortByAge = array => array.sort(comparaEdad)

console.log(sortByAge(arr_2))