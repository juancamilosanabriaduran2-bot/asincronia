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
//}
// async function saludar() {
// return 'Hola';
// }
// console.log(saludar()); // Promise { 'Hola' }, no el texto
// saludar().then((texto) => console.log(texto)); // Hola
// async function mostrarCostoEnvio(idUsuario) {
// try {
// const usuario = await obtenerUsuario(idUsuario);
// const pedidos = await obtenerPedidos(usuario);
// const detalle = await obtenerDetalle(pedidos[0]);
// const envio = await calcularEnvio(detalle);
// console.log('Costo de envío:', envio);
// } catch (err) {
// // atrapa el error de cualquiera de los cuatro await
// console.log(err.message);
// }
// }
// const esperar = (ms, valor) =>
// new Promise((resolve) => setTimeout(() => resolve(valor), ms));
// // Secuencial: unos 3 segundos (1 + 2), aunque las tareas no dependen entre sí
// async function secuencial() {
// const clima = await esperar(1000, 'Soleado');
// const noticias = await esperar(2000, '5 noticias');
// console.log(clima, noticias);
// }
// // Paralelo: unos 2 segundos, porque ambas tareas arrancan al tiempo
// async function paralelo() {
// const [clima, noticias] = await Promise.all([
// esperar(1000, 'Soleado'),
// esperar(2000, '5 noticias'),
// ]);
// console.log(clima, noticias);
// }
// async function mal(ids) {
// ids.forEach(async (id) => {
// const producto = await obtenerProducto(id);
// console.log(producto.nombre);
// });
// console.log('Terminado'); // sale primero
// }
// // Correcto en secuencia: for...of
// async function bienSecuencial(ids) {
// for (const id of ids) {
// const producto = await obtenerProducto(id);
// console.log(producto.nombre);
// }
// console.log('Terminado');
// }
// // Correcto en paralelo: map + Promise.all
// async function bienParalelo(ids) {
// const productos = await Promise.all(ids.map((id) => obtenerProducto(id)));
// productos.forEach((p) => console.log(p.nombre));

// console.log('Terminado');
// }

// async function saludar() {
// return 'Hola';
// }
// console.log(saludar()); // Promise { 'Hola' }, no el texto
// saludar().then((texto) => console.log(texto)); // Hola



// datos.js — "base de datos" simulada, compartida por las tres versiones
const empleados = [
{ id: 1, nombre: 'Miguel' },
{ id: 2, nombre: 'Yenny' },
{ id: 3, nombre: 'MCamila' },
];
const salarios = [
{ id: 1, salario: 1000, idempleado: 1 },
{ id: 2, salario: 2000, idempleado: 2 },
];
module.exports = { empleados, salarios };

// // Versión 1: callbacks
// const { empleados, salarios } = require('./datos');
// const obtenerEmpleado = (id, callback) => {
// setTimeout(() => {
// const empleado = empleados.find((e) => e.id === id);
// if (!empleado) {
// callback(new Error(`El empleado con id ${id} no existe`), null);
// return;
// }
// callback(null, empleado);
// }, 500);
// };
// const obtenerSalario = (empleado, callback) => {
// setTimeout(() => {
// const registro = salarios.find((s) => s.idempleado === empleado.id);
// if (!registro) {

// callback(new Error(`El empleado ${empleado.nombre} no tiene salario`), null);
// return;
// }
// callback(null, registro.salario);
// }, 500);
// };
// obtenerEmpleado(1, (err, empleado) => {
// if (err) return console.log(err.message);
// obtenerSalario(empleado, (err, salario) => {
// if (err) return console.log(err.message);
// console.log(`El empleado ${empleado.nombre} gana ${salario} dólares`);
// });
// });
// // Versión 2: promesas
// const { empleados, salarios } = require('./datos');
// const obtenerEmpleado = (id) =>
// new Promise((resolve, reject) => {
// setTimeout(() => {
// const empleado = empleados.find((e) => e.id === id);
// if (!empleado) reject(new Error(`El empleado con id ${id} no existe`));
// else resolve(empleado);
// }, 500);
// });
// const obtenerSalario = (empleado) =>
// new Promise((resolve, reject) => {
// setTimeout(() => {
// const registro = salarios.find((s) => s.idempleado === empleado.id);
// if (!registro) reject(new Error(`El empleado ${empleado.nombre} no tiene
// salario`));
// else resolve(registro.salario);
// }, 500);
// });
// // Necesitamos el empleado en el último paso, así que lo guardamos fuera de la cadena
// let empleadoEncontrado;
// obtenerEmpleado(1)
// .then((empleado) => {
// empleadoEncontrado = empleado;
// return obtenerSalario(empleado); // retornar evita el .then anidado
// })
// .then((salario) => {
// console.log(`El empleado ${empleadoEncontrado.nombre} gana ${salario} dólares`);
// })
// .catch((err) => console.log(err.message));
// Versión 3: async/await (usa las mismas funciones de la versión 2)
const mostrarInformacion = async (id) => {
try {
const empleado = await obtenerEmpleado(id);
const salario = await obtenerSalario(empleado);

console.log(`El empleado ${empleado.nombre} gana ${salario} dólares`);
} catch (err) {
console.log(err.message);
}
};
mostrarInformacion(1); // gana 1000
mostrarInformacion(3); // no tiene salario
mostrarInformacion(4); // no existe