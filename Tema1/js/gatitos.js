const gatitos = [
    "https://s2.abcstatics.com/media/recreo/2015/12/04/gatos-violencia--620x349.JPG",
    "https://images.hola.com/imagenes/estar-bien/20190313138702/expliacion-cientifica-nos-encantan-videos-gatitos-cs/0-656-813/AdobeStock_177436319-z.jpg",
    "https://i.pinimg.com/236x/46/23/d9/4623d9c3712aecf290ff2bc9c9f788d7--zoo-animals-animals-images.jpg",
    "https://i.pinimg.com/236x/25/02/29/2502298536a09f36100f73f383a53429.jpg",
    "https://i.pinimg.com/1200x/46/db/60/46db608eb2849300b612dec7c4c6efa7.jpg",
    "https://i.pinimg.com/236x/da/e0/48/dae048ebace52a59541effc73ed688d6--kittens-animals.jpg"
];

const imagen = document.getElementsByTagName('img')[0];

let contador=0;
const parrafo = document.getElementById('contador');
parrafo.innerHTML = 'Contador: ' + contador;

console.dir(imagen);
console.dir(parrafo);

parrafo.addEventListener('click',cambiaImagen);

function cambiaImagen(){
    imagen.src = gatitos[contador];
    contador= (contador+1) % gatitos.length;
    parrafo.innerHTML = 'Contador: ' + contador;
}
