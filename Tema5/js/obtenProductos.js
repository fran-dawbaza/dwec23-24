
const res = await fetch('./assets/productos.json');
const datos = await res.json();
const productos = datos.products;
export {productos};