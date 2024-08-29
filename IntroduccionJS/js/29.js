// DOM - MANIPULAR ELEMENTOS HTML CON JS

// const heading = document.querySelector('.heading')
// const enlances = document.querySelectorAll('.navegacion a')

// heading.textContent = 'Un nuevo heading...'

// const inputNombre = document.querySelector('#nombre')
// inputNombre.value = 'Un nuevo valor...'

// enlances.forEach(enlace => enlace.textContent = 'Nuevo enlace')

/**
 * DOM - Manipulación de Elementos HTML con JavaScript
 * 
 * El DOM (Document Object Model) permite a JavaScript acceder y manipular los elementos HTML de una página web.
 * Esto es esencial para crear aplicaciones web dinámicas e interactivas, donde los elementos de la página pueden
 * cambiar en respuesta a las acciones del usuario o eventos específicos.
 * 
 * Conceptos Clave:
 * 
 * 1. **Modificar el Contenido de Texto (`textContent`)**:
 *    - `textContent` se utiliza para establecer o recuperar el contenido textual de un elemento.
 *    - Este método reemplaza todo el texto dentro del elemento, incluyendo el texto de los elementos hijos.
 *    - Uso común: Cambiar el texto de títulos, párrafos, botones, etc.
 * 
 * 2. **Modificar el Valor de un Campo de Formulario (`value`)**:
 *    - `value` se utiliza para establecer o recuperar el valor de un campo de formulario, como un input o textarea.
 *    - Uso común: Prellenar campos de formularios, actualizar valores basados en la entrada del usuario, etc.
 * 
 * 3. **Modificar el Contenido de Múltiples Elementos (`forEach` con `textContent`)**:
 *    - Cuando se seleccionan múltiples elementos con `querySelectorAll`, podemos usar `forEach` para iterar sobre
 *      todos los elementos y modificar sus propiedades.
 *    - Uso común: Cambiar el texto o atributos de varios elementos al mismo tiempo.
 */

// Seleccionamos un elemento con la clase 'heading' usando querySelector
const heading = document.querySelector('.heading');

// Modificamos el contenido de texto del elemento 'heading'
heading.textContent = 'Un nuevo heading...'; 
// El contenido textual del elemento <h1 class="heading"> se actualizará a "Un nuevo heading..."

// Seleccionamos todos los enlaces dentro de un contenedor con la clase 'navegacion' usando querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');

// Iteramos sobre cada enlace y modificamos su contenido de texto
enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace');
// Todos los elementos <a> dentro de .navegacion ahora tendrán el texto "Nuevo enlace"

// Seleccionamos un campo de formulario con el ID 'nombre' usando querySelector
const inputNombre = document.querySelector('#nombre');

// Modificamos el valor del campo de formulario
inputNombre.value = 'Un nuevo valor...';
// El campo de entrada <input id="nombre"> ahora tendrá el valor "Un nuevo valor..."

/**
 * Explicación Detallada del Código:
 * 
 * 1. **Modificar el Contenido de Texto (`textContent`)**:
 *    - `textContent` es utilizado para cambiar el texto visible dentro de un elemento.
 *    - En este ejemplo, seleccionamos un elemento con la clase `heading` y actualizamos su texto a "Un nuevo heading...".
 *    - Esto es útil para cambiar dinámicamente los encabezados, etiquetas y cualquier otro contenido textual en la página.
 * 
 * 2. **Modificar el Valor de un Campo de Formulario (`value`)**:
 *    - `value` es utilizado para cambiar el valor de un campo de formulario.
 *    - Aquí seleccionamos un campo de entrada con el ID `nombre` y establecemos su valor a "Un nuevo valor...".
 *    - Esto es útil para prellenar o actualizar valores en formularios de manera dinámica.
 * 
 * 3. **Modificar el Contenido de Múltiples Elementos (`forEach` con `textContent`)**:
 *    - Usando `querySelectorAll`, seleccionamos todos los enlaces dentro de `.navegacion`.
 *    - Luego, usamos `forEach` para iterar sobre cada enlace y cambiar su texto a "Nuevo enlace".
 *    - Esto permite realizar cambios en masa a múltiples elementos seleccionados de una sola vez.
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
 *     <title>Ejemplo de Manipulación del DOM</title>
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
 *     <form>
 *         <label for="nombre">Nombre:</label>
 *         <input type="text" id="nombre" name="nombre">
 *     </form>
 *     <script src="script.js"></script>
 * </body>
 * </html>
 * 
 * En el archivo `script.js`, el código anterior se ejecutaría para:
 * 
 * 1. Cambiar el texto del encabezado `<h1>` a "Un nuevo heading...".
 * 2. Cambiar el texto de todos los enlaces dentro de `.navegacion` a "Nuevo enlace".
 * 3. Establecer el valor del campo de entrada `#nombre` a "Un nuevo valor...".
 */

