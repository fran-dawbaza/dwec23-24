'use strict';

// usando setTimeout

function printNumbers(from, to){
    let contador = from;
    function muestraContador(){
        console.log(contador++);
        if (contador <= to)
            setTimeout(muestraContador, 1000);
    }
    if (Number.isInteger(from) && Number.isInteger(to)){
        if (contador<=to)
            muestraContador();
    }
}

//printNumbers(5, 10);

// usando setInterval

function printNumbersInterval(from, to){
    if (Number.isInteger(from) && Number.isInteger(to)){
        let contador = from;
        const interval = setInterval(
            ()=>{
                console.log(contador++);
                if (contador>to)
                    clearInterval(interval);
            },1000);
    }
}

printNumbersInterval(5,10);