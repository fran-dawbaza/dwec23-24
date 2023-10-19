const ASTERISCO = '*';

function pintaCuadrado(tamano, caracter = ASTERISCO){
    let fila='';
    for (let i=0; i<tamano; i++)
        fila+=caracter;

    let cuadrado='';
    for (let i=0; i<tamano; i++)
        cuadrado += fila + '\n';

    console.log(cuadrado);
}

function pintaTriangulo(tamano, caracter = ASTERISCO){
    let fila = '';
    let triangulo='';
    for(let i=0; i<tamano; i++){
        fila += caracter;
        triangulo += fila + '\n';
    }
    console.log(triangulo);
}
function pintaTrianguloDerecha(tamano, caracter = ASTERISCO){
    let derecha='';
    let triangulo='';

    for (let i=0;i<tamano;i++){
        // hacer izquierda: los espacios
        let izquierda='';
        for (let j=1; j<tamano - i;j++){
            izquierda += ' ';
        }
        derecha += caracter;
        // hacer derecha
        triangulo += izquierda + derecha + '\n';
    }

    console.log(triangulo);
}

pintaCuadrado(4);
pintaCuadrado(6,'#');
