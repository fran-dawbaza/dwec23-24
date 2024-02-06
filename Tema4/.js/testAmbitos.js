function diAlgo(){
    console.log('algo por consola');
}

console.log(window.diAlgo)
console.log(diAlgo)
console.log(window)

document.getElementById('capa').addEventListener('click', diAlgo);

/// window.diAlgo = diAlgo; NOOOOOOOO, MUY MALLLL
