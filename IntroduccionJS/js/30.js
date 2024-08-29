// EVENTOS DEL DOM - CLICK

// const heading = document.querySelector('.heading')
// const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('mouseenter', () => {
//     heading.textContent = 'Nuevo heading al dar click'
// })
// heading.addEventListener('mouseleavve', () => {
//     enlaces.preventDefault()
//     enlaces.target.textContent = 'Diste click..'
// })

// enlaces.forEach( enlace => {
//     enlace.addEventListener('click', (e) => {
//         e.preventDefault()
//         e.target.textContent = 'Diste click'
//     })
// })


/**
 * DOM - Manejo de Eventos - Click
 * 
 * Los eventos del DOM son acciones que pueden ser detectadas por JavaScript para ejecutar funciones o comportamientos específicos.
 * Estos eventos permiten crear experiencias interactivas al responder a acciones del usuario, como hacer clic, pasar el ratón, escribir en un campo de texto, entre otros.
 * 
 * Conceptos Clave:
 * 
 * 1. **`addEventListener`**:
 *    - `addEventListener` es un método que permite escuchar eventos en un elemento específico del DOM.
 *    - Se utiliza para asociar una función (o manejador de eventos) que se ejecutará cuando ocurra un evento particular.
 *    - Este método es fundamental para hacer que los elementos de la página respondan a las interacciones del usuario.
 *    - Ejemplos de eventos que se pueden escuchar: `click`, `mouseenter`, `mouseleave`, `keydown`, `submit`, entre otros.
 * 
 * 2. **Evento `click`**:
 *    - El evento `click` se dispara cuando un usuario hace clic en un elemento.
 *    - Es uno de los eventos más comunes utilizados para interactuar con los elementos de una página web.
 *    - Es útil para manejar interacciones como la selección de opciones, la navegación, el envío de formularios, entre otros.
 * 
 * 3. **`event.preventDefault()`**:
 *    - `preventDefault()` es un método que se utiliza para prevenir el comportamiento predeterminado de un evento.
 *    - Por ejemplo, evita que un enlace navegue a una nueva página o que un formulario se envíe al servidor.
 *    - Este método es útil cuando deseas manejar el comportamiento del evento completamente con JavaScript, controlando lo que sucede después de que el evento es disparado.
 */

// Seleccionamos un elemento con la clase 'heading' usando querySelector
const heading = document.querySelector('.heading');

// Seleccionamos todos los enlaces dentro de un contenedor con la clase 'navegacion' usando querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');

// Agregamos un evento `mouseenter` al elemento 'heading'
// `mouseenter` se dispara cuando el cursor del mouse entra en el área del elemento
heading.addEventListener('mouseenter', () => {
    heading.textContent = 'Nuevo heading al pasar el mouse'; 
    // Cambia el texto del heading cuando el mouse entra en el área del elemento
});

// Agregamos un evento `mouseleave` al elemento 'heading'
// `mouseleave` se dispara cuando el cursor del mouse sale del área del elemento
heading.addEventListener('mouseleave', () => {
    heading.textContent = 'Heading original'; 
    // Restaura el texto del heading cuando el mouse sale del área del elemento
});

// Iteramos sobre cada enlace y agregamos un evento `click`
// `click` se dispara cuando el usuario hace clic en un enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault(); 
        // Prevenimos la acción predeterminada del enlace (navegar a otra página)
        e.target.textContent = 'Diste click'; 
        // Cambiamos el texto del enlace cuando se hace clic
    });
});

/**
 * Explicación Detallada del Código:
 * 
 * 1. **`addEventListener('mouseenter')`**:
 *    - El evento `mouseenter` se dispara cuando el cursor del mouse entra en el área del elemento seleccionado.
 *    - En este ejemplo, cambiamos el texto del `heading` a "Nuevo heading al pasar el mouse".
 *    - Esto se usa comúnmente para dar retroalimentación visual cuando el usuario interactúa con un elemento.
 * 
 * 2. **`addEventListener('mouseleave')`**:
 *    - El evento `mouseleave` se dispara cuando el cursor del mouse sale del área del elemento seleccionado.
 *    - Aquí, restauramos el texto original del `heading` cuando el cursor sale del área del elemento.
 *    - Es útil para revertir cambios hechos en el evento `mouseenter` o para ocultar información adicional mostrada al pasar el mouse.
 * 
 * 3. **`addEventListener('click')`**:
 *    - Iteramos sobre todos los enlaces seleccionados y agregamos un evento `click` a cada uno.
 *    - Cuando se hace clic en un enlace, `event.preventDefault()` previene la navegación predeterminada del enlace.
 *    - Esto es especialmente útil cuando deseas manejar la navegación o cualquier otra acción después de un clic con JavaScript.
 *    - El texto del enlace se actualiza a "Diste click" como retroalimentación al usuario, lo que confirma la acción realizada.
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
 *     <title>Ejemplo de Eventos del DOM</title>
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
 * En el archivo `script.js`, el código anterior se ejecutaría para:
 * 
 * 1. Cambiar el texto del heading cuando el usuario pasa el mouse sobre él y restaurarlo cuando el mouse sale.
 * 2. Cambiar el texto de los enlaces cuando el usuario hace clic en ellos, previniendo la navegación predeterminada.
 * 
 * Este código es fundamental para crear una interacción dinámica en una página web, permitiendo que los elementos respondan a las acciones del usuario y mejoren la experiencia de usuario.
 */
