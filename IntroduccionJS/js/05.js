// Manipulacion de Objetos

const producto = {
    nombre: "pc",
    precio: 1000,
    disponible: false
}

Object.freeze(producto)
Object.seal(producto)

//Reescribir un valor
producto.disponible = true

//Si la propiedad no exsiste crea una nueva, la va a agregar
producto.imagen = 'imagen.jpg'

//Eliminar propiedad
delete producto.precio
console.log(producto)

// Definimos un objeto llamado `producto` con tres propiedades: `nombre`, `precio`, y `disponible`.
const producto = {
    nombre: "pc",
    precio: 1000,
    disponible: false
};

// `Object.freeze(producto)` congela el objeto, lo que significa que no se pueden agregar, eliminar
// o modificar sus propiedades. El objeto queda completamente inmutable.
Object.freeze(producto);

// `Object.seal(producto)` sella el objeto, permitiendo modificar las propiedades existentes,
// pero no se pueden agregar nuevas propiedades ni eliminar las existentes. Sin embargo,
// en este caso, como ya aplicamos `Object.freeze`, `Object.seal` no tendrá efecto.
Object.seal(producto);

// Intentamos reescribir el valor de la propiedad `disponible` a `true`.
// Debido a que el objeto está congelado con `Object.freeze`, esta operación fallará silenciosamente (no hará nada),
// o lanzará un error en modo estricto (`strict mode`).
producto.disponible = true; // No cambia el valor de `disponible`.

// Intentamos agregar una nueva propiedad llamada `imagen` al objeto `producto`.
// De nuevo, como el objeto está congelado, esta operación fallará y `imagen` no será agregada al objeto.
producto.imagen = 'imagen.jpg'; // No se agrega la propiedad `imagen`.

// Intentamos eliminar la propiedad `precio` del objeto `producto`.
// Esta operación también fallará porque el objeto está congelado.
delete producto.precio; // No elimina la propiedad `precio`.

console.log(producto); 
// El resultado será el objeto original, sin cambios: 
// { nombre: "pc", precio: 1000, disponible: false }
