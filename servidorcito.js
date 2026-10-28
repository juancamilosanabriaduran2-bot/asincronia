// console.log('1. Pido la pizza');
// console.log('2. Pago');
// console.log('3. Me voy');
// // Salida: 1, 2, 3. Sin sorpresas.
// console.log('1. Pido la pizza');
// setTimeout(() => {
//     console.log('2. La pizza está lista');
// }, 0); // ¡cero milisegundos!
//     console.log('3. Mientras tanto, veo televisión');

// function saludar(nombre, callback) {
// console.log('Hola, ' + nombre);
// callback(); // se ejecuta después de saludar
// }
// function despedirse() {
// console.log('Adiós');
// }

// saludar('Miguel', despedirse); // se pasa SIN paréntesis
// //Fíjate en despedirse sin paréntesis: le entregas la función para que otro la ejecute. Si escribes
// //despedirse(), la ejecutas tú en ese momento y le pasas su resultado (undefined).

// function recibirMensaje(callback) {
// console.log('Esperando mensaje en WhatsApp...');
// setTimeout(() => {
// console.log('Mensaje recibido');
// callback(); // se llama solo cuando el mensaje llegó
// }, 3000);
// }
// function leerMensaje() {
// console.log('Leyendo mensaje...');
// }
// recibirMensaje(leerMensaje);
// console.log('Sigo usando el celular');

// function dividir(a, b, callback) {
// setTimeout(() => {
// if (b === 0) {
// callback(new Error('No se puede dividir entre cero'), null);
// return; // sin este return, el código seguiría y llamaría dos veces al callback
// }
// callback(null, a / b);
// }, 1000);
// }
// dividir(10, 2, (err, resultado) => {
// if (err) {
// console.log('Error:', err.message);
// return;
// }
// console.log('Resultado:', resultado);
// });

