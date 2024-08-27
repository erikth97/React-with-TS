// FETCH API CON ASYNC AWAIT Y TRY CATCH

// const url = 'https://jsonplaceholder.typicode.com/comments'

// const consultarAPI = async () => {
//     try {
//         const response = await fetch(url)
//         if(!response.ok) {
//             throw new Error('Hubo un error')
//         }
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// consultarAPI()

/**
 * Asincronismo en JavaScript: Fetch API con Async/Await y Try/Catch
 * 
 * El asincronismo en JavaScript es la capacidad de ejecutar código que no bloquea el flujo principal
 * del programa, permitiendo que otras operaciones continúen mientras se espera una tarea (como una solicitud HTTP)
 * para completarse. Esto es fundamental para crear aplicaciones web eficientes y responsivas.
 * 
 * JavaScript maneja la asincronía utilizando varios mecanismos, entre los cuales `async/await` es una de las formas
 * más modernas y legibles de manejar operaciones asincrónicas, como las solicitudes a servidores con Fetch API.
 * 
 * Conceptos Clave:
 * 
 * 1. **`async`**: Es una palabra clave que convierte una función en una función asincrónica, lo que significa que puede
 *    contener expresiones `await` para esperar el resultado de promesas.
 * 
 * 2. **`await`**: Se usa para esperar a que una Promise se resuelva. Solo puede ser utilizada dentro de funciones declaradas
 *    con `async`.
 * 
 * 3. **`try`/`catch`**: Es un bloque de manejo de errores que permite capturar y manejar excepciones que pueden ocurrir
 *    durante la ejecución de código asincrónico.
 * 
 * 4. **Fetch API**: Es una API nativa de JavaScript que permite realizar solicitudes HTTP para interactuar con recursos remotos
 *    (como APIs) de manera asincrónica.
 */

// Definimos la URL desde la cual vamos a obtener los datos
const url = 'https://jsonplaceholder.typicode.com/comments';

/**
 * Función asincrónica para consultar una API utilizando Fetch API con `async` y `await`.
 * 
 * 1. La función `consultarAPI` está declarada con la palabra clave `async`, lo que le permite
 *    utilizar `await` para manejar promesas de manera más legible.
 * 
 * 2. Dentro de la función, se utiliza un bloque `try/catch` para manejar cualquier error que pueda ocurrir
 *    durante la solicitud HTTP.
 */

const consultarAPI = async () => {
    try {
        // Se realiza la solicitud HTTP utilizando Fetch API.
        // `await` se utiliza para esperar a que la promesa de `fetch` se resuelva.
        const response = await fetch(url);
        
        // Verificamos si la respuesta HTTP fue exitosa (código de estado en el rango 200-299).
        // Si no es exitosa, lanzamos un error.
        if (!response.ok) {
            throw new Error('Hubo un error al obtener los datos...');
        }

        // Convertimos la respuesta en formato JSON a un objeto JavaScript.
        // `await` se utiliza nuevamente para esperar a que se resuelva la promesa de `response.json()`.
        const data = await response.json();

        // Si todo salió bien, los datos obtenidos se imprimen en la consola.
        console.log(data);
    } catch (error) {
        // Si ocurre algún error durante la solicitud o procesamiento de la respuesta, se captura aquí.
        // El error se maneja e imprime en la consola.
        console.log(error.message);
    }
};

// Llamamos a la función `consultarAPI` para que ejecute la solicitud HTTP y maneje la respuesta.
consultarAPI();

/**
 * Paso a Paso y Explicación del Código:
 * 
 * 1. **`async function`**:
 *    - La función `consultarAPI` está declarada con `async`, lo que permite usar `await` dentro de ella.
 *    - Esto convierte la función en asincrónica, lo que significa que puede manejar operaciones no bloqueantes.
 * 
 * 2. **`await fetch(url)`**:
 *    - Se realiza una solicitud HTTP a la URL especificada utilizando Fetch API.
 *    - `await` se utiliza para esperar a que la promesa de `fetch` se resuelva antes de continuar.
 *    - Mientras se espera, otras operaciones pueden seguir ejecutándose en el hilo principal.
 * 
 * 3. **`response.ok`**:
 *    - Después de recibir la respuesta, verificamos si la solicitud fue exitosa.
 *    - `response.ok` es `true` si el código de estado HTTP está en el rango 200-299.
 *    - Si no es exitosa, lanzamos un error con `throw`.
 * 
 * 4. **`await response.json()`**:
 *    - Si la solicitud fue exitosa, convertimos la respuesta JSON a un objeto JavaScript.
 *    - Nuevamente, `await` se utiliza para esperar a que se resuelva la promesa.
 * 
 * 5. **`try/catch`**:
 *    - Cualquier error que ocurra durante la solicitud o la conversión de la respuesta a JSON es capturado en el bloque `catch`.
 *    - Esto asegura que el código no falle sin control y permite manejar errores de forma segura.
 */

/**
 * Ejemplo en React:
 * 
 * Usar `async/await` y `try/catch` en React es una práctica común para manejar solicitudes de datos en componentes.
 * Aquí te muestro cómo puedes integrar este enfoque en un componente de React.
 */

import React, { useState, useEffect } from 'react';

const Comentarios = () => {
    const [comentarios, setComentarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Definimos una función asincrónica dentro de useEffect para manejar la solicitud de datos.
        const obtenerComentarios = async () => {
            try {
                // Hacemos la solicitud Fetch utilizando `await`.
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                
                // Verificamos si la solicitud fue exitosa.
                if (!response.ok) {
                    throw new Error('Hubo un error al obtener los comentarios...');
                }

                // Convertimos la respuesta en un objeto JavaScript.
                const data = await response.json();

                // Actualizamos el estado con los datos obtenidos.
                setComentarios(data);
            } catch (error) {
                // Si ocurre un error, lo capturamos y lo guardamos en el estado `error`.
                setError(error.message);
            }
        };

        // Llamamos a la función para realizar la solicitud.
        obtenerComentarios();
    }, []); // El arreglo vacío asegura que la solicitud solo se haga una vez al montar el componente.

    return (
        <div>
            <h1>Comentarios</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {comentarios.map(comentario => (
                    <li key={comentario.id}>
                        <p><strong>{comentario.name}</strong>: {comentario.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comentarios;

/**
 * Explicación del Ejemplo en React:
 * 
 * 1. **useState**:
 *    - Utilizamos `useState` para manejar el estado de los comentarios (`comentarios`) y los posibles errores (`error`).
 * 
 * 2. **useEffect**:
 *    - Utilizamos `useEffect` para realizar la solicitud HTTP cuando el componente se monta.
 *    - La función asincrónica `obtenerComentarios` se declara y se ejecuta dentro de `useEffect`.
 * 
 * 3. **Async/Await**:
 *    - Usamos `async/await` dentro de `obtenerComentarios` para realizar la solicitud de manera asincrónica y esperar a que se resuelva antes de continuar.
 * 
 * 4. **Try/Catch**:
 *    - Cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta es capturado en el bloque `catch`, lo que permite manejar el error sin que el componente falle.
 * 
 * 5. **Renderizado Condicional**:
 *    - Si ocurre un error, se muestra un mensaje de error. De lo contrario, se muestra la lista de comentarios.
 */
