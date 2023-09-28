// Ventana modal
const modal = document.getElementById("ventanaModal");

// Botón que abre el modal
const boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
const span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
    modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
    modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});