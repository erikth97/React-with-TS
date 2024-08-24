// Definimos tres variables: `producto`, `precio` y `marca`.
const producto = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Samsung";

// Concatenación clásica usando el operador '+':
// Esta es una forma más antigua y menos flexible de concatenar strings.
console.log('El producto es: ' + producto);  // Salida: "El producto es: Tablet de 12 pulgadas"

// Template String usando backticks (` `) y ${} para interpolación:
// Los Template Strings permiten insertar expresiones y variables directamente dentro de un string.
console.log(`El producto es: ${producto} `);  // Salida: "El producto es: Tablet de 12 pulgadas "

// Concatenación de varias variables para formar una oración completa usando el operador '+':
console.log(producto + " $" + precio + " Dolares, marca: " + marca); 
// Salida: "Tablet de 12 pulgadas $400 Dolares, marca: Samsung"

// Template String para concatenar múltiples variables y expresiones:
// Esta sintaxis es más legible y compacta comparada con la concatenación clásica.
console.log(`${producto} $${precio} Dolares, marca ${marca}`);
// Salida: "Tablet de 12 pulgadas $400 Dolares, marca Samsung"

/*
Resumen de los conceptos:

1. Concatenación clásica: Utiliza el operador '+' para unir cadenas de texto y variables.
   Requiere gestionar manualmente los espacios y la estructura del texto.

2. Template Strings: Utiliza los backticks (` `) y la sintaxis `${}` para incorporar variables y expresiones dentro de cadenas de texto.
   Permite una inserción más directa y clara de las variables en el texto, facilitando la lectura y escritura del código.
*/
