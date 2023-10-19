'use strict';

function compruebaAdmin(nombre, password){
    if (nombre==='Admin' && password === 'theMaster'){
        contenido('¡Hola Admin!');
    }
    else {
        contenido('usuario o contraseña incorrectos')
    }
}

function contenido(m){
    document.getElementById('mensaje').innerHTML=m;
}

document.getElementById('formulario')
        .addEventListener('submit', function (evento) {
            evento.preventDefault();
            compruebaAdmin(
                document.getElementById('nombre').value,
                document.getElementById('contrasena').value
                );
        });

