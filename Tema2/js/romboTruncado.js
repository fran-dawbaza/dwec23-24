/*
función llamada romboTruncado que dibujará en la consola  un rombo truncado dado el tamaño de su parte creciente. Ejemplo, para tamaño 4 se mostrará (pongo . en lugar de espacio para que se aprecien mejor los espacios):

romboTruncado(4); // mostrará por consola el siguiente rombo:

...****
..*1234*
.*123456*
*12345678*
.*123456*
..*1234*
...****

*/

function romboTruncado(tamano){
    if (!Number.isInteger(tamano) || tamano<1){
        console.error('El tamaño debe ser entero positivo');
        return;
    }

    const lineaAsteriscos=' '.repeat(tamano-1) + '*'.repeat(tamano);

    let rombo = lineaAsteriscos;
    let j;
    /* Parte creciente del rombo */
    for (let i=0; i< tamano-1; i++){
        let espacios = ' '.repeat(tamano-2-i);
        let numeros = '';
        for (j=1; j<=(tamano+i*2);j++){
            numeros += j.toString(36).toUpperCase();
        }
        rombo += '\n' + espacios + '*' + numeros + '*'
    }

    /* Parte decreciente del rombo */
    j -= 3;

    let espacios = '';
    for (let i=0;i< tamano -2; i++){
        espacios += ' ';
        let numeros = '';
        for (let k=1;k<=j;k++)
            numeros += k.toString(36).toUpperCase();
        j -= 2;
        rombo += '\n' + espacios + '*' + numeros + '*'
    }
    rombo += '\n' + lineaAsteriscos;
    console.log(rombo);
}