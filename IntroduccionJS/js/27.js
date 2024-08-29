// PERFORMANCE Y MULTIPLE ASYNC AWAIT

// const url = 'https://jsonplaceholder.typicode.com/comments'
// const url2 = 'https://jsonplaceholder.typicode.com/todos'
// const url3 = 'https://jsonplaceholder.typicode.com/photos'

// const consultarAPI = async () => {
//     try {
//         const inicio = performance.now()

//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
        
//         const response2 = await fetch(url2)
//         const data2 = await response2.json()
//         console.log(data2)

//         const response3 = await fetch(url3)
//         const data3 = await response3.json()
//         console.log(data3)

//         const fin = performance.now()
//         console.log(`El resultado de la PRIMERA funcion es: ${fin - inicio} ms`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// consultarAPI


// const consultarAPI2 = async () => {
//     try {
//         const inicio = performance.now()

//         const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])

//         const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])

//         console.log(data)
//         console.log(data2)
//         console.log(data3)

//         const fin = performance.now()
//         console.log(`El resultado de la SEGUNDA funcio es: ${fin - inicio} ms`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// consultarAPI2()


/**
 * Performance y Múltiples `async/await` en JavaScript
 * 
 * Cuando trabajas con múltiples operaciones asíncronas, como varias solicitudes HTTP, es importante considerar el rendimiento.
 * Ejecutar estas operaciones en secuencia puede ser ineficiente, especialmente si no dependen unas de otras. Utilizar `Promise.all()`
 * para ejecutarlas en paralelo puede mejorar significativamente el rendimiento.
 * 
 * Conceptos Clave:
 * 
 * 1. **Asincronismo**: JavaScript es un lenguaje de programación asíncrono, lo que significa que puede manejar múltiples operaciones
 *    sin bloquear el flujo de ejecución principal. Esto es crucial para operaciones como solicitudes HTTP, que pueden tardar
 *    un tiempo en completarse.
 * 
 * 2. **`async/await`**: `async` convierte una función en asincrónica, permitiendo usar `await` dentro de ella. `await` detiene la ejecución
 *    de la función hasta que una promesa se resuelva, haciendo que el código sea más legible y fácil de manejar.
 * 
 * 3. **`Promise.all()`**: Permite ejecutar múltiples promesas en paralelo y espera a que todas se resuelvan. Esto es útil para mejorar
 *    el rendimiento cuando las operaciones no dependen unas de otras.
 * 
 * 4. **`performance.now()`**: Proporciona una marca de tiempo de alta resolución para medir el rendimiento del código.
 *    Es útil para comparar el tiempo de ejecución de diferentes enfoques.
 */

// URLs de las APIs que vamos a consultar
const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/photos';

/**
 * Función `consultarAPI`:
 * 
 * Esta función realiza tres solicitudes HTTP de forma secuencial utilizando `async/await`.
 * Aunque es fácil de entender y leer, cada solicitud espera a que la anterior termine antes de empezar,
 * lo que puede resultar en un rendimiento subóptimo si las solicitudes son independientes entre sí.
 */
const consultarAPI = async () => {
    try {
        const inicio = performance.now(); // Marca el tiempo de inicio para medir el rendimiento

        // Realizamos la primera solicitud y esperamos a que se complete antes de continuar
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // Realizamos la segunda solicitud después de que la primera haya terminado
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        // Realizamos la tercera solicitud después de que la segunda haya terminado
        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);

        const fin = performance.now(); // Marca el tiempo de finalización
        console.log(`El resultado de la PRIMERA función es: ${fin - inicio} ms`);
    } catch (error) {
        console.log(error.message);
    }
};

// Llamamos a la función `consultarAPI` para ejecutar las solicitudes secuenciales
consultarAPI();

/**
 * Función `consultarAPI2`:
 * 
 * Esta función realiza las tres solicitudes HTTP en paralelo utilizando `Promise.all()` y `async/await`.
 * Esto significa que todas las solicitudes se inician al mismo tiempo, y se espera a que todas se completen
 * antes de continuar. Este enfoque es generalmente más rápido cuando las solicitudes no dependen unas de otras.
 */
