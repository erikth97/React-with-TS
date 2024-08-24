// Arrays o arreglos (listas)

// Definimos un array llamado `tecnologias` que contiene varios tipos de datos, incluyendo números, un booleano y un string.
const tecnologias = [20, 30, 40, true, "React.js"];

// Accedemos al elemento en el índice 1 del array `tecnologias`.
// Los índices en los arrays de JavaScript comienzan en 0, por lo que el índice 1 corresponde al segundo elemento.
console.log(tecnologias[1]);  // Salida: 30

/*
Resumen de los conceptos:

1. Arrays o Arreglos: Un array en JavaScript es una colección ordenada de elementos que pueden ser de cualquier tipo.
   Los arrays se utilizan para almacenar múltiples valores en una sola variable.

2. Índices de Array: Cada elemento en un array tiene una posición conocida como índice, que comienza en 0.
   Esto significa que el primer elemento del array está en la posición 0, el segundo en la posición 1, y así sucesivamente.

3. Acceso a elementos del Array: Puedes acceder a cualquier elemento de un array usando su índice.
   Por ejemplo, `tecnologias[1]` accede al segundo elemento del array `tecnologias`, que es el número 30.
*/

// Definimos un array llamado `tecnologias` que contiene diferentes tipos de datos.
//const tecnologias = [20, 30, 40, true, "React.js"];

// Accedemos al elemento en el índice 1 del array `tecnologias`.
console.log(tecnologias[1]);  // Salida: 30

// Definimos un objeto llamado `curso` con propiedades que describen aspectos de un curso.
const curso = {
    titulo: "Introducción a JavaScript",
    lecciones: 12,
    completado: false,
    tecnologias: ["HTML", "CSS", "JavaScript"]
};

// Accedemos a la propiedad `titulo` del objeto `curso`.
console.log(curso.titulo);  // Salida: "Introducción a JavaScript"

/*
Resumen de los conceptos:

Arrays:
- Estructura de datos lineal que permite almacenar una colección ordenada de elementos.
- Se accede a los elementos por su índice numérico, comenzando desde 0.
- Ideal para listas o colecciones donde el orden importa y se accede a los elementos secuencialmente.

Objetos:
- Estructura de datos que representa una entidad con propiedades, cada una con un nombre (clave) y un valor asociado.
- Se accede a las propiedades por su clave (nombre), usando la notación de punto o corchetes.
- Adecuado para representar entidades con atributos nombrados, donde cada propiedad describe un aspecto de la entidad.

Diferencias clave:
- Arrays son ideales para colecciones ordenadas sin nombres clave, mientras que los objetos son mejores para estructuras de datos con propiedades nombradas.
- Los objetos permiten una representación más descriptiva de los datos debido a que cada elemento (propiedad) está identificado por una clave única.
*/
