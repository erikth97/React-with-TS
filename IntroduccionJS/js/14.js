// Funciones - Function Expression

// const sumar = function (numero1 = 0, numero2 = 0) {
//     console.log(numero1 + numero2)
// }

// sumar (10, 20)
sumar(300, 1)

/**
 * Ejemplo de Function Expression en JavaScript.
 * 
 * Una Function Expression involucra la definición de una función y su asignación a una variable.
 * Las Function Expressions no son hoisted, lo que significa que no pueden ser invocadas
 * antes de ser definidas en el código.
 * 
 * Características de las Function Expressions:
 * - No hoisting: A diferencia de las Function Declarations, no se pueden usar antes de su declaración.
 * - Anónimas: Generalmente son funciones anónimas, aunque también pueden ser nombradas para referencias recursivas o debugging.
 * - Flexibles: Pueden ser utilizadas como IIFEs (Immediately Invoked Function Expressions) para ejecutar funciones inmediatamente.
 */

// Definición de la función 'sumar' mediante una Function Expression
const sumar = function (numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

// Llamadas a la función 'sumar' con diferentes argumentos
sumar(10, 20);  // Imprime 30
sumar(300, 1);  // Imprime 301

/**
 * Uso de Function Expressions en React:
 * Las Function Expressions son comúnmente utilizadas en React, especialmente para definir funciones dentro de componentes.
 * 
 * Ejemplo en React:
 * 
 * const Componente = () => {
 *   const handleClick = function() {
 *     console.log('Botón clickeado');
 *   };
 * 
 *   return (
 *     <button onClick={handleClick}>Haz click aquí</button>
 *   );
 * }
 * 
 * Este ejemplo muestra un componente de React donde 'handleClick' es definida usando una Function Expression.
 * La función maneja el evento de clic en un botón dentro del componente.
 */
