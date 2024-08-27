// INTRODUCCION A ECMASCRIPT MODULES
// import { sumar } from "./24.funciones.js";

// const resultado = sumar(20, 10)

// console.log(resultado)

/**
 * Introducción a ECMAScript Modules (ESM)
 * 
 * ECMAScript Modules (ESM) es un sistema de módulos introducido en ECMAScript 2015 (ES6).
 * Permite dividir el código en archivos separados (módulos), y luego importar y exportar funcionalidad
 * entre esos archivos.
 * 
 * Esto facilita la organización del código, la reutilización de funciones, y el mantenimiento de proyectos grandes.
 * 
 * Los módulos en ECMAScript son ejecutados en modo estricto por defecto, lo que ayuda a prevenir errores comunes.
 */

// Ejemplo de importación de un módulo en ECMAScript:
// Importamos la función `sumar` desde el archivo "24.funciones.js".
// La sintaxis `import { ... } from "..."` se utiliza para importar funciones, objetos, o clases exportadas desde otro módulo.
import { sumar } from "./24.funciones.js";

// Usamos la función `sumar` importada para sumar dos números:
const resultado = sumar(20, 10);

// Imprimimos el resultado de la operación:
console.log(resultado); // Imprime: 30

/**
 * Explicación de los Conceptos Clave:
 * 
 * 1. `import`:
 * 
 * - La declaración `import` se usa para importar funciones, objetos, o valores exportados de un módulo.
 * - En el ejemplo, importamos la función `sumar` desde el módulo `"./24.funciones.js"`.
 * 
 * 2. `export`:
 * 
 * - Para que una función, objeto, o valor esté disponible para su importación en otro archivo, debe ser exportado.
 * - Esto se realiza con la declaración `export`.
 * - Ejemplo de exportación (en el archivo "24.funciones.js"):
 * 
 *   export function sumar(a, b) {
 *     return a + b;
 *   }
 * 
 * 3. Ventajas de usar ECMAScript Modules:
 * 
 * - **Organización**: Divide el código en módulos más pequeños y manejables, cada uno con una responsabilidad específica.
 * - **Reutilización**: Las funciones o clases exportadas desde un módulo pueden ser reutilizadas en otros módulos.
 * - **Mantenimiento**: Facilita el mantenimiento del código al permitir la actualización y el manejo de dependencias de forma modular.
 * - **Encapsulamiento**: Los módulos pueden contener su propio espacio de nombres, lo que evita conflictos de nombres en el código.
 */

/**
 * Ejemplo en React:
 * 
 * En un proyecto de React, se suelen utilizar módulos para dividir componentes, funciones utilitarias,
 * y otros elementos en archivos separados.
 * 
 * Por ejemplo, puedes tener un archivo "suma.js" con una función que suma dos números:
 * 
 *  suma.js
 * export function sumar(a, b) {
 *   return a + b;
 * }
 * 
 * Luego, puedes importar esta función en cualquier componente que la necesite:
 * 
 * MiComponente.js
 * import { sumar } from "./suma";
 * 
 * function MiComponente() {
 *   const resultado = sumar(10, 20);
 *   return <p>Resultado: {resultado}</p>;
 * }
 * 
 * Este ejemplo muestra cómo los módulos facilitan la reutilización de funciones y la organización del código en un proyecto React.
 */



