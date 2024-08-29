// EVENTOS DEL DOM - SUBMIT

// const formulario = document.querySelector('#formulario')
// formulario.addEventListener('submit', e => {
//     e.preventDefault()

//     const nombre = document.querySelector('#nombre').value
//     const password = document.querySelector('#password').value

//     if(nombre === '' || password === '') {
//         console.log('Todos los campos son obligatorios')
//     } else {
//         console.log('Todo bien, iniciando sesion...')
//     }
// })


/**
 * DOM - Manejo de Eventos - Submit
 * 
 * Este ejemplo muestra cómo manejar el evento `submit` de un formulario utilizando JavaScript.
 * 
 * Conceptos Clave:
 * 
 * 1. **Evento `submit`**:
 *    - El evento `submit` se dispara cuando un formulario es enviado.
 *    - Es útil para realizar validaciones antes de que los datos del formulario se envíen al servidor,
 *      permitiendo prevenir el envío si los datos son incorrectos o incompletos.
 * 
 * 2. **`e.preventDefault()`**:
 *    - `preventDefault()` previene la acción predeterminada del formulario, que es enviarlo automáticamente al servidor.
 *    - Este método es esencial cuando deseas validar o procesar los datos manualmente antes de permitir que el formulario sea enviado.
 * 
 * 3. **Validación de Campos de Formulario**:
 *    - Antes de enviar un formulario, es importante verificar que todos los campos requeridos estén completos y que los datos sean válidos.
 *    - Esto ayuda a evitar errores en el procesamiento de datos y mejora la experiencia del usuario al proporcionar retroalimentación inmediata.
 */

// Seleccionamos el formulario con el ID 'formulario' usando querySelector
const formulario = document.querySelector('#formulario');

// Agregamos un evento `submit` al formulario
// Este evento se dispara cuando el usuario intenta enviar el formulario
formulario.addEventListener('submit', e => {
    e.preventDefault(); // Prevenimos la acción predeterminada del formulario (que es enviarlo)

    // Obtenemos los valores de los campos de entrada 'nombre' y 'password'
    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    // Validamos que ambos campos tengan un valor
    if (nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios');
        // Si alguno de los campos está vacío, mostramos un mensaje de error en la consola
    } else {
        console.log('Todo bien, iniciando sesión...');
        // Si ambos campos tienen un valor, mostramos un mensaje de éxito en la consola
    }
});

/**
 * Explicación Detallada del Código:
 * 
 * 1. **Evento `submit` en el Formulario**:
 *    - Se escucha el evento `submit` en el formulario con ID `formulario`.
 *    - Cuando el usuario intenta enviar el formulario, se ejecuta la función anónima que previene la acción predeterminada utilizando `e.preventDefault()`.
 *    - Esto es esencial para validar los datos del formulario antes de enviarlos al servidor.
 * 
 * 2. **Validación de Campos de Formulario**:
 *    - Después de prevenir el envío, obtenemos los valores de los campos `nombre` y `password` usando `querySelector` y `.value`.
 *    - Se realiza una validación simple: si alguno de los campos está vacío, se muestra un mensaje de error en la consola.
 *    - Si ambos campos tienen un valor, se muestra un mensaje de éxito en la consola, lo que indicaría que el formulario está listo para ser enviado.
 * 
 * 3. **Retroalimentación al Usuario**:
 *    - Es importante proporcionar retroalimentación inmediata al usuario sobre el estado del formulario, como si todos los campos están completos o si hay algún error.
 *    - Esto mejora la experiencia del usuario y ayuda a prevenir errores en el envío de datos.
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
 *     <title>Ejemplo de Eventos del DOM - Submit</title>
 *     <link rel="stylesheet" href="styles.css">
 * </head>
 * <body>
 *     <form id="formulario">
 *         <label for="nombre">Nombre:</label>
 *         <input type="text" id="nombre" name="nombre">
 *         
 *         <label for="password">Contraseña:</label>
 *         <input type="password" id="password" name="password">
 *         
 *         <button type="submit">Iniciar Sesión</button>
 *     </form>
 *     <script src="script.js"></script>
 * </body>
 * </html>
 * 
 * En el archivo `script.js`, el código anterior se ejecutaría para:
 * 
 * 1. Prevenir que el formulario sea enviado automáticamente cuando el usuario haga clic en "Iniciar Sesión" o presione Enter.
 * 2. Validar que los campos `nombre` y `password` no estén vacíos antes de proceder.
 * 3. Proporcionar retroalimentación inmediata al usuario sobre el estado del formulario, mostrando mensajes en la consola.
 * 
 * Este manejo del evento `submit` es esencial para controlar la validación y el procesamiento de los formularios de manera efectiva y personalizada, mejorando la experiencia del usuario.
 */