const consultarAPI2 = async () => {
    try {
        const inicio = performance.now(); // Marca el tiempo de inicio para medir el rendimiento

        // Iniciamos todas las solicitudes en paralelo utilizando `Promise.all()`
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);

        // Convertimos las respuestas a JSON también en paralelo
        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()]);

        console.log(data);
        console.log(data2);
        console.log(data3);

        const fin = performance.now(); // Marca el tiempo de finalización
        console.log(`El resultado de la SEGUNDA función es: ${fin - inicio} ms`);
    } catch (error) {
        console.log(error.message);
    }
};

// Llamamos a la función `consultarAPI2` para ejecutar las solicitudes en paralelo
consultarAPI2();

/**
 * Comparación de Rendimiento:
 * 
 * 1. **Secuencial (`consultarAPI`)**:
 *    - Las solicitudes HTTP se realizan una tras otra, esperando a que la anterior se complete antes de comenzar la siguiente.
 *    - Esto puede ser más lento porque cada solicitud espera a que la anterior termine, aumentando el tiempo total de ejecución.
 * 
 * 2. **Paralelo (`consultarAPI2`)**:
 *    - Las solicitudes HTTP se inician todas al mismo tiempo utilizando `Promise.all()`.
 *    - El tiempo total de ejecución generalmente es menor porque las solicitudes no dependen unas de otras.
 */

/**
 * Ejemplo en React:
 * 
 * Usar `async/await` y `Promise.all()` en React es una práctica común para manejar solicitudes de datos en componentes.
 * Aquí te muestro cómo puedes integrar este enfoque en un componente de React.
 */

import React, { useState, useEffect } from 'react';

const DatosMultiples = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Iniciamos todas las solicitudes en paralelo utilizando `Promise.all()`
                const [response, response2, response3] = await Promise.all([
                    fetch('https://jsonplaceholder.typicode.com/comments'),
                    fetch('https://jsonplaceholder.typicode.com/todos'),
                    fetch('https://jsonplaceholder.typicode.com/photos')
                ]);

                // Convertimos las respuestas a JSON también en paralelo
                const [data, data2, data3] = await Promise.all([
                    response.json(),
                    response2.json(),
                    response3.json()
                ]);

                // Actualizamos el estado con los datos obtenidos
                setData(data);
                setData2(data2);
                setData3(data3);
            } catch (error) {
                // Si ocurre un error, lo capturamos y lo guardamos en el estado `error`
                setError(error.message);
            }
        };

        fetchData();
    }, []); // El arreglo vacío asegura que la solicitud solo se haga una vez al montar el componente

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Datos Combinados</h1>
            <h2>Comentarios</h2>
            <ul>
                {data.slice(0, 5).map(item => (
                    <li key={item.id}>{item.body}</li>
                ))}
            </ul>
            <h2>Todos</h2>
            <ul>
                {data2.slice(0, 5).map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <h2>Fotos</h2>
            <ul>
                {data3.slice(0, 5).map(item => (
                    <li key={item.id}><img src={item.thumbnailUrl} alt={item.title} /></li>
                ))}
            </ul>
        </div>
    );
};

export default DatosMultiples;

/**
 * Explicación del Ejemplo en React:
 * 
 * 1. **useState**:
 *    - Utilizamos `useState` para manejar el estado de los datos obtenidos (`data`, `data2`, `data3`) y los posibles errores (`error`).
 * 
 * 2. **useEffect**:
 *    - Utilizamos `useEffect` para realizar las solicitudes HTTP cuando el componente se monta.
 *    - La función asincrónica `fetchData` se declara y se ejecuta dentro de `useEffect`.
 * 
 * 3. **Promise.all()**:
 *    - Iniciamos todas las solicitudes en paralelo utilizando `Promise.all()`, lo que mejora el rendimiento.
 * 
 * 4. **Renderizado Condicional**:
 *    - Si ocurre un error, se muestra un mensaje de error. De lo contrario, se renderizan los datos de las tres fuentes en listas separadas.
 */
