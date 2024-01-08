
const coches = [
    {'marca' : 'seat', 'modelo': 'panda', 'año': 1983, 'color': 'blanco', 'motor': 'gasolina'},
    {'marca' : 'ford', 'modelo': 'mondeo', 'año': 2019, 'color': 'rojo', 'motor': 'diesel'},
    {'marca'  : 'toyota', 'modelo': 'avensis', 'año': 2019, 'color': 'negro', 'motor': 'híbrido'},
    {'marca'  : 'ford', 'modelo': 'fiesta', 'año': 1996, 'color': 'blanco', 'motor': 'diesel'},
    {'marca'  : 'opel', 'modelo': 'astra', 'año': 2006, 'color': 'rojo', 'motor': 'diesel'},
    {'marca'  : 'skoda', 'modelo': 'fabia', 'año': 1999, 'color': 'azul', 'motor': 'diesel'},
    {'marca' : 'seat', 'modelo': 'leon', 'año': 2020, 'color': 'gris', 'motor': 'diesel'},
    {'marca' : 'seat', 'modelo': 'ibiza', 'año': 2019, 'color': 'negro', 'motor': 'gasolina'}
  ];

// Ordenamos los coches por marca y modelo
// puedo hacer una copia previamente para que no ordene "coches"

const cochesOrdenados = [...coches]; // copio las referencias

const ordenaPorMarcaYModelo = (a,b) => {
    if (a.marca > b.marca)
        return 1;
    else if (a.marca < b.marca)
        return -1;
    else if (a.modelo > b.modelo)
        return 1;
    else if (a.modelo < b.modelo)
        return -1;
    else
        return 0;
};
cochesOrdenados.sort(ordenaPorMarcaYModelo);



console.log(coches);
console.log(cochesOrdenados);

// Coches antiguos (anteriores a 2000)

const esAntiguo = coche => coche['año'] < 2000;

const cochesAntiguos = coches.filter(esAntiguo);

const esBlanco = coche => coche.color === 'blanco';

console.log(cochesAntiguos);

const cochesAntiguosYBlancos = coches
                                    .filter(esAntiguo)
                                    .filter(esBlanco);
console.log(cochesAntiguosYBlancos);

// Array con los años de venta de los coches

const aniosVenta = coches.map(coche => coche['año']);
console.log(aniosVenta);

// Media (o promedio) de los años de venta de los coches

const mediaVentaCoches = coches.reduce((ac,coche, posicion, coches)=>{
    if (posicion === coches.length - 1) {
        return (ac+coche['año']) / coches.length; 
    }
    return ac+coche['año'];
}, 0);

console.log (mediaVentaCoches);