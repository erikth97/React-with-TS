// Array Methods

// const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node']
// const numeros = [10, 20, 30]

 //Filter
// const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
// const resultado = numeros.filter(numero => numero > 15)

 //Includes
// const resultado2 = tecnologias.includes('CSS')


/**
 * Ejemplo de Array Methods en JavaScript.
 * 
 * Los métodos de arrays permiten realizar operaciones comunes y útiles sobre los elementos de un array.
 * A continuación se presentan algunos de los métodos más utilizados: `filter` e `includes`.
 */

// Definimos dos arrays: `tecnologias` con nombres de tecnologías web y `numeros` con una lista de números.
const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const numeros = [10, 20, 30];

// Método Filter:
// `filter` crea un nuevo array con todos los elementos que cumplan la condición implementada en la función proporcionada.
// No modifica el array original.
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML');
// En este caso, `nuevoArray` contendrá todos los elementos excepto 'HTML'.
console.log(nuevoArray);  // Imprime: ['CSS', 'JS', 'React', 'Node']

// Aplicando filter en el array de números:
// Retorna un nuevo array con los números mayores a 15.
const resultado = numeros.filter(numero => numero > 15);
console.log(resultado);  // Imprime: [20, 30]

// Método Includes:
// `includes` verifica si un array contiene un determinado elemento y devuelve `true` o `false`.
// Es útil para realizar búsquedas simples en arrays.
const resultado2 = tecnologias.includes('CSS');
// En este caso, `resultado2` será `true` porque 'CSS' está en el array `tecnologias`.
console.log(resultado2);  // Imprime: true

/**
 * Uso de Array Methods en React:
 * 
 * En React, los métodos de arrays son especialmente útiles para manejar datos en listas,
 * manipular el estado, o filtrar elementos que se mostrarán en la interfaz de usuario.
 * 
 * Ejemplo en React:
 * 
 * const Componente = () => {
 *   const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node'];
 * 
  // Filtrar tecnologías para mostrar solo las que no son 'JS'
 *   const tecnologiasFiltradas = tecnologias.filter(tech => tech !== 'JS');
 * 
 *   return (
 *     <div>
 *       <h1>Tecnologías</h1>
 *       <ul>
 *         {tecnologiasFiltradas.map(tech => (
 *           <li key={tech}>{tech}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * }
 * 
 * En este ejemplo, usamos `filter` para excluir 'JS' de la lista de tecnologías antes de renderizarla.
 * `includes` podría ser utilizado para verificar si una tecnología específica está presente antes de mostrarla.
 */
