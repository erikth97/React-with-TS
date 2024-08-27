// OPTIONAL CHANING

// const alumno = {
//     nombre: 'Erik',
//     clase: 'Programacion JS',
//     aprobado: true,
//     examenes: {
//         examen1: 90
//     }
// }

// console.log(alumno.examenes?.examen1)
// console.log('Despues de alumno')

//NULLISH COOLESCING OPERATOR
// const pagina = 10 ?? 1
// console.log(pagina)

/**
 * Ejemplo de Optional Chaining en JavaScript.
 * 
 * El Optional Chaining (`?.`) permite acceder a propiedades profundamente anidadas de un objeto sin necesidad
 * de verificar si cada nivel de la cadena de propiedades existe.
 * 
 * Si una propiedad en la cadena no existe (es `null` o `undefined`), el resultado de la expresión será `undefined`
 * en lugar de arrojar un error, lo que evita que la aplicación se bloquee.
 */

const alumno = {
    nombre: 'Erik',
    clase: 'Programacion JS',
    aprobado: true,
    examenes: {
        examen1: 90
    }
};

// Uso de Optional Chaining para acceder a propiedades anidadas de forma segura:
console.log(alumno.examenes?.examen1); // Imprime: 90, porque `examen1` existe dentro de `examenes`
console.log(alumno.examenes?.examen2); // Imprime: undefined, porque `examen2` no existe dentro de `examenes`

console.log('Despues de alumno'); // Este mensaje se imprime independientemente de los accesos anteriores

/**
 * Ejemplo en React:
 * 
 * El Optional Chaining es muy útil en React cuando trabajas con datos que pueden no estar completamente definidos,
 * como al acceder a datos de una API o props anidadas.
 * 
 * const ComponenteAlumno = ({ alumno }) => {
 *     return (
 *         <div>
 *             <h1>{alumno?.nombre ?? 'Nombre no disponible'}</h1>
 *             <p>Examen 1: {alumno?.examenes?.examen1 ?? 'Sin calificación'}</p>
 *         </div>
 *     );
 * };
 * 
 * En este ejemplo, `alumno?.nombre` y `alumno?.examenes?.examen1` usan Optional Chaining para acceder de manera segura a las propiedades
 * de `alumno`. Si alguna de estas propiedades no existe, se mostrará un mensaje predeterminado.
 */


/**
 * Ejemplo de Nullish Coalescing Operator en JavaScript.
 * 
 * El Nullish Coalescing Operator (`??`) permite proporcionar un valor por defecto en caso de que la expresión a la izquierda
 * sea `null` o `undefined`. A diferencia del operador `||`, que evalúa a `false` para valores falsy como `0` o `""`,
 * `??` solo actúa sobre `null` o `undefined`.
 */

const pagina = 10 ?? 1; // Aquí, `pagina` toma el valor de `10` porque `10` no es `null` ni `undefined`
console.log(pagina); // Imprime: 10

const paginaDefault = null ?? 1; // Aquí, `paginaDefault` toma el valor de `1` porque `null` es un valor nullish
console.log(paginaDefault); // Imprime: 1

/**
 * Ejemplo en React:
 * 
 * El Nullish Coalescing Operator es útil en React para manejar valores que podrían ser `null` o `undefined`
 * y asignarles un valor predeterminado en caso de que lo sean.
 * 
 * const ComponentePagina = ({ pagina }) => {
 *     const paginaActual = pagina ?? 1;
 *     return (
 *         <div>
 *             <p>Página actual: {paginaActual}</p>
 *         </div>
 *     );
 * };
 * 
 * En este ejemplo, `paginaActual` usará el valor de `pagina` si este no es `null` ni `undefined`.
 * Si `pagina` es `null` o `undefined`, entonces `paginaActual` será `1`.
 */

