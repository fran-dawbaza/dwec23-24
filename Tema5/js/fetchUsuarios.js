const muestraUsuarios = usuarios=>{

    const tabla = document.getElementById('usuarios');
    const filas = usuarios.map(u=>`
    <tr data-id-usuario="${u.id}">
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

const tabla = document.getElementById('usuarios');

const enlazaTareasDeUsuario = evento =>{
    if (evento.target.tagName!=='TD')   return;
    const idUsuario = evento.target.parentElement.dataset.idUsuario;
    if (idUsuario && idUsuario!==''){
        location.href='./fetchTodos.html?id_usuario='+idUsuario;
    }
}

tabla.addEventListener('click', enlazaTareasDeUsuario);



