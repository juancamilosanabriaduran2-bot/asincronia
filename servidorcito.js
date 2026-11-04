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
// function saludar(nombre, callback) {
// console.log('Hola, ' + nombre);
// callback(); // se ejecuta después de saludar
// }
// function despedirse() {
// console.log('Adiós');
// }
// saludar('Miguel', despedirse); // se pasa SIN paréntesis
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
// ; // sin este return, el código seguiría y llamaría dos veces al callback
// }
// callback(null, a / b);
// }, 1000);
// }
// dividir(10, 2, (err, resultado) => {
// if (err) {
// console.log('Error:', err.message);
// ;
// }
// console.log('Resultado:', resultado);
// });
// obtenerUsuario(1, (err, usuario) => {
// if (err) return console.log(err.message);
// obtenerPedidos(usuario, (err, pedidos) => {
// if (err) return console.log(err.message);
// obtenerDetalle(pedidos[0], (err, detalle) => {
// if (err) return console.log(err.message);
// calcularEnvio(detalle, (err, envio) => {
// if (err) return console.log(err.message);
// console.log('Costo de envío:', envio);
// });
// });
// });
// });
// function dividir(a, b) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// if (b === 0) {
// reject(new Error('No se puede dividir entre cero'));
// } else {
// resolve(a / b);
// }
// }, 1000);
// });
// }
// dividir(10, 2)
// .then((resultado) => console.log('Resultado:', resultado))
// .catch((err) => console.log('Error:', err.message))
// .finally(() => console.log('Operación terminada'));
// obtenerUsuario(1)
// .then((usuario) => obtenerPedidos(usuario)) // retorna una promesa
// .then((pedidos) => obtenerDetalle(pedidos[0]))
// .then((detalle) => calcularEnvio(detalle))
// .then((envio) => console.log('Costo de envío:', envio))
// .catch((err) => console.log(err.message)); // atrapa el error de cualquier
// paso
// const esperar = (ms, valor) =>
// new Promise((resolve) => setTimeout(() => resolve(valor), ms));
// console.time('total');
// Promise.all([esperar(2000, 'A'), esperar(1000, 'B'), esperar(1500, 'C')])
// .then((resultados) => {
// console.log(resultados); // ['A', 'B', 'C'] en el orden del arreglo, no en el de
// llegada
// console.timeEnd('total'); // unos 2 segundos, no 4.5
// });
// function dividirConPromesa(a, b) {
// return new Promise((resolve, reject) => {
// dividirConCallback(a, b, (err, resultado) => {
// if (err) reject(err);
// else resolve(resultado);
// });
// });
// }