// IMPORTANTE
/**
 * Importancia de type="module"
html
Copiar código
<script src="js/24.js" type="module"></script>
Activación de ECMAScript Modules (ESM):

Descripción: El atributo type="module" le dice al navegador que el archivo JavaScript que está cargando debe ser tratado como un módulo ES6. Esto activa las características específicas de los módulos, como la capacidad de usar import y export para manejar la modularidad del código.
Sin type="module": Si no especificas type="module", el navegador tratará el archivo como un script clásico. Esto significa que no podrás utilizar las características de los módulos, como la importación y exportación de funciones o variables entre archivos.
Modo Estricto Automático:

Descripción: Cuando un archivo es tratado como un módulo (gracias a type="module"), automáticamente se ejecuta en "strict mode" (modo estricto). El modo estricto es una versión más segura y optimizada de JavaScript que ayuda a evitar errores comunes.
Ventajas: El modo estricto prohíbe ciertas prácticas como el uso de variables sin declarar, lo que ayuda a escribir código más seguro y menos propenso a errores.
Cargado Diferido Automático:

Descripción: Los scripts con type="module" se cargan de manera diferida (diferida automáticamente), lo que significa que el archivo JavaScript no bloquea la carga del documento HTML. Este comportamiento es similar al uso de defer en scripts clásicos.
Ventajas: Mejora la velocidad de carga de la página, permitiendo que el navegador continúe procesando el HTML mientras los módulos se cargan en segundo plano.
Soporte para Importaciones Relativas y Absolutas:

Descripción: Los módulos permiten utilizar rutas relativas (./modulo.js) y absolutas (/modulo.js) al importar otros módulos. Esto facilita la organización del proyecto y la reutilización de código.
Ejemplo:
javascript
Copiar código
// 24.js
import { sumar } from './funciones.js';
const resultado = sumar(20, 10);
console.log(resultado);
Manejo Automático del Scope (Ámbito):

Descripción: En un script clásico, las variables y funciones definidas en un archivo están en el ámbito global, lo que puede llevar a conflictos de nombres si diferentes scripts utilizan los mismos nombres. En un módulo, todo el código está encapsulado dentro de su propio ámbito, evitando estos conflictos.
Ventajas: Mejora la modularidad y la seguridad del código al evitar colisiones entre variables y funciones globales.
Resumen:
type="module" es esencial cuando utilizas ECMAScript Modules porque le indica al navegador que trate el archivo como un módulo ES6, permitiendo el uso de import y export, activando el modo estricto, manejando el ámbito de manera segura, y mejorando la velocidad de carga de la página.
Evita conflictos globales: Las variables y funciones en módulos no contaminan el espacio global, evitando errores y conflictos en aplicaciones grandes.
Mejora la organización: Los módulos permiten dividir el código en archivos más pequeños y reutilizables, lo que facilita la organización y el mantenimiento del proyecto.
En resumen, especificar type="module" es crucial cuando se trabaja con ECMAScript Modules porque asegura que todas las características y beneficios de los módulos se activen, lo que resulta en un código más seguro, organizado, y eficiente.
 */




/**
 * En JavaScript, cuando trabajas con ECMAScript Modules (ESM), es posible que te encuentres en situaciones donde necesitas importar múltiples funciones, objetos, o valores que tienen el mismo nombre pero provienen de diferentes módulos. Para evitar conflictos de nombres, puedes utilizar alias al importar estos elementos. A continuación, te explico cómo hacerlo y por qué es útil.

Nombrar Alias al Importar
Cuando importas una función, objeto, o valor desde un módulo, puedes asignarle un alias para evitar conflictos de nombres o para hacer que el nombre sea más descriptivo en el contexto en el que lo estás utilizando.

Sintaxis:
javascript
Copiar código
import { nombreOriginal as alias } from './archivo.js';
nombreOriginal: Es el nombre de la función, objeto, o valor tal como está exportado en el módulo de origen.
alias: Es el nuevo nombre que deseas usar en tu código para referirte al nombreOriginal.
Ejemplo Práctico
Supongamos que tienes dos módulos diferentes que exportan una función llamada sumar pero que tienen comportamientos diferentes. Quieres importar ambas funciones en un mismo archivo pero evitar el conflicto de nombres.

Módulo 1: aritmetica.js
javascript
Copiar código
// aritmetica.js
export function sumar(a, b) {
    return a + b;
}
Módulo 2: contabilidad.js
javascript
Copiar código
// contabilidad.js
export function sumar(a, b, impuestos) {
    return a + b + impuestos;
}
Importando con Alias
En tu archivo principal, puedes importar ambas funciones sumar y asignarles alias para diferenciarlas:

javascript
Copiar código
import { sumar as sumarAritmetica } from './aritmetica.js';
import { sumar as sumarContabilidad } from './contabilidad.js';

// Usando las funciones con alias
const resultadoAritmetica = sumarAritmetica(10, 20);
const resultadoContabilidad = sumarContabilidad(10, 20, 5);

console.log(`Resultado Aritmética: ${resultadoAritmetica}`); // Imprime: Resultado Aritmética: 30
console.log(`Resultado Contabilidad: ${resultadoContabilidad}`); // Imprime: Resultado Contabilidad: 35
¿Por Qué Usar Alias?
Evitar Conflictos de Nombres:

Si dos módulos exportan funciones o variables con el mismo nombre, puedes usar alias para diferenciarlas y evitar errores en el código.
Claridad en el Código:

Los alias pueden hacer que el código sea más legible y comprensible. Puedes asignar nombres más descriptivos que expliquen mejor el propósito o el origen de la función, objeto, o valor que estás importando.
Modularidad y Reutilización:

Los alias permiten reutilizar funciones similares de diferentes módulos en el mismo archivo sin que se interfieran entre sí, manteniendo la modularidad del código.
Organización en Proyectos Grandes:

En proyectos grandes, es común tener múltiples módulos que exportan funciones con nombres genéricos. Usar alias facilita la organización y gestión de estos módulos.
Resumen:
Alias en Importaciones: Se usan para evitar conflictos de nombres cuando importas funciones, objetos, o valores con el mismo nombre desde diferentes módulos.
Sintaxis: Usa import { nombreOriginal as alias } from './archivo.js'; para asignar un alias a lo que importas.
Beneficios: Mejora la claridad, evita errores por conflictos de nombres, y facilita la organización del código en proyectos grandes.
Este enfoque es muy útil en el desarrollo de aplicaciones, incluyendo React, donde a menudo necesitas importar múltiples componentes, funciones utilitarias, o configuraciones desde diferentes archivos y deseas mantener el código claro y libre de conflictos.







 */



