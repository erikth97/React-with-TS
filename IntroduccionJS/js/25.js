// FETCH API CON PROMISES

// const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then((Response) => {
//         if(Response.ok) {
//             return Response.json()
//         }
//         throw new Error('Hubo un error...')
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

/**
 * Fetch API con Promises en JavaScript
 * 
 * La Fetch API es una funcionalidad nativa de JavaScript que permite realizar solicitudes HTTP
 * para interactuar con recursos remotos, como servidores o APIs, de manera sencilla y eficiente.
 * Fetch devuelve una Promise, lo que facilita la manipulación asincrónica de los datos obtenidos
 * de la solicitud.
 * 
 * Conceptos Clave:
 * 
 * - **Promise**: Fetch devuelve una Promise que se resuelve con la respuesta de la solicitud. 
 *   Puedes encadenar `.then()` para manejar la respuesta y `.catch()` para manejar errores.
 * - **Response.ok**: Es una propiedad del objeto `Response` que indica si la solicitud fue exitosa 
 *   (status code en el rango 200-299).
 * - **Response.json()**: Es un método que convierte la respuesta en formato JSON en un objeto de JavaScript.
 */

// Definimos la URL a la que vamos a realizar la solicitud
const url = 'https://jsonplaceholder.typicode.com/comments';

// Usamos fetch para hacer una solicitud HTTP GET
fetch(url)
    .then(response => {
        // Verifica si la respuesta es exitosa (status code en el rango 200-299)
        if (response.ok) {
            return response.json(); // Convierte la respuesta en un objeto JavaScript
        }
        // Si la respuesta no es exitosa, lanza un error
        throw new Error('Hubo un error al obtener los datos...');
    })
    .then(data => {
        // Maneja los datos obtenidos de la solicitud
        console.log(data); // Imprime los datos en la consola
    })
    .catch(error => {
        // Maneja cualquier error que haya ocurrido durante la solicitud
        console.log(error.message); // Imprime el mensaje de error en la consola
    });

/**
 * Ejemplo en React:
 * 
 * La Fetch API es comúnmente utilizada en React para obtener datos de APIs y mostrar esos datos en componentes.
 * A continuación, se muestra cómo usar Fetch dentro de un componente React.
 */

import React, { useState, useEffect } from 'react';

const Comentarios = () => {
    const [comentarios, setComentarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Realiza la solicitud al cargar el componente
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Hubo un error al obtener los comentarios...');
            })
            .then(data => {
                // Actualiza el estado con los comentarios obtenidos
                setComentarios(data);
            })
            .catch(error => {
                // Maneja el error si ocurre
                setError(error.message);
            });
    }, []); // El arreglo vacío asegura que la solicitud solo se haga una vez al montar el componente

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
 * 1. **useState**: Se utiliza para manejar el estado de los comentarios y el posible error.
 * 2. **useEffect**: Se utiliza para realizar la solicitud Fetch cuando el componente se monta.
 * 3. **fetch**: Se utiliza para obtener los datos de la API. Si la solicitud es exitosa, los datos se guardan en el estado `comentarios`. Si ocurre un error, se guarda en el estado `error`.
 * 4. **Renderizado**: Se muestran los comentarios en una lista `<ul>`. Si ocurre un error, se muestra un mensaje de error.
 * 
 * Este patrón es común en aplicaciones React, donde los datos se obtienen de APIs y se muestran en componentes interactivos.
 */
