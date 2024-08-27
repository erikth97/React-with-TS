// LOGICAL OR Y LOGICAL AND
// // const saldo = 1000
// // const pagar =1200
// // const tarjeta = false

/**
 * logical Or y Logical And
 * || Or - Al menos una vez se cumple
 * && And - Revisa que todos se cumplan
 */

// if(saldo > pagar || tarjeta) {
//     console.log('Puedes Pagar')
// } else {
//     console.log('No no puedes pagar')
// }

/**
 * Ejemplo de Operadores Lógicos en JavaScript.
 * 
 * Los operadores lógicos permiten combinar múltiples condiciones en una sola declaración condicional.
 * Los operadores más comunes son:
 * 
 * - `||` (Logical Or): Evalúa a verdadero si al menos una de las condiciones es verdadera.
 * - `&&` (Logical And): Evalúa a verdadero solo si todas las condiciones son verdaderas.
 */

const saldo = 1000;
const pagar = 1200;
const tarjeta = false;

/**
 * Operador Logical Or `||`:
 * 
 * Descripción: El operador `||` (Or) retorna `true` si al menos una de las condiciones es verdadera.
 * Uso: Ideal para casos donde solo necesitas que una de varias condiciones se cumpla para realizar una acción.
 */

// Ejemplo con Logical Or (||)
// Aquí, el pago se puede realizar si el saldo es mayor que la cantidad a pagar *o* si se tiene una tarjeta disponible.
if (saldo > pagar || tarjeta) {
    console.log('Puedes Pagar');
} else {
    console.log('No, no puedes pagar');
}

/**
 * Operador Logical And `&&`:
 * 
 * Descripción: El operador `&&` (And) retorna `true` solo si todas las condiciones son verdaderas.
 * Uso: Útil cuando necesitas que se cumplan múltiples condiciones para proceder con una acción.
 */

// Ejemplo con Logical And (&&)
// Aquí, verificamos si el saldo es suficiente *y* si hay una tarjeta disponible para autorizar el pago.
if (saldo > pagar && tarjeta) {
    console.log('Puedes Pagar');
} else {
    console.log('No, no puedes pagar');
}

/**
 * Ejemplos en React:
 * 
 * Los operadores lógicos son muy útiles en React para condicionar el renderizado de componentes o para decidir
 * qué parte de la interfaz de usuario mostrar en función del estado.
 */

// Ejemplo de uso de `||` en React:
const ComponenteOr = ({ saldo, tarjeta }) => {
    return (
        <div>
            {saldo > 0 || tarjeta ? (
                <p>Puedes proceder con la compra</p>
            ) : (
                <p>No tienes saldo suficiente ni una tarjeta disponible</p>
            )}
        </div>
    );
};

// Ejemplo de uso de `&&` en React:
const ComponenteAnd = ({ saldo, pagar }) => {
    return (
        <div>
            {saldo >= pagar && (
                <p>Saldo suficiente para pagar</p>
            )}
            {!(saldo >= pagar) && (
                <p>No tienes suficiente saldo para pagar</p>
            )}
        </div>
    );
};

/**
 * Descripción de los Ejemplos en React:
 * 
 * 1. Uso de `||` en React:
 * 
 * En el componente `ComponenteOr`, se utiliza el operador `||` para decidir si mostrar un mensaje que permite proceder con la compra.
 * Si el usuario tiene saldo o una tarjeta disponible, se muestra un mensaje positivo. Si ninguna de estas condiciones es verdadera,
 * se muestra un mensaje negativo.
 * 
 * 2. Uso de `&&` en React:
 * 
 * En el componente `ComponenteAnd`, se utiliza el operador `&&` para mostrar un mensaje solo si el saldo es suficiente para cubrir
 * el pago. Si el saldo es suficiente, se muestra un mensaje confirmando que se puede pagar. Si no es suficiente, se muestra
 * un mensaje indicando que no se puede pagar.
 */


// Resumen de los Operadores Lógicos Integrado en el Código:
// Operador Logical Or ||:

// Descripción: Retorna true si al menos una de las condiciones es verdadera.
// Uso: Ideal cuando solo necesitas que una de varias condiciones sea verdadera para proceder.
// Ejemplo en React:
// javascript

// const ComponenteOr = ({ saldo, tarjeta }) => {
//     return (
//         <div>
//             {saldo > 0 || tarjeta ? (
//                 <p>Puedes proceder con la compra</p>
//             ) : (
//                 <p>No tienes saldo suficiente ni una tarjeta disponible</p>
//             )}
//         </div>
//     );
// };
// Operador Logical And &&:

// Descripción: Retorna true solo si todas las condiciones son verdaderas.
// Uso: Útil cuando necesitas que se cumplan múltiples condiciones antes de proceder.
// Ejemplo en React:
// javascript

// const ComponenteAnd = ({ saldo, pagar }) => {
//     return (
//         <div>
//             {saldo >= pagar && (
//                 <p>Saldo suficiente para pagar</p>
//             )}
//             {!(saldo >= pagar) && (
//                 <p>No tienes suficiente saldo para pagar</p>
//             )}
//         </div>
//     );
// };
// Explicación de los Ejemplos en React:
// || en React: Se utiliza para condicionar el renderizado basado en si al menos una de varias condiciones es verdadera. Es útil cuando se tiene más de un criterio para decidir si se debe mostrar algo en la UI.

// && en React: Se utiliza para condicionar el renderizado basado en si todas las condiciones son verdaderas. Es útil para asegurar que solo se muestra algo en la UI si se cumplen todas las condiciones necesarias.

// Estos operadores son fundamentales en JavaScript y React para manejar la lógica condicional, controlar el flujo del programa y decidir qué contenido mostrar en la interfaz de usuario en función del estado de la aplicación.