//EXPORT DEFAULT
/**
 * En ECMAScript Modules (ESM), export default es una característica que te permite exportar un único valor, función, objeto, o clase como la exportación predeterminada de un módulo. A diferencia de export, que puede exportar múltiples elementos desde un módulo, export default se utiliza cuando quieres que un módulo exporte un único valor principal.

¿Qué es export default?
export default: Es la exportación predeterminada de un módulo, lo que significa que cuando otro archivo importa desde este módulo, puede hacerlo sin necesidad de conocer el nombre exacto de lo que se está exportando. Solo un valor, función, objeto, o clase puede ser exportado como default en un módulo.
Sintaxis de export default
javascript
Copiar código
// Exportando con export default
export default function sumar(a, b) {
    return a + b;
}
Importando una Exportación Predeterminada
Cuando importas una exportación predeterminada, no necesitas usar llaves {} y puedes darle cualquier nombre al valor importado:

javascript
Copiar código
// Importando una exportación predeterminada
import sumar from './suma.js';

const resultado = sumar(10, 20);
console.log(resultado); // Imprime: 30
Ejemplo Completo con export default
Archivo 1: suma.js
javascript
Copiar código
// suma.js
export default function sumar(a, b) {
    return a + b;
}
Archivo 2: main.js
javascript
Copiar código
// main.js
import sumar from './suma.js';

const resultado = sumar(15, 25);
console.log(`El resultado de la suma es: ${resultado}`); // Imprime: El resultado de la suma es: 40
Ventajas de export default
Simplicidad:

Cuando un módulo tiene una función principal o un objeto que lo define, export default simplifica la importación, ya que no es necesario recordar el nombre exacto al importarlo en otros archivos.
Flexibilidad en la Importación:

Puedes darle cualquier nombre al importar una exportación predeterminada, lo que permite adaptarse al contexto donde se esté utilizando. Esto es especialmente útil si el nombre del valor exportado puede causar conflictos o si quieres utilizar un nombre más descriptivo en el contexto de importación.
Conveniencia en Proyectos Grandes:

En proyectos grandes, es común que ciertos módulos tengan un propósito principal y se beneficien de tener una exportación predeterminada que otros módulos puedan importar fácilmente.
Resumen de export default:
Uso: Se utiliza para exportar un único valor, función, objeto, o clase como la exportación principal de un módulo.
Importación: No requiere llaves {} y permite nombrar el valor importado como desees.
Ejemplo:
Exportación:
javascript
Copiar código
export default function sumar(a, b) {
    return a + b;
}
Importación:
javascript
Copiar código
import sumar from './suma.js';
Diferencia entre export default y export:
export: Se utiliza para exportar múltiples valores, funciones, objetos, o clases desde un módulo. Cada exportación debe ser importada usando su nombre exacto.
export default: Se utiliza para exportar un único valor principal, y puede ser importado sin usar su nombre exacto, lo que ofrece más flexibilidad.
Ejemplo en React:
En React, es común usar export default para exportar componentes principales de un archivo, facilitando la importación en otros archivos:

javascript
Copiar código
// ComponentePrincipal.js
export default function ComponentePrincipal() {
    return <h1>Hola, soy el componente principal!</h1>;
}

// main.js
import ComponentePrincipal from './ComponentePrincipal';

function App() {
    return (
        <div>
            <ComponentePrincipal />
        </div>
    );
}
En este ejemplo, ComponentePrincipal es exportado como la exportación predeterminada y puede ser importado fácilmente en otros archivos para ser utilizado en la aplicación.
 */