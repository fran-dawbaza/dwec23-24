const parametros = location.href.split('?')[1].split('=')
const idUsuario = (parametros[0]==='id_usuario')?parametros[1]:undefined;

if (idUsuario){
    fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/todos`)
    .then(respuesta=>respuesta.json())
    .then(muestraTareas)
    .catch(console.log);
}

function muestraTareas(tareas){
    const tareasCompletas = tareas.filter(t=>t.completed);
    const tareasPendientes = tareas.filter(t=>!t.completed);
    const listadoTareasCompletas = document.getElementById('tareasCompletadas');
    const listadoTareasPendientes = document.getElementById('tareasPendientes');
    muestraTareasEnPagina(tareasCompletas,listadoTareasCompletas);
    muestraTareasEnPagina(tareasPendientes,listadoTareasPendientes);
}

function muestraTareasEnPagina(listado,contenedor){
    contenedor.innerHTML = listado.map(e=>`<li>${e.title}</li>`).join('');
}