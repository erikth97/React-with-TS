// Funciones - Function Declaration

function sumar (numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2)
}

sumar(10, 20)
sumar(100, 131)
sumar(10)

/**
 * Ejemplo de Function Declaration en JavaScript.
 * 
 * Una Function Declaration define una función con un nombre específico,
 * parámetros y un bloque de código que se ejecutará cuando la función sea invocada.
 * 
 * Características de Function Declaration:
 * - Hoisting: Las Function Declarations son elevadas (hoisted), lo que significa que
 *   pueden ser llamadas incluso antes de su definición en el código.
 * - Parámetros por defecto: Pueden tener parámetros con valores por defecto,
 *   que se utilizan si no se proporciona un argumento para ese parámetro.
 */

// Definición de la función 'sumar'
function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

// Llamadas a la función 'sumar' con diferentes argumentos
sumar(10, 20);  // Imprime 30
sumar(100, 131); // Imprime 231
sumar(10);       // Imprime 10, porque el segundo parámetro tiene un valor por defecto de 0

/**
 * Uso de Function Declarations en React:
 * Aunque es más común ver Expression Functions en componentes funcionales de React,
 * las Function Declarations pueden ser utilizadas para definir funciones auxiliares o de utilidad.
 * 
 * Ejemplo en React:
 * 
 * function Componente() {
 *   function handleClick() {
 *     console.log('El botón fue clickeado');
 *   }
 * 
 *   return (
 *     <button onClick={handleClick}>Haz click aquí</button>
 *   );
 * }
 * 
 * Este ejemplo muestra un componente funcional de React donde se define una función
 * 'handleClick' usando una Function Declaration para manejar el evento de clic en un botón.
 */

