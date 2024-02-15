const contenedor = document.getElementById('contenedor');
console.time('con HTML template');
const template = document.createElement('template');
template.innerHTML = `
<div>
    <h1></h1>
    <p></p>
    <p></p>
    <button></button>
</div>
`;
//document.body.append(template);

const fragmento = document.createDocumentFragment();

for (let i=0; i<1000;i++){
    const clon = template.content.cloneNode(true);
    const cabecera = clon.querySelector('h1');
    cabecera.append('Cabecera '+ i);
    const parrafos = clon.querySelectorAll('p');
    parrafos[0].append('parrafo ' + i*2);
    parrafos[1].append('parrafo ' + (i*2+1));
    const boton = clon.querySelector('button');
    boton.append('boton '+i);
    fragmento.append(clon);
}
contenedor.append(fragmento);
console.timeEnd('con HTML template');

contenedor.innerHTML='';
console.time('con innerHTML');
let contenido = '';
 for (let i=0;i<1000;i++){
    contenido += `
    <div>
        <h1>${'Cabecera '+ i}</h1>
        <p>${'parrafo ' + i*2}</p>
        <p>${'parrafo ' + (i*2+1)}</p>
        <button>${'boton '+i}</button>
    </div>
    `;
 }
 contenedor.innerHTML=contenido;
 console.timeEnd('con innerHTML');

 contenedor.innerHTML='';
console.time('con innerHTML en cada pasada');

 for (let i=0;i<1000;i++){
    contenedor.innerHTML += `
    <div>
        <h1>${'Cabecera '+ i}</h1>
        <p>${'parrafo ' + i*2}</p>
        <p>${'parrafo ' + (i*2+1)}</p>
        <button>${'boton '+i}</button>
    </div>
    `;
 }

 console.timeEnd('con innerHTML en cada pasada');
