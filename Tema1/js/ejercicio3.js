function enunciadoEnColor(enunciado,color){
    document.getElementById(enunciado).style.color=color;
}

document
    .getElementById('v1')
    .addEventListener(
        'click',
        enunciadoEnColor.bind(null,'enunciado1','green')
    );
        /* 
            El método bind de una función devuelve otra función
            similar a la original pero con los parámetros que se le 
            indiquen. El primer parámetro es para indicar quien será
            el objeto this cuando se ejecute la función (ya se explicará
            más adelante), entonces, usar:
                miFuncion.bind(null, param1, param2 ...)
            es equivalente a usar:
                function () {
                    miFuncion(param1, param2 ...)
                }
        */

document
    .getElementById('f1')
    .addEventListener(
        'click',
        function (){
            enunciadoEnColor('enunciado1','red');
        }
    );

document
    .getElementById('v2')
    .addEventListener(
        'click',
        function (){
            enunciadoEnColor('enunciado2','red');
        }
    );

document
    .getElementById('f2')
    .addEventListener(
        'click',
        function (){
            enunciadoEnColor('enunciado2','green')
        }
    );
