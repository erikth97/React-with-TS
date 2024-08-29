// DOM SELECTORES

// const heading = document.querySelector('.heading')

// console.log(heading)
// console.log(heading.tagName)
// console.log(heading.textContent)
// console.log(heading.classList)
// console.log(heading.id)

// const enlaces = document.querySelector('.navegacion a')
// const enlaces = document.querySelectorAll('navegacion a')

/**
 * DOM Selectores en JavaScript
 * 
 * El DOM (Document Object Model) es la representación estructurada de un documento HTML en forma de árbol.
 * JavaScript permite interactuar con este modelo para acceder y manipular elementos de la página.
 * Los selectores del DOM son las herramientas que utilizamos para seleccionar estos elementos en el documento.
 * 
 * Conceptos Clave:
 * 
 * 1. **`document.querySelector()`**:
 *    - Este método devuelve el primer elemento que coincide con el selector CSS especificado.
 *    - Si no se encuentra ningún elemento que coincida, devuelve `null`.
 *    - Es útil cuando solo necesitas seleccionar un único elemento en el DOM.
 * 
 * 2. **`document.querySelectorAll()`**:
 *    - Este método devuelve una lista de nodos estática (NodeList) que contiene todos los elementos que coinciden
 *      con el selector CSS especificado.
 *    - Si no se encuentra ningún elemento que coincida, devuelve una lista vacía.
 *    - Se utiliza cuando necesitas seleccionar múltiples elementos que coinciden con un selector específico.
 * 
 * 3. **Propiedades del Elemento Seleccionado**:
 *    - **`tagName`**: Devuelve el nombre de la etiqueta del elemento seleccionado.
 *    - **`textContent`**: Devuelve o establece el contenido textual dentro del elemento seleccionado.
 *    - **`classList`**: Devuelve una lista activa de las clases del elemento seleccionado.
 *      Permite agregar, eliminar o verificar la presencia de clases CSS.
 *    - **`id`**: Devuelve o establece el valor del atributo `id` del elemento seleccionado.
 */

// Ejemplo Práctico: DOM Selectores

// Seleccionamos un elemento con la clase 'heading' usando querySelector
const heading = document.querySelector('.heading');

// Mostramos el elemento seleccionado en la consola
console.log(heading);  // Ejemplo: <h1 class="heading">Bienvenido a mi sitio web</h1>

// Accedemos y mostramos el nombre de la etiqueta del elemento (por ejemplo, H1, H2, etc.)
console.log(heading.tagName); // Imprime: "H1" si es un elemento <h1>

// Accedemos y mostramos el contenido textual del elemento
console.log(heading.textContent); // Imprime el texto dentro del elemento <h1>

// Accedemos y mostramos la lista de clases del elemento
console.log(heading.classList); // Imprime: DOMTokenList ["heading"]

// Accedemos y mostramos el ID del elemento (si tiene uno)
console.log(heading.id); // Imprime el valor del atributo id del elemento, si existe

// Seleccionamos el primer enlace dentro de un contenedor con la clase 'navegacion' usando querySelector
const enlace = document.querySelector('.navegacion a');
console.log(enlace); // Imprime el primer enlace encontrado dentro de la clase 'navegacion'

// Seleccionamos todos los enlaces dentro de un contenedor con la clase 'navegacion' usando querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces); // Imprime una lista de todos los enlaces dentro de la clase 'navegacion'


/**
 * Explicación Detallada del Código:
 * 
 * 1. **`document.querySelector('.heading')`**:
 *    - Selecciona el primer elemento del DOM que coincide con el selector CSS `.heading`.
 *    - En este caso, selecciona un elemento con la clase `heading`.
 *    - Ideal para seleccionar un único elemento cuando sabes que solo habrá uno con esa clase o ID.
 * 
 * 2. **Propiedades del Elemento Seleccionado**:
 *    - **`heading.tagName`**: Devuelve el nombre de la etiqueta del elemento, como "H1" para un elemento `<h1>`.
 *    - **`heading.textContent`**: Devuelve el texto contenido dentro del elemento.
 *    - **`heading.classList`**: Devuelve un DOMTokenList de las clases del elemento.
 *      Puedes usar métodos como `add`, `remove`, `toggle`, o `contains` para manipular las clases.
 *    - **`heading.id`**: Devuelve el ID del elemento si tiene uno asignado, de lo contrario, devuelve una cadena vacía.
 * 
 * 3. **`document.querySelector('.navegacion a')`**:
 *    - Selecciona el primer enlace (`<a>`) dentro de un contenedor con la clase `navegacion`.
 *    - Útil para seleccionar el primer elemento de un grupo que coincide con un selector específico.
 * 
 * 4. **`document.querySelectorAll('.navegacion a')`**:
 *    - Selecciona todos los enlaces (`<a>`) dentro de un contenedor con la clase `navegacion`.
 *    - Devuelve una NodeList (lista de nodos) que contiene todos los elementos encontrados.
 *    - Ideal cuando necesitas trabajar con un grupo de elementos que comparten un selector común.
 */

/**
 * Ejemplo en el Contexto de una Página Web:
 * 
 * Supongamos que tienes la siguiente estructura HTML:
 * 
 * <!DOCTYPE html>
 * <html lang="es">
 * <head>
 *     <meta charset="UTF-8">
 *     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 *     <title>Ejemplo de DOM</title>
 *     <link rel="stylesheet" href="styles.css">
 * </head>
 * <body>
 *     <header>
 *         <h1 class="heading">Bienvenido a mi sitio web</h1>
 *     </header>
 *     <nav class="navegacion">
 *         <a href="#inicio">Inicio</a>
 *         <a href="#sobre">Sobre mí</a>
 *         <a href="#contacto">Contacto</a>
 *     </nav>
 *     <script src="script.js"></script>
 * </body>
 * </html>
 * 
 * En el archivo `script.js`, el código anterior se ejecutaría para seleccionar y manipular los elementos `heading`
 * y los enlaces dentro de la navegación.
 * 
 * - **Seleccionar el heading**:
 *   - El código selecciona el elemento `<h1>` con la clase `heading` y muestra sus propiedades.
 * 
 * - **Seleccionar los enlaces**:
 *   - El código selecciona el primer enlace dentro del contenedor `.navegacion` y luego todos los enlaces dentro
 *     de ese mismo contenedor, imprimiéndolos en la consola.
 */
