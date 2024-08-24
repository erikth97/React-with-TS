//Objetos

const producto = {
    nombre: "Ipad",
    precio: 1000,
    disponible: true
}
console.log(producto)
console.table(producto)
console.log(producto.nombre)

//Destructuring
const {nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(producto)

//Object Literal Enhaceement
const autenticado = true
const usuario = 'Erik'

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
}

console.log(nuevoObjeto)
