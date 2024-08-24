// Definimos un array de tecnologías comúnmente usadas en desarrollo web.
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Agregamos un nuevo elemento al final del array usando `push`.
// Sin embargo, este método modifica el array original, lo cual no es recomendable en React.
tecnologias.push('Nest.js');

// En React, la mutación directa del estado puede evitar que React detecte cambios
// correctamente, lo que puede llevar a que la interfaz no se actualice.
// En su lugar, se recomienda crear un nuevo array para mantener la inmutabilidad del estado:
const nuevoArreglo = ['Nest.js', ...tecnologias]; // Uso del operador spread para crear un nuevo array.
console.table(tecnologias); // Muestra el array original modificado.
console.log(nuevoArreglo); // Muestra el nuevo array con 'Nest.js' al inicio.

// Filtramos el array para excluir 'HTML', creando un nuevo array sin modificar el original.
// `filter` es seguro de usar en React porque devuelve un nuevo array.
const tecnologias2 = tecnologias.filter(function (tech) {
    if (tech !== 'HTML') {
        return tech;
    }
});

// Usamos `map` para crear un nuevo array modificando solo el elemento 'Node.js' a 'Nest.js'.
// Al igual que `filter`, `map` no modifica el array original y es seguro de usar en React.
const tecnologias3 = tecnologias.map(function(tech) {
    if(tech === 'Node.js') {
        return 'Nest.js';
    } else {
        return tech;
    }
});

/*
Resumen de los conceptos:

1. Arrays en JavaScript:
   - Arrays son estructuras de datos que almacenan elementos de manera ordenada y accesible por índices.

2. Mutación vs. Inmutabilidad:
   - Métodos como `push` modifican el array original (mutación), lo cual no es recomendable en React porque puede impedir actualizaciones correctas de la interfaz.
   - Métodos como `filter` y `map` crean nuevos arrays y no modifican el original (inmutabilidad), favoreciendo patrones seguros de actualización en React.

3. Uso recomendado en React:
   - Evitar la mutación directa de arrays y objetos en el estado.
   - Utilizar operaciones que preserven la inmutabilidad para asegurar que React pueda rastrear cambios y actualizar la interfaz de usuario de manera eficiente.
*/
