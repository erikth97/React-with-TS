//EVENTOS DEL DOM - VALIDANDO FORMULARIOS Y MOSTRANDO ALERTAS

// const formulario = document.querySelector('#formulario')
// formulario.addEventListener('submit', e => {
//     e.preventDefault()

//     const nombre = document.querySelector('#nombre').value
//     const password = document.querySelector('#password').value

    //prevenir nuevas alertas
//     const alertaPrevia = document.querySelector('.alerta')
//     alertaPrevia?.remove()

//     const alerta = document.createElement('DIV')
//     alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

//     if(nombre === '' || password === '') {
//         alerta.textContent = 'Todos los campos son obligatorios'
//         alerta.classList.add('bg-red-500')
//     } else {
//         alerta.textContent = 'Todo bien, iniciando sesion...'
//         alerta.classList.add('bg-green-500')
//     }

//     formulario.appendChild(alerta)
// })




/**
 * DOM - Validación de Formularios y Mostrar Alertas
 * 
 * Este ejemplo muestra cómo validar un formulario y cómo crear y mostrar alertas dinámicas utilizando JavaScript.
 * 
 * Conceptos Clave:
 * 
 * 1. **Validación de Formulario**:
 *    - Asegura que todos los campos requeridos estén completos y que los datos ingresados sean correctos.
 *    - Previene el envío de formularios con datos faltantes o incorrectos.
 * 
 * 2. **Creación Dinámica de Elementos del DOM**:
 *    - Permite crear elementos HTML de manera dinámica, como alertas, y agregarlos al DOM.
 *    - Es útil para proporcionar retroalimentación al usuario en respuesta a acciones como el envío de formularios.
 * 
 * 3. **Mostrar y Remover Alertas**:
 *    - Muestra alertas personalizadas en el DOM basadas en la validación del formulario.
 *    - Se asegura de que las alertas previas sean removidas antes de mostrar una nueva, manteniendo la interfaz ordenada.
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

    // Prevenir que se acumulen múltiples alertas
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove(); // Si existe una alerta previa, la removemos antes de crear una nueva

    // Crear una nueva alerta de manera dinámica
    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black');

    // Validación de los campos del formulario
    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('bg-red-500'); // Asignamos una clase CSS para estilo de error
    } else {
        alerta.textContent = 'Todo bien, iniciando sesión...';
        alerta.classList.add('bg-green-500'); // Asignamos una clase CSS para estilo de éxito
    }

    // Agregamos la alerta creada al formulario
    formulario.appendChild(alerta);
});

/**
 * Explicación Detallada del Código:
 * 
 * 1. **Validación de Formulario**:
 *    - Cuando el usuario intenta enviar el formulario, prevenimos el envío automático con `e.preventDefault()`.
 *    - Obtenemos los valores de los campos `nombre` y `password` y validamos que no estén vacíos.
 *    - Si alguno de los campos está vacío, creamos y mostramos una alerta con un mensaje de error.
 *    - Si ambos campos están completos, mostramos una alerta con un mensaje de éxito.
 * 
 * 2. **Creación Dinámica de Alertas**:
 *    - Utilizamos `document.createElement('DIV')` para crear un elemento `DIV` que actúe como una alerta.
 *    - Asignamos clases CSS para estilizar la alerta y establecemos su contenido textual basado en la validación.
 *    - Agregamos la alerta al formulario con `formulario.appendChild(alerta)`.
 * 
 * 3. **Mostrar y Remover Alertas**:
 *    - Antes de mostrar una nueva alerta, buscamos y removemos cualquier alerta previa para evitar la acumulación de mensajes.
 *    - Esto asegura que la interfaz se mantenga limpia y que solo se muestre la alerta más reciente.
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
 *     <title>Ejemplo de Validación de Formularios y Alertas</title>
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
 * 3. Crear y mostrar una alerta dinámica en el formulario con un mensaje de error si los campos están vacíos, o un mensaje de éxito si todos los campos están completos.
 * 4. Asegurarse de que solo se muestre una alerta a la vez, removiendo cualquier alerta previa antes de agregar una nueva.
 * 
 * Este manejo del evento `submit` y la creación dinámica de alertas es esencial para proporcionar retroalimentación inmediata al usuario, mejorar la validación del formulario y mantener la interfaz clara y ordenada.
 */
