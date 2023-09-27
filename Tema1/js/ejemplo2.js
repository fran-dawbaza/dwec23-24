function cambiaTexto(){
    document.getElementById("miTexto").style.fontSize='25px';
    document.getElementById("miTexto").style.color='blue';
}
document
    .getElementById('miBoton')
    .addEventListener('click',cambiaTexto);

window.alert('Evento programado');