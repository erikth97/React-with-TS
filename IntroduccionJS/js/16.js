// Funciones que retornan valores

/**
 * Ejemplo de Funciones que Retornan Valores en JavaScript.
 * 
 * Las funciones en JavaScript pueden retornar un valor utilizando la palabra clave `return`.
 * Este valor puede ser de cualquier tipo (número, string, objeto, array, función, etc.).
 * 
 * Características de las funciones que retornan valores:
 * - `return`: Finaliza la ejecución de la función y especifica el valor que será devuelto.
 * - Uso modular: Permite que la lógica sea reutilizable y componible en otras partes del código.
 * - En React: Las funciones que retornan valores son útiles para calcular datos que se utilizarán en el renderizado o en la lógica del componente.
 */

// Definición de una arrow function 'sumar' que retorna la suma de dos números
const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2;

// Llamada a la función 'sumar' y almacenamiento del resultado en una variable
const resultado = sumar(10, 20);

// Imprimimos el resultado devuelto por la función
console.log(resultado);  // Imprime 30

/**
 * Uso de funciones que retornan valores en React:
 * En React, las funciones que retornan valores pueden ser utilizadas para calcular valores derivados
 * o para procesar datos que luego se mostrarán en la interfaz de usuario.
 * 
 * Ejemplo en React:
 * 
 * const Componente = () => {
 *   const calcularDescuento = (precio, descuento) => {
 *     return precio - (precio * (descuento / 100));
 *   };
 * 
 *   const precioOriginal = 100;
 *   const descuento = 20;
 *   const precioFinal = calcularDescuento(precioOriginal, descuento);
 * 
 *   return (
 *     <div>
 *       <p>Precio Original: ${precioOriginal}</p>
 *       <p>Descuento: {descuento}%</p>
 *       <p>Precio Final: ${precioFinal}</p>
 *     </div>
 *   );
 * }
 * 
 * En este ejemplo, 'calcularDescuento' es una función que calcula un precio con descuento y
 * retorna el resultado, que luego es mostrado en la interfaz de usuario dentro del componente.
 */
