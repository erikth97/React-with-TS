// OPERADORES TERNARIOS  (CONDICIONALES)

// const auth = true

// const saldo = 1000
// const pagar =1200
// const tarjeta = true

// auth ?
//     console.log('Usuario autenticado') :
//     console.log('No autenticado, ir a login')


// saldo > pagar || tarjeta ?
//     console.log('Si puedes pagar') :
//     console.log('no, no puedes pagar')

/**
 * Ejemplo de Operadores Ternarios en JavaScript.
 * 
 * Los operadores ternarios son una forma compacta de realizar evaluaciones condicionales en JavaScript.
 * En lugar de usar una estructura `if...else`, puedes usar un operador ternario para ejecutar una de dos expresiones
 * según si una condición es verdadera o falsa.
 * 
 * Sintaxis:
 * 
 * condición ? expresiónSiVerdadero : expresiónSiFalso;
 * 
 * - Si `condición` es verdadera (`true`), se ejecuta `expresiónSiVerdadero`.
 * - Si `condición` es falsa (`false`), se ejecuta `expresiónSiFalso`.
 */

const auth = true;
const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

/**
 * Operador Ternario para Autenticación:
 * 
 * Descripción: Verifica si el usuario está autenticado.
 * Uso: Si `auth` es verdadero, imprime "Usuario autenticado", de lo contrario, imprime "No autenticado, ir a login".
 */

auth ? 
    console.log('Usuario autenticado') : 
    console.log('No autenticado, ir a login');

/**
 * Operador Ternario para Verificar el Pago:
 * 
 * Descripción: Verifica si el saldo es suficiente para pagar o si una tarjeta está disponible.
 * Uso: Si `saldo > pagar` o `tarjeta` es verdadero, imprime "Si puedes pagar". Si ambas condiciones son falsas, imprime "no, no puedes pagar".
 */

saldo > pagar || tarjeta ?
    console.log('Si puedes pagar') :
    console.log('no, no puedes pagar');

/**
 * Ejemplos en React:
 * 
 * Los operadores ternarios son ampliamente utilizados en React para condicionar el renderizado de componentes
 * o para mostrar diferentes elementos en función del estado o propiedades.
 */

// Ejemplo de uso de operador ternario en React para renderizado condicional:
const ComponenteAutenticacion = ({ auth }) => {
    return (
        <div>
            {auth ? (
                <p>Bienvenido de nuevo!</p>
            ) : (
                <p>Por favor, inicia sesión</p>
            )}
        </div>
    );
};

// Ejemplo de uso de operador ternario en React para manejo de pagos:
const ComponentePago = ({ saldo, pagar, tarjeta }) => {
    return (
        <div>
            {saldo > pagar || tarjeta ? (
                <p>Transacción aprobada</p>
            ) : (
                <p>Fondos insuficientes</p>
            )}
        </div>
    );
};

/**
 * Descripción de los Ejemplos en React:
 * 
 * 1. Uso del operador ternario para autenticación:
 * 
 * En el componente `ComponenteAutenticacion`, el operador ternario se usa para determinar si el usuario
 * está autenticado y, según eso, mostrar un mensaje de bienvenida o una solicitud para iniciar sesión.
 * 
 * 2. Uso del operador ternario para manejo de pagos:
 * 
 * En el componente `ComponentePago`, el operador ternario evalúa si el usuario tiene suficiente saldo
 * o una tarjeta disponible para cubrir el pago, y muestra un mensaje de éxito o de error basado en esa condición.
 */
