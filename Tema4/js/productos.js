fetch('./assets/productos.json')
.then(res=>res.json())
.then(datos=>{
    productos = datos.products;
    muestraProductos(productos); //aquí sí
    //filtraProductosCon('');
});

function muestraProductos(p){
    const filas = p.map((p,indice)=>`      <tr class="${indice>7?'ocultoPaginacion':''}">
    <th scope="row">${p.title}</th>
    <td>${p.price}</td>
    <td><img  width="75px" src="${p.thumbnail}"/></td>
    <td>
    <i data-id-producto="${p.id}" class="bi bi-eye" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productoModal"></i></td>
  </tr>`).join('');
    const paginacion = obtenPaginacion();
    const tabla = `${paginacion}    <table id="mis-productos" class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
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
}

function obtenPaginacion(pagina=1){
  return `<nav aria-label="Page navigation">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">&lt;</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">&gt;</a>
    </li>
  </ul>
</nav>`;
}

function muestraProducto(evento,productos){
    console.dir(evento);
    if (evento.target.tagName==='I') {
        console.log('Has hecho click en el icono del producto:' +
            evento.target.dataset.idProducto);
        const producto = productos.find(p=>p.id===+evento.target.dataset.idProducto)
        console.dir(producto);
        const tituloModal = document.getElementById('productoModalLabel');
        const bodyModal = document.getElementById('productoBody');
        tituloModal.textContent = producto.title;
        console.dir(producto);
        bodyModal.textContent = producto.brand + ' ' + producto.description;
    }
    else {
        console.log('No has hecho click en un <i ...>');
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

function filtraProductosPorPagina(pagina=1){
  const tabla = document.getElementById('mis-productos');
  if (!tabla) return;
  const maxProductosPorPagina = 8;

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
  return obtenPaginacion(pagina,maxProductosPorPagina,paginas)
}


document.getElementById('filtra-producto')
    .addEventListener('input',(e)=>filtraProductosCon(e.target.value));