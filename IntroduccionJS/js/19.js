// COMPARANDO CON OPERADOR ESTRICTO

// const numero1 = 20
// const numero2 = "20"

/**
 * == (comparador no estricto)
 * === (comparador estricto, recomendable)
 */

// if(numero1 === numero2) {
//     console.log('Si, son iguales') 
//     } else {
//             console.log('No, no son iguales')
//     }

/**
 * Ejemplo de Comparadores en JavaScript.
 * 
 * En JavaScript, existen dos tipos principales de comparadores para verificar la igualdad entre valores:
 * 1. `==` (Comparador no estricto)
 * 2. `===` (Comparador estricto, recomendable)
 */

const numero1 = 20;
const numero2 = "20";

/**
 * == (Comparador no estricto):
 * 
 * Descripción: Compara dos valores para ver si son iguales, pero no considera el tipo de dato.
 * Si los valores son de tipos diferentes, JavaScript intenta convertirlos a un mismo tipo antes de compararlos.
 * 
 * Ejemplo: `20 == "20"` es verdadero (`true`) porque el valor de ambos es 20, aunque uno sea número y el otro string.
 * 
 * Este comparador puede llevar a resultados inesperados debido a la conversión de tipos implícita.
 * Por ejemplo, `0 == false` es verdadero porque ambos son convertidos a `false`.
 */

// Ejemplo de uso del comparador no estricto (==)
// if (numero1 == numero2) {
//     console.log('Sí, son iguales (comparador no estricto)');
// } else {
//     console.log('No, no son iguales (comparador no estricto)');
// }

/**
 * === (Comparador estricto):
 * 
 * Descripción: Compara dos valores para ver si son estrictamente iguales, es decir, si tienen el mismo valor y el mismo tipo de dato.
 * No realiza conversión de tipos, por lo que si los tipos de datos son diferentes, la comparación resultará en `false`.
 * 
 * Ejemplo: `20 === "20"` es falso (`false`) porque aunque el valor es el mismo, los tipos de datos son diferentes (número vs string).
 * 
 * Este comparador es el más recomendable porque evita errores y resultados inesperados causados por la conversión implícita de tipos.
 */

// Ejemplo de uso del comparador estricto (===)
if (numero1 === numero2) {
    console.log('Sí, son iguales (comparador estricto)');
} else {
    console.log('No, no son iguales (comparador estricto)'); // Este mensaje se imprimirá
}

/**
 * Resumen:
 * 
 * - `==` (Comparador no estricto) intenta hacer coincidir los tipos de datos antes de comparar, lo que puede llevar a resultados inesperados.
 * - `===` (Comparador estricto) compara tanto el valor como el tipo de dato, proporcionando una comparación más precisa y segura.
 * 
 * Recomendación: Siempre que sea posible, usa el comparador estricto `===` para evitar errores de tipo y asegurar que las comparaciones sean precisas.
 */
