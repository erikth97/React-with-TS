//Destructuring Arrays

// Definimos un array llamado `tecnologias` que contiene nombres de tecnologías web comunes.
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

// Accedemos al cuarto elemento del array de forma tradicional, usando un índice.
const react = tecnologias[3];  // 'React.js'

// Destructuring de arrays:
// Extraemos directamente el cuarto elemento del array `tecnologias` y lo asignamos a la variable `reactjs`.
// Las comas consecutivas indican que estamos omitiendo los primeros tres elementos y solo nos interesa el cuarto.
const [, , , reactjs] = tecnologias;

// Imprimimos el valor extraído mediante destructuring.
console.log(reactjs);  // Salida: 'React.js'

/*
Resumen de los conceptos:

1. Destructuring de Arrays:
   - Permite extraer elementos de un array y asignarlos directamente a variables en una sola operación.
   - Utiliza una sintaxis basada en el uso de comas para "saltar" elementos que no queremos extraer.

2. Utilidad y ventajas:
   - Simplifica el acceso a elementos específicos dentro de un array, evitando la necesidad de acceder por índice.
   - Facilita la lectura y mantenimiento del código al reducir la verbosidad y hacer explícita la extracción de elementos.

3. Ejemplo práctico:
   - En el ejemplo, `reactjs` es asignado directamente desde `tecnologias` sin necesidad de utilizar un índice.
   - Esto es especialmente útil cuando solo se necesitan algunos elementos específicos de un array largo o complejo.
*/
