// Condicionales y Operadores

// const diposnible = 200
// const retirar = 200

// if (diposnible >= retirar) {
     //Se cumple la condicion
//     console.log('Si puedes retirar')
// } else {
     // no se cumple la condicion
//     console.log('Saldo insuficiente')
// }

/**
 * > Mayor que
 * < Menor que
 * >= Mayor o igual
 * <= Menor o igual
 * == igual
 * === igual estricto
 * !== Diferente a 
 */



/**
 * Ejemplo de Condicionales y Operadores en JavaScript.
 * 
 * Los condicionales permiten ejecutar bloques de código diferentes en función de si una condición se evalúa como verdadera o falsa.
 * Los operadores son símbolos que se utilizan para comparar valores o realizar operaciones lógicas.
 */

// Definimos dos variables: `disponible` representa el saldo disponible, y `retirar` la cantidad que queremos retirar.
const disponible = 200;
const retirar = 200;

/**
 * Condicional IF:
 * 
 * Descripción: El condicional `if` evalúa una condición dentro de los paréntesis. 
 * Si la condición es verdadera (true), se ejecuta el bloque de código dentro de las llaves `{}`. 
 * Si es falsa (false), se puede ejecutar un bloque alternativo usando `else`.
 */

if (disponible >= retirar) {
    // Se cumple la condición: disponible es mayor o igual a retirar.
    console.log('Si puedes retirar');
} else {
    // No se cumple la condición: disponible es menor que retirar.
    console.log('Saldo insuficiente');
}

/**
 * Operadores de Comparación:
 * 
 * >  : Mayor que
 * <  : Menor que
 * >= : Mayor o igual
 * <= : Menor o igual
 * == : Igual (compara el valor, pero no el tipo)
 * ===: Igual estricto (compara tanto el valor como el tipo)
 * !==: Diferente a (compara tanto el valor como el tipo)
 * 
 * Estos operadores se utilizan dentro de los condicionales para evaluar comparaciones entre valores.
 */

/**
 * Ejemplo de Autenticación Condicional en React:
 * 
 * En una aplicación React, podrías tener una función que verifique si un usuario está autenticado
 * antes de mostrarle ciertos contenidos o permitirle realizar ciertas acciones.
 * 
 * const Componente = ({ usuario }) => {
 *   // Evaluamos si el usuario está autenticado.
 *   if (usuario && usuario.autenticado) {
 *     // Si el usuario está autenticado, mostramos contenido restringido.
 *     return <p>Bienvenido, {usuario.nombre}!</p>;
 *   } else {
 *     // Si el usuario no está autenticado, redirigimos a la página de inicio de sesión.
 *     return <p>Por favor, inicia sesión para continuar.</p>;
 *   }
 * }
 * 
 * Este ejemplo de React verifica si el objeto `usuario` existe y si la propiedad `autenticado` es verdadera.
 * Dependiendo del resultado, muestra un mensaje de bienvenida o un mensaje que solicita iniciar sesión.
 */

// Resumen de los Condicionales y Operadores Integrado en el Código:
// Condicional if:

// Descripción: Evalúa una condición. Si es verdadera, ejecuta el bloque de código asociado. Si es falsa, se puede utilizar else para manejar el caso alternativo.
// Uso: Útil para tomar decisiones en el flujo de un programa.
// javascript
// 
// if (disponible >= retirar) {
//     console.log('Si puedes retirar');
// } else {
//     console.log('Saldo insuficiente');
// }


// Operadores de Comparación:

// > : Mayor que.
// < : Menor que.
// >= : Mayor o igual.
// <= : Menor o igual.
// == : Igual (compara solo valores, no tipos).
// === : Igual estricto (compara tanto valores como tipos).
// !== : Diferente (compara tanto valores como tipos).


// Ejemplo de Autenticación Condicional en React:

// Descripción: Verifica si un usuario está autenticado antes de permitirle acceso a ciertos contenidos.
// Uso: Común en aplicaciones donde ciertas páginas o acciones están protegidas y requieren que el usuario esté autenticado.
// javascript

// const Componente = ({ usuario }) => {
//     if (usuario && usuario.autenticado) {
//         return <p>Bienvenido, {usuario.nombre}!</p>;
//     } else {
//         return <p>Por favor, inicia sesión para continuar.</p>;
//     }
// }
