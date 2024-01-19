fetch('./assets/productos.json')
.then(res=>res.json())
.then(datos=>{
    productos = datos.products;
    muestraProductos(productos); //aquí sí
});

function muestraProductos(p){
    const filas = p.map(p=>`      <tr>
    <th scope="row">${p.title}</th>
    <td>${p.price}</td>
    <td><img  width="75px" src="${p.thumbnail}"/></td>
    <td>
    <i data-id-producto="${p.id}" class="bi bi-eye" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productoModal"></i></td>
  </tr>`).join('');
    const tabla = `    <table class="table">
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