// EVENTOS DEL DOM - INPUTS

// const inputNmombre = document.querySelector('#nombre')
// inputNmombre.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// const inputPassword = document.querySelector('#password')
// inputPassword.addEventListener('input', functionPassword)

// function functionPassword() {
//     inputPassword.type = "text"

//     setTimeout(() => {
//         inputPassword.type = 'password'
//     }, 300);
// }


/**
 * DOM - Manejo de Eventos - Inputs
 * 
 * Este ejemplo muestra cómo manejar eventos relacionados con los inputs de un formulario en JavaScript.
 * 
 * Conceptos Clave:
 * 
 * 1. **Evento `input`**:
 *    - El evento `input` se dispara cada vez que el valor de un campo de entrada cambia.
 *    - Es útil para capturar la entrada del usuario en tiempo real y responder a estos cambios,
 *      como mostrar el texto mientras se escribe o validar la entrada en tiempo real.
 * 
 * 2. **`e.target.value`**:
 *    - `e.target.value` obtiene el valor actual del campo de entrada donde ocurrió el evento.
 *    - Esto es esencial para trabajar con los datos que el usuario está ingresando en los formularios,
 *      permitiendo hacer validaciones o actualizar la interfaz de usuario dinámicamente.
 * 
 * 3. **Cambio Dinámico del Tipo de Input (`inputPassword.type`)**:
 *    - Se puede cambiar el tipo de un input de `password` a `text` para mostrar u ocultar la contraseña temporalmente.
 *    - Es útil para mejorar la experiencia del usuario, permitiendo verificar la contraseña antes de enviarla.
 */

// Seleccionamos un campo de entrada con el ID 'nombre' usando querySelector
const inputNombre = document.querySelector('#nombre');

// Agregamos un evento `input` al campo de entrada 'nombre'
// Este evento se dispara cada vez que el usuario escribe, borra o modifica el contenido del campo
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value); 
    // Imprime el valor actual del campo 'nombre' en la consola mientras el usuario escribe
});

// Seleccionamos un campo de entrada con el ID 'password' usando querySelector
const inputPassword = document.querySelector('#password');

// Agregamos un evento `input` al campo de entrada 'password'
// Este evento llamará a la función `functionPassword` cada vez que el usuario escriba en el campo de contraseña
inputPassword.addEventListener('input', functionPassword);

// Definimos la función `functionPassword` que maneja el evento del input 'password'
function functionPassword() {
    inputPassword.type = "text"; 
    // Cambia el tipo de input a 'text' para mostrar la contraseña mientras se escribe

    setTimeout(() => {
        inputPassword.type = 'password'; 
        // Después de 300 milisegundos, vuelve a cambiar el tipo de input a 'password' para ocultar la contraseña
    }, 300);
}

/**
 * Explicación Detallada del Código:
 * 
 * 1. **Evento `input` en el Campo de Nombre**:
 *    - Se escucha el evento `input` en el campo de entrada con ID `nombre`.
 *    - Cada vez que el usuario escribe, borra o modifica el texto en este campo, el valor actual se imprime en la consola.
 *    - Esto permite capturar en tiempo real lo que el usuario está escribiendo, útil para validaciones en tiempo real o para mostrar sugerencias.
 * 
 * 2. **Evento `input` en el Campo de Contraseña**:
 *    - El evento `input` también se escucha en el campo de entrada con ID `password`.
 *    - La función `functionPassword` se ejecuta cada vez que el usuario escribe en este campo.
 *    - La función cambia temporalmente el tipo de input a `text` para mostrar la contraseña mientras se escribe,
 *      y luego vuelve a cambiarlo a `password` después de 300 milisegundos para ocultar la contraseña.
 *    - Este comportamiento es útil para evitar errores al ingresar contraseñas, permitiendo al usuario ver lo que está escribiendo brevemente.
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
 *     <title>Ejemplo de Eventos del DOM - Inputs</title>
 *     <link rel="stylesheet" href="styles.css">
 * </head>
 * <body>
 *     <form>
 *         <label for="nombre">Nombre:</label>
 *         <input type="text" id="nombre" name="nombre">
 *         
 *         <label for="password">Contraseña:</label>
 *         <input type="password" id="password" name="password">
 *     </form>
 *     <script src="script.js"></script>
 * </body>
 * </html>
 * 
 * En el archivo `script.js`, el código anterior se ejecutaría para:
 * 
 * 1. Capturar y mostrar en la consola en tiempo real lo que el usuario escribe en el campo de nombre.
 * 2. Cambiar temporalmente el tipo de input del campo de contraseña a `text` para mostrar la contraseña mientras el usuario escribe, y luego ocultarla nuevamente después de 300 milisegundos.
 * 
 * Este código es útil para mejorar la experiencia del usuario al interactuar con formularios, proporcionando validación en tiempo real y aumentando la usabilidad de los campos de contraseña.
 */
