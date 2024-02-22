import {productos} from './obtenProductos.js';
import {preparaOrdenacion} from './ordenaTabla.js';

const maxProductosPorPagina = 5;

muestraProductos(productos);


const filtraProductosPorPagina = (pagina=1)=>{
  const tabla = document.getElementById('mis-productos');
  if (!tabla) return;  

  console.log('filtraProductosPorPagina: pagina '+pagina)
  const filasSinFiltradoTexto =  Array
                                .from(tabla.tBodies[0].rows)
                                .filter(f=>!f.classList.contains('filtradoTexto'));

  const nFilas = filasSinFiltradoTexto.length;
  const paginas = Math.ceil(nFilas/maxProductosPorPagina);

  const primerProductoAMostrar = (pagina-1) * maxProductosPorPagina;
  const ultimoProductoAMostrar = pagina * maxProductosPorPagina - 1;
  
  for (let i=0;i< filasSinFiltradoTexto.length; i++){
      if (i>=primerProductoAMostrar && i<=ultimoProductoAMostrar) {
          filasSinFiltradoTexto[i].classList.remove('ocultoPaginacion');
      }
      else {
        filasSinFiltradoTexto[i].classList.add('ocultoPaginacion');
      }
  }
  obtenPaginacion(pagina,paginas)
};


function muestraProductos(p){
    const filas = p.map((p,indice)=>`      <tr class="${indice>maxProductosPorPagina-1?'ocultoPaginacion':''}">
    <th scope="row">${p.title}</th>
    <td>${p.price}</td>
    <td><img  width="75px" src="${p.thumbnail}"/></td>
    <td>
    <i data-id-producto="${p.id}" class="bi bi-eye" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productoModal"></i></td>
  </tr>`).join('');
    const paginas = Math.ceil(p.length/maxProductosPorPagina);
    const paginacion = obtenPaginacion(1,paginas);
    const tabla = `${paginacion}    <table id="mis-productos" class="table">
    <thead>
      <tr>
        <th scope="col" data-orden="cadena">Nombre</th>
        <th scope="col" data-orden="numero">Precio</th>
        <th scope="col"></th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody>
        ${filas}
    </tbody>
  </table>  
    `;

    const miDiv = document.getElementById('contenidoPrincipal');
    miDiv.innerHTML = tabla;
    miDiv.addEventListener('click', (e)=>{
        muestraProducto(e,p);
    });
    miDiv.addEventListener('click',e=>{
      if (e.target.tagName !== 'A') return;
      if (!e.target.closest('#navPaginacion')) return;
      if (!e.target.parentElement.dataset.pagina) return;
      filtraProductosPorPagina(+e.target.parentElement.dataset.pagina);
    });
    preparaOrdenacion('mis-productos');
}


function obtenPaginacion(pagina, paginas){
  const navPaginacion = document.getElementById('navPaginacion');

  let lis = '';
  for (let i=1; i<=paginas;i++){
    if (i===1 || i===paginas || i===pagina ||
      i=== Math.floor(pagina/2) || i=== Math.floor((pagina+paginas)/2)) {
      lis += `<li data-pagina="${i}" class="page-item ${i===pagina?'active':''}">
                  <a class="page-link" href="#" >${i}</a>
              </li>`;
    }
  }
  const outerHTML =  `<nav id="navPaginacion" aria-label="Page navigation">
  <ul class="pagination justify-content-end">
    <li data-pagina="${pagina-1}" class="page-item ${pagina===1?'disabled':''}">
      <a class="page-link">&lt;</a>
    </li>
    ${lis}
    <li data-pagina="${pagina+1}" class="page-item ${pagina===paginas?'disabled':''}">
      <a class="page-link" href="#">&gt;</a>
    </li>
  </ul>
</nav>`;

  console.log('obtenPaginacion: pagina ' + pagina + ', paginas ' + paginas)
  if (navPaginacion){
    navPaginacion.outerHTML = outerHTML;
    // en la línea anterior navPaginacion sale del DOM
  }
  else {
    return outerHTML;
  }
  
}

function muestraProducto(evento,productos){
    //console.dir(evento);
    if (evento.target.tagName==='I') {
        //console.log('Has hecho click en el icono del producto:' +
        //    evento.target.dataset.idProducto);
        const producto = productos.find(p=>p.id===+evento.target.dataset.idProducto)
        console.dir(producto);
        const tituloModal = document.getElementById('productoModalLabel');
        const bodyModal = document.getElementById('productoBody');
        tituloModal.textContent = producto.title;
        console.dir(producto);
        bodyModal.textContent = producto.brand + ' ' + producto.description;
    }
    else {
       // console.log('No has hecho click en un <i ...>');
    }
}

function filtraProductosCon(texto){
  const tabla = document.getElementById('mis-productos');
  const textoEnMinuscula = texto.toLowerCase();
  if (!tabla) return;
  //console.log('ahí va');
  for (let fila of tabla.tBodies[0].rows){
    if (fila.textContent.toLowerCase().includes(textoEnMinuscula))
        fila.classList.remove('filtradoTexto');
    else
        fila.classList.add('filtradoTexto');
  }
  filtraProductosPorPagina(1);
}



document.getElementById('filtra-producto')
    .addEventListener('input',(e)=>filtraProductosCon(e.target.value));