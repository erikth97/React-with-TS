// Recorriendo Arrays con ciclo for

// Definimos un array llamado `tecnologias` que contiene nombres de algunas tecnologías web comunes.
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js'];

// Utilizamos un ciclo for para recorrer todos los elementos del array `tecnologias`.
// `i` comienza en 0, y el ciclo se ejecuta mientras `i` sea menor que la longitud del array.
for (let i = 0; i < tecnologias.length; i++) {
    // Imprimimos cada elemento del array accediendo a él mediante su índice `i`.
    console.log(tecnologias[i]); // Salida: Imprime cada tecnología en una nueva línea.
}

/*
Resumen de los conceptos:

1. Ciclo for para recorrer arrays:
   - El ciclo for es una de las formas más básicas y versátiles de recorrer arrays en JavaScript.
   - Permite ejecutar un bloque de código una cantidad definida de veces, que es particularmente útil para operaciones en arrays.

2. Uso del índice:
   - En el ciclo, `i` se usa como índice para acceder a cada elemento del array `tecnologias`.
   - El índice `i` se incrementa en cada iteración, lo que permite acceder secuencialmente a cada elemento del array.

3. Condiciones del ciclo:
   - La condición del ciclo `i < tecnologias.length` asegura que el ciclo se ejecute solo mientras `i` sea menor que el número de elementos en el array, evitando así un desbordamiento del índice.

4. Aplicaciones prácticas:
   - Este método es ampliamente utilizado para realizar operaciones sobre cada elemento de un array, como mostrar datos, modificarlos, o evaluar condiciones.
*/
