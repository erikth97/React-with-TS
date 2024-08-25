// Funciones - Arrow Functions
// const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2)

// sumar(10, 20)
// sumar(300, 1)

/**
 * Ejemplo de Arrow Functions en JavaScript.
 * 
 * Las Arrow Functions ofrecen una sintaxis más corta y concisa para escribir funciones.
 * Son especialmente útiles cuando se trabaja con funciones que requieren menos espacio,
 * como las callbacks o las funciones pasadas como argumentos.
 * 
 * Características de las Arrow Functions:
 * - Sintaxis concisa: Menos verbosa que las function expressions tradicionales.
 * - No tiene su propio 'this': El valor de 'this' dentro de una arrow function es el mismo que el de su contexto envolvente.
 * - No aptas para métodos: No son ideales para usar como métodos en objetos si planeas usar 'this'.
 * - No tienen 'arguments': No pueden acceder al objeto 'arguments' de las funciones normales.
 */

// Definición de una arrow function 'sumar'
const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2);

// Llamadas a la función 'sumar' con diferentes argumentos
sumar(10, 20);  // Imprime 30
sumar(300, 1);  // Imprime 301

/**
 * Uso de Arrow Functions en React:
 * Las Arrow Functions son comunes en React, particularmente para manejar eventos o definir funciones pequeñas dentro de componentes.
 * 
 * Ejemplo en React:
 * 
 * const Componente = () => {
 *   const handleClick = () => {
 *     console.log('Botón clickeado');
 *   };
 * 
 *   return (
 *     <button onClick={handleClick}>Haz click aquí</button>
 *   );
 * }
 * 
 * En este ejemplo, 'handleClick' es definida como una arrow function y se utiliza para manejar el evento de clic en un botón.
 */
