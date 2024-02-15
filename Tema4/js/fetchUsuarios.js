const muestraUsuarios = usuarios=>{

    const tabla = document.getElementById('usuarios');
    const filas = usuarios.map(u=>`
    <tr>
        <td>${u.username}</td>
        <td>${u.email}</td>
    </tr>`).join('');
    //console.log(filas);
    tabla.tBodies[0].innerHTML = filas;
};

fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta=>respuesta.json())
    .then(muestraUsuarios)
    .catch(console.log);

