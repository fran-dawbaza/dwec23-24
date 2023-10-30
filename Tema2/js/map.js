const eSDLA= ["Bilbo", "Gandalf", "Nazgul","Frodo"];

const listado = eSDLA.map(e=>`<li>${e}</li>`).join('');

document.getElementById('lista').innerHTML = listado;