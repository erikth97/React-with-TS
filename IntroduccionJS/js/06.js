//Objetos - Destructuring de dos o mas objetos

// const producto = {
//     nombre: "tablet",
//     precio: 1000,
//     disponible: false
// }

// const cliente = {
//     nombre: "Erik",
//     premium: true,
//     direccion: {
//         calle: "Calle Londres"
//     }
// }

// const {nombre} = producto
// const {nombre: nombreCliente, direccion: {calle}} = cliente

// console.log(nombre)
// console.log(nombreCliente)

// console.log(calle)

// Definimos un objeto llamado `producto` con tres propiedades: `nombre`, `precio`, y `disponible`.
const producto = {
    nombre: "tablet",
    precio: 1000,
    disponible: false
};

// Definimos otro objeto llamado `cliente` con tres propiedades: `nombre`, `premium`, y `direccion`.
// La propiedad `direccion` es a su vez un objeto que contiene la propiedad `calle`.
const cliente = {
    nombre: "Erik",
    premium: true,
    direccion: {
        calle: "Calle Londres"
    }
};

// Destructuring de un solo objeto:
// Extraemos la propiedad `nombre` del objeto `producto` y la asignamos a una variable con el mismo nombre.
const { nombre } = producto;

// Destructuring de dos o más objetos:
// Extraemos la propiedad `nombre` del objeto `cliente` pero la renombramos a `nombreCliente`
// para evitar conflictos con la variable `nombre` que ya hemos creado.
// También hacemos destructuring de un objeto anidado (`direccion`) para extraer la propiedad `calle`.
const { nombre: nombreCliente, direccion: { calle } } = cliente;

// Imprimimos el valor de `nombre` que fue extraído del objeto `producto`.
// El resultado será `"tablet"`.
console.log(nombre);

// Imprimimos el valor de `nombreCliente` que fue extraído y renombrado del objeto `cliente`.
// El resultado será `"Erik"`.
console.log(nombreCliente);

// Imprimimos el valor de `calle` que fue extraído del objeto `direccion` dentro del objeto `cliente`.
// El resultado será `"Calle Londres"`.
console.log(calle);

/*
Resumen de los conceptos:

1. Destructuring de un solo objeto: Permite extraer propiedades de un objeto y asignarlas a variables.
   En este caso, la propiedad `nombre` fue extraída del objeto `producto`.

2. Destructuring de dos o más objetos: Cuando se extraen propiedades de diferentes objetos, es importante
   renombrar las variables si hay propiedades con el mismo nombre. En este ejemplo, `nombre` fue extraído
   de `producto`, y `nombreCliente` de `cliente` para evitar conflictos.

3. Destructuring de objetos anidados: Puedes extraer propiedades de objetos anidados.
   En este ejemplo, `calle` fue extraída de `direccion`, que es un objeto dentro de `cliente`.
*/
