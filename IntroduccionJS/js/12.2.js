// Recorriendo Arrays con forEach. map y for .. of

// Definimos un array llamado `tecnologias` que contiene nombres de tecnologías usadas en desarrollo web.
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'Typescript.js'];

// Usando forEach para recorrer el array.
// forEach ejecuta la función proporcionada una vez por cada elemento del array.
// Es ideal para ejecutar una operación que no necesita devolver un resultado, como imprimir valores.
tecnologias.forEach(function(tech) {
    console.log(tech);  // Imprime cada tecnología en la consola.
});

// Usando map para recorrer y transformar el array.
// map crea un nuevo array con los resultados de la función proporcionada aplicada a cada elemento.
// Se usa para transformar arrays, aplicando una función a cada elemento y devolviendo un nuevo array.
const arrayMap = tecnologias.map(function(tech) {
    return tech;  // En este caso, simplemente devuelve cada elemento tal cual.
});

// Usando for ... of para recorrer el array.
// for...of recorre los elementos de cualquier objeto iterable (arrays, strings, etc.).
// Ofrece una manera sencilla y directa de acceder a cada elemento del array sin necesidad de un índice.
for(let tech of tecnologias) {
    console.log(tech);  // Imprime cada tecnología en la consola.
}

/*
Resumen de las diferencias:

1. forEach:
   - No retorna ningún valor (undefined).
   - Útil para operaciones que implican efectos secundarios (ej., imprimir en consola).
   - No puede ser interrumpido con 'break' o 'return' dentro de la función.

2. map:
   - Retorna un nuevo array con los elementos transformados.
   - Ideal para casos donde necesitas crear un nuevo array a partir de la transformación de un array existente.
   - Cada elemento del array original puede ser modificado y el resultado es un nuevo array.

3. for ... of:
   - Proporciona un método sencillo y legible para iterar sobre cada elemento de un array.
   - Permite el uso de 'break', 'continue', y 'return' para controlar el ciclo.
   - No está diseñado para modificar directamente el array, sino para acceder a sus elementos.

Consideraciones de uso:
- `forEach` es una buena opción cuando solo necesitas ejecutar algo usando los elementos y no necesitas un resultado.
- `map` es perfecto para situaciones en las que necesitas modificar, ajustar o cambiar elementos en un array y devolver un nuevo array.
- `for...of` es ideal para iterar sobre arrays cuando necesitas un control más fino sobre el flujo del ciclo, como poder interrumpirlo.
*/


