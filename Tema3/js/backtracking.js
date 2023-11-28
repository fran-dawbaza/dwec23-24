function dameSudoku(){
    
    // Array de 81 posiciones para sudoku de 9x9, inicialmente relleno con false
    const sudoku = new Array(81).fill(false);

    // Inicialmente contiene los números del 1 al 9
    const aleatorio_1a9 = new Array(9).fill(0).map((_, i) => i + 1);

    // Hacemos 9 intercambios de forma aleatoria
    for (let i = 0; i < 9; i++) {
        let j = Math.floor(Math.random() * 9);
        [aleatorio_1a9[i], aleatorio_1a9[j]] = [aleatorio_1a9[j], aleatorio_1a9[i]];
    }
    // Ahora el array aleatorio_1a9 lo usaremos como base para elegir un número sin repetir el backtraching,
    // de esta forma cada vez que se ejecute dará una solución diferente

    //console.log(aleatorio_1a9);

    if (sudokuValido(sudoku,0,aleatorio_1a9))
        return sudoku;
    
    return 'Sin solución';
}

/*
    Esta función hace el backtracking 
*/
function sudokuValido(sudoku, index, numeros) {
    if (index === 81) {
        return true; // Si llegamos a 81 hemos terminado
    }

    if (sudoku[index]) { // Si en ese índice no hay false, ya lo hemos rellenado, vamos por el siguiente
        return sudokuValido(sudoku, index + 1, numeros);
    }

    // para todos los valores posibles ...
    for (let i = 0; i < 9; i++) {
        const num = numeros[i];
        if (nuevoNumeroEsValido(sudoku, index, num)) {
            sudoku[index] = num; // probamos con el valor num
            if (sudokuValido(sudoku, index + 1, numeros))
                return true; // encuentra solución
            sudoku[index] = false; // backtrack, o retroceso, no es posible el valor num
        }
    }

    return false; // no se ha encontrado solución
}

// devuelve true si no hay inconveniente para poner el valor num en la posición index
function nuevoNumeroEsValido(sudoku, index, num) {
    const fila = Math.floor(index / 9);
    const columna = index % 9;

    for (let i = 0; i < 9; i++) {
        if (sudoku[fila * 9 + i] === num || sudoku[i * 9 + columna] === num) {
            return false; // el número ya existe en la fila o columna
        }
    }

    // calculamos la fila y columna de la primera celda del minisudoku
    const primeraFila = Math.floor(fila / 3) * 3;
    const primeraColumna = Math.floor(columna / 3) * 3;

    // recorremos el minisudoku
    for (let i = primeraFila; i < primeraFila + 3; i++) {
        for (let j = primeraColumna; j < primeraColumna + 3; j++) {
            if (sudoku[i * 9 + j] === num) {
                return false; // el número ya existe en el minisudoku
            }
        }
    }
    return true;
}


const miSudoku = dameSudoku();

// Para mostrar el sudoku de 9 en 9
for (let i=0;i<81;i+=9){
    console.log(miSudoku.slice(i,i+9).toString());
}

