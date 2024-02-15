const contenedor = document.getElementById('contenedor');
const iteraciones = 500;

testModificationDOM(htmlTemplateConFragmento,30, "Usando HTML template y fragmento");
testModificationDOM(htmlTemplateSinFragmento,30, "Usando HTML template sin fragmento");
testModificationDOM(createElementConFragmento,30, "Usando createElement y fragmento");
testModificationDOM(createElementSinFragmento,30, "Usando createElement sin fragmento");
testModificationDOM(innerHtml,30, "Modificando innerHTML una sola vez");
testModificationDOM(innerHtmlEnCadaPasada,30, "Modificando innerHTML en cada pasada");



function htmlTemplateConFragmento(){
    contenedor.replaceChildren(); // en lugar de contenedor.innerHTML=''
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
    
    for (let i=0; i<iteraciones;i++){
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
    
}

function htmlTemplateSinFragmento(){
    contenedor.replaceChildren(); // en lugar de contenedor.innerHTML=''
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
    
    //const fragmento = document.createDocumentFragment();
    
    for (let i=0; i<iteraciones;i++){
        const clon = template.content.cloneNode(true);
        const cabecera = clon.querySelector('h1');
        cabecera.append('Cabecera '+ i);
        const parrafos = clon.querySelectorAll('p');
        parrafos[0].append('parrafo ' + i*2);
        parrafos[1].append('parrafo ' + (i*2+1));
        const boton = clon.querySelector('button');
        boton.append('boton '+i);
        //fragmento.append(clon);
        contenedor.append(clon)
    }
    //contenedor.append(fragmento);
    
}


function createElementConFragmento(){
    contenedor.replaceChildren(); // en lugar de contenedor.innerHTML=''
    const fragmento = document.createDocumentFragment();
    
    for (let i=0; i<iteraciones;i++){
        const div = document.createElement('div');
        const cabecera = document.createElement('h1');
        cabecera.append('Cabecera '+ i);
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.append('parrafo ' + i*2);
        p2.append('parrafo ' + (i*2+1));
        const boton = document.createElement('button');
        boton.append('boton '+i);
        div.append(cabecera,p1,p2,boton);
        fragmento.append(div);
    }

    contenedor.append(fragmento);
}

function createElementSinFragmento(){
    contenedor.replaceChildren(); // en lugar de contenedor.innerHTML=''
    //const fragmento = document.createDocumentFragment();
    
    for (let i=0; i<iteraciones;i++){
        const div = document.createElement('div');
        const cabecera = document.createElement('h1');
        cabecera.append('Cabecera '+ i);
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.append('parrafo ' + i*2);
        p2.append('parrafo ' + (i*2+1));
        const boton = document.createElement('button');
        boton.append('boton '+i);
        div.append(cabecera,p1,p2,boton);
        //fragmento.append(div);
        contenedor.append(div);
    }

    //contenedor.append(fragmento);
}


function innerHtml(){
    contenedor.replaceChildren(); // en lugar de contenedor.innerHTML=''
    let contenido = '';
    for (let i=0;i<iteraciones;i++){
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
}

function innerHtmlEnCadaPasada(){
    contenedor.replaceChildren(); // en lugar de contenedor.innerHTML=''

    for (let i=0;i<iteraciones;i++){
        contenedor.innerHTML += `
       <div>
           <h1>${'Cabecera '+ i}</h1>
           <p>${'parrafo ' + i*2}</p>
           <p>${'parrafo ' + (i*2+1)}</p>
           <button>${'boton '+i}</button>
       </div>
       `;
    }
}

function testModificationDOM(callback, iteraciones, mensaje) {

    console.log('----------------------');
    console.log(mensaje);

    const tiempos = [];

    // Realizar las iteraciones para medir el rendimiento
    for (let i = 0; i < iteraciones; i++) {
        // Iniciar el temporizador
        let comienzo = performance.now();

        // Llamar a la función que modifica el DOM
        callback();

        // Calcular el tiempo transcurrido
        let fin = performance.now();
        let tiempoEjecucion = fin - comienzo;

        // Almacenar el tiempo de ejecución en el array
        tiempos.push(tiempoEjecucion);
    }

    // Calcular métricas de rendimiento
    let tiempoTotal = tiempos.reduce((acc, val) => acc + val, 0);
    let tiempoPromedio = tiempoTotal / iteraciones;
    let tiempoMinimo = Math.min(...tiempos);
    let tiempoMaximo = Math.max(...tiempos);

    // Calcular la varianza
    let variance = tiempos.reduce((acc, val) => acc + Math.pow(val - tiempoPromedio, 2), 0) / iteraciones;

    console.log("Tiempo de ejecución promedio:", tiempoPromedio.toFixed(2), "milisegundos");
    console.log("Varianza:", variance.toFixed(2), "milisegundos");
    console.log("Menor tiempo de ejecución:", tiempoMinimo.toFixed(2), "milisegundos");
    console.log("Mayor tiempo de ejecución:", tiempoMaximo.toFixed(2), "milisegundos");
}