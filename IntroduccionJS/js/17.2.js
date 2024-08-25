// ARRAY METHODS II

// const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node']
// const numeros = [10, 20, 30]

 //Some - Devuelve si al menos uno cumple con la codicion
// const resultado = numeros.some(numero => numero > 15)

 //Find - Devuelve el primer elemento que cumple con una condicion
// const resultado2 = numeros.find(numero => numero > 20)

 //Every - Retorna true o false si todos cumplen con la condicion
// const resultado3 = numeros.every(numero => numero > 5)

 //Reduce - Retorna un acumulado del total
// const resultado4 = numeros.reduce((total, numero) => total + numero, 0)

/**
 * Ejemplo de Array Methods en JavaScript: `some`, `find`, `every`, y `reduce`.
 * 
 * Estos métodos permiten realizar operaciones avanzadas sobre arrays, como verificar condiciones,
 * encontrar elementos específicos, y calcular acumulados.
 */

// Definimos dos arrays: `tecnologias` con nombres de tecnologías web y `numeros` con una lista de números.
const tecnologias = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const numeros = [10, 20, 30];

/**
 * Método Some:
 * 
 * Descripción: Verifica si al menos un elemento del array cumple con la condición dada.
 * Uso: Ideal para casos donde necesitas confirmar si existe algún elemento que cumpla una condición.
 */
const resultado = numeros.some(numero => numero > 15);
console.log(resultado);  // Imprime: true (porque 20 y 30 son mayores que 15)

/**
 * Método Find:
 * 
 * Descripción: Devuelve el primer elemento que cumple con una condición.
 * Uso: Útil para encontrar un solo elemento basado en una condición específica.
 */
const resultado2 = numeros.find(numero => numero > 20);
console.log(resultado2);  // Imprime: 30 (porque es el primer número mayor que 20)

/**
 * Método Every:
 * 
 * Descripción: Verifica si todos los elementos del array cumplen con una condición.
 * Uso: Se utiliza cuando necesitas asegurarte de que todos los elementos cumplen con una regla específica.
 */
const resultado3 = numeros.every(numero => numero > 5);
console.log(resultado3);  // Imprime: true (porque todos los números son mayores que 5)

/**
 * Método Reduce:
 * 
 * Descripción: Aplica una función a un acumulador y a cada elemento del array para reducirlo a un solo valor.
 * Uso: Comúnmente usado para operaciones como sumar, contar, o concatenar elementos en un array.
 */
const resultado4 = numeros.reduce((total, numero) => total + numero, 0);
console.log(resultado4);  // Imprime: 60 (suma de 10 + 20 + 30)

/**
 * Uso de estos Array Methods en React:
 * 
 * En React, estos métodos son útiles para manejar y manipular datos antes de renderizarlos en la UI.
 * 
 * Ejemplo en React:
 * 
 * const Componente = () => {
 *   const numeros = [10, 20, 30, 40, 50];
 * 
 *   / Verificar si algún número es mayor que 35
 *   const algunMayorQue35 = numeros.some(num => num > 35);
 * 
 *   / Encontrar el primer número mayor que 25
 *   const primeroMayorQue25 = numeros.find(num => num > 25);
 * 
 *   / Verificar si todos los números son mayores que 5
 *   const todosMayoresQue5 = numeros.every(num => num > 5);
 * 
 *   / Calcular la suma total de los números
 *   const sumaTotal = numeros.reduce((total, num) => total + num, 0);
 * 
 *   return (
 *     <div>
 *       <p>Algún número mayor que 35: {algunMayorQue35 ? 'Sí' : 'No'}</p>
 *       <p>Primer número mayor que 25: {primeroMayorQue25}</p>
 *       <p>Todos los números son mayores que 5: {todosMayoresQue5 ? 'Sí' : 'No'}</p>
 *       <p>Suma total: {sumaTotal}</p>
 *     </div>
 *   );
 * }
 * 
 * Este ejemplo demuestra cómo podrías usar `some`, `find`, `every`, y `reduce` en un componente de React
 * para procesar y presentar datos de manera eficiente.
 */
