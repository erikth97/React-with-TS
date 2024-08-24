// Definimos un objeto llamado `producto` con tres propiedades: `nombre`, `precio`, y `disponible`.
const producto = {
    nombre: "tablet",
    precio: 1000,
    disponible: false
};

// Definimos otro objeto llamado `cliente` con dos propiedades: `nombre` y `premium`.
const cliente = {
    nombre: "Erik",
    premium: true,
};

// Uniendo dos objetos usando el operador de propagación (Spread Operator):
// Creamos un nuevo objeto `nuevoObjeto` combinando las propiedades de `producto` y `cliente`.
// Si hay propiedades con el mismo nombre en ambos objetos, el último objeto propagado
// (en este caso `cliente`) sobrescribirá los valores anteriores (de `producto`).
const nuevoObjeto = {
    ...producto,
    ...cliente,
};

// Imprimimos el nuevo objeto combinado. La propiedad `nombre` de `cliente` sobrescribe la de `producto`.
console.log(nuevoObjeto); // Resultado: { nombre: "Erik", precio: 1000, disponible: false, premium: true }

// Uniendo dos objetos usando `Object.assign`:
// Esta función combina las propiedades del objeto `producto` con las de `cliente` en el primer objeto,
// que es `producto`. Como `Object.assign` modifica el objeto destino (`producto`), este cambio es mutante.
const nuevoObjeto2 = Object.assign(producto, cliente);

// Imprimimos el objeto resultante después de usar `Object.assign`.
// Notar que `producto` ha sido modificado y ahora contiene las propiedades de `cliente`.
console.log(nuevoObjeto2); // Resultado: { nombre: "Erik", precio: 1000, disponible: false, premium: true }

/*
Resumen de los conceptos:

1. Spread Operator para unir objetos: Utiliza `...` para "esparcir" las propiedades de uno o más objetos dentro de un nuevo objeto.
   Esto es útil para combinar objetos sin modificar los objetos originales. Si hay propiedades duplicadas, las del último objeto mencionado tienen prioridad.

2. Object.assign para unir objetos: Combina las propiedades de uno o más objetos en el primer objeto especificado (`target`).
   A diferencia del Spread Operator, `Object.assign` modifica el objeto destino. Si hay propiedades duplicadas, las del último objeto mencionado tienen prioridad.
*/
