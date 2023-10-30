'use strict';

const diccionario = ['viagra','xxx'];


function checkSpam(cadena){
    if (typeof cadena != 'string') return false;

    const cadenaMin=cadena.toLowerCase();

    for (let palabra of diccionario){
        if (cadenaMin.includes(palabra))
            return true;
    }
    return false;
}

