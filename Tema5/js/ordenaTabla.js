/*
Se requiere que la tabla con id idTabla tenga el atributo 
data-orden="cadena" o data-orden="numero" en las celdas de cabecera (TH)
ejemplo:
<table>
    <thead>
        <tr>
            <th data-orden="cadena">Nombre</th>
            <th>teléfono</th>
        </tr>
    </thead>
    <tbody>
        <tr>...</tr>
        ...
    </tbody>
</table>
*/
function preparaOrdenacion(idTabla){
    const tabla = document.getElementById(idTabla);
    if (!tabla) return;
    tabla.tHead.rows[0].addEventListener('click',e=>{
        if (e.target.tagName!=='TH') return;
        if (e.target.dataset.orden==='cadena') {
            const columna = e.target.cellIndex;
            ordenaTablaAlfabeticamente(tabla,columna);
        }
        else if (e.target.dataset.orden==='numero') {
            const columna = e.target.cellIndex;
            ordenaTablaNumericamente(tabla,columna);
        }
    });
}

function ordenaTablaAlfabeticamente(tabla,columna){
    const filas = Array
                    .from(tabla.tBodies[0].rows)
                    .sort((f1,f2)=>
    f1.cells[columna].textContent.localeCompare(f2.cells[columna].textContent));
    tabla.tBodies[0].append(...filas);
}
function ordenaTablaNumericamente(tabla,columna){
    const filas = Array
                    .from(tabla.tBodies[0].rows)
                    .sort((f1,f2)=>
    +f1.cells[columna].textContent - +f2.cells[columna].textContent );
    tabla.tBodies[0].append(...filas);
}

export {preparaOrdenacion};