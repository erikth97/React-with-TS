//EVALUACION DE CORTO CIRCUITO

// const auth = true
// auth && console.log('Usuario Autenticado')

// if("false") {
//     console.log('Truthy')
// } else {
//     console.log('Falsy')
// }

/**
 * Ejemplo de Evaluación de Corto Circuito en JavaScript.
 * 
 * La Evaluación de Corto Circuito es una característica de los operadores lógicos (`&&` y `||`)
 * en JavaScript que permite que la evaluación de una expresión lógica se detenga tan pronto como
 * se haya determinado el resultado.
 * 
 * - Con `&&` (AND), si la primera condición es falsa, no evalúa las siguientes condiciones porque el resultado
 *   ya será falso.
 * - Con `||` (OR), si la primera condición es verdadera, no evalúa las siguientes condiciones porque el resultado
 *   ya será verdadero.
 */

const auth = true;

// Evaluación de Corto Circuito con `&&` (AND):
// Si `auth` es verdadero, se ejecuta `console.log('Usuario Autenticado')`.
// Si `auth` es falso, la expresión se corta y `console.log` no se ejecuta.
auth && console.log('Usuario Autenticado'); // Imprime: 'Usuario Autenticado'

/**
 * Explicación:
 * 
 * La expresión `auth && console.log('Usuario Autenticado')` funciona de la siguiente manera:
 * - Si `auth` es `true`, JavaScript continúa evaluando y ejecuta `console.log('Usuario Autenticado')`.
 * - Si `auth` es `false`, JavaScript no evalúa ni ejecuta la segunda parte, porque el resultado de la expresión
 *   completa ya es `false`.
 */

/**
 * Ejemplo de Valores Truthy y Falsy:
 * 
 * En JavaScript, ciertos valores se consideran "truthy" o "falsy" cuando se evalúan en un contexto booleano.
 * 
 * - Valores Falsy: `false`, `0`, `""` (string vacío), `null`, `undefined`, `NaN`.
 * - Valores Truthy: Cualquier valor que no sea falsy, incluyendo strings no vacíos, números distintos de cero, objetos, etc.
 */

if ("false") {
    console.log('Truthy'); // Esto se ejecutará
} else {
    console.log('Falsy');
}

/**
 * Explicación:
 * 
 * En este caso, la string `"false"` es considerada truthy porque cualquier string no vacía en JavaScript es truthy.
 * Por lo tanto, el bloque `console.log('Truthy')` se ejecutará.
 * 
 * Este comportamiento es importante en React, donde a menudo se evalúan valores para decidir si se debe renderizar
 * un componente o realizar alguna acción.
 */

/**
 * Ejemplo en React:
 * 
 * La Evaluación de Corto Circuito se puede utilizar en React para renderizar condicionalmente componentes
 * o partes de la UI de forma concisa.
 */

const ComponenteAutenticado = ({ auth }) => {
    return (
        <div>
            {auth && <p>Usuario Autenticado</p>}
            {!auth && <p>Por favor, inicia sesión</p>}
        </div>
    );
};

/**
 * Explicación del Ejemplo en React:
 * 
 * - Si `auth` es `true`, se renderiza el `<p>` con el texto "Usuario Autenticado".
 * - Si `auth` es `false`, la primera parte de la evaluación se corta y no se renderiza el primer `<p>`, pero se renderiza el segundo `<p>` con el texto "Por favor, inicia sesión".
 * 
 * Este patrón es muy útil para manejar la lógica condicional en componentes de React de una manera limpia y concisa.
 */

