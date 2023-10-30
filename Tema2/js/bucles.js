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

function pintaTablero(tamano){
    function dameCaracteres(numero,caracter){
        let resultado = '';
        for (let i=0; i<numero;i++)
            resultado += caracter;
        return resultado;
    }
    function dameFila(numero,caracter1,caracter2){
        let resultado = '';
        for (let i=0;i<numero;i++){
            let caracter = i%2 ? caracter1 : caracter2;
            resultado += dameCaracteres(numero,caracter);
        }
        return resultado;
    }
    function dameBloque(numero,fila){
        let resultado = '';
        for (let i=0;i<numero;i++)
            resultado += fila + '\n';
        return resultado;
    }
    const fila1 = dameFila(tamano,'#','-');
    const fila2 = dameFila(tamano,'-','#');
    const bloque1 = dameBloque(tamano,fila1);
    const bloque2 = dameBloque(tamano,fila2);

    let resultado = '';
    for (let i=0; i< tamano; i++){
        const bloque = i%2 ? bloque1:bloque2;
        resultado += bloque;
    }
    console.log(resultado);

}
