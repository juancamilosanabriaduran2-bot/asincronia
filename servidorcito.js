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



//==========Código de la versión 3: async/await, con try/catch para manejar errores
// const empleados = [
//   { id: 1, nombre: 'Miguel' },
//   { id: 2, nombre: 'Yenny' },
//   { id: 3, nombre: 'MCamila' },
// ];

// const salarios = [
//   { id: 1, salario: 1000, idempleado: 1 },
//   { id: 2, salario: 2000, idempleado: 2 },
// ];

// const cargos = [
//   { id: 1, nombre: 'Instructor', idempleado: 1 },
//   { id: 2, nombre: 'Contadora', idempleado: 2 },
//   { id: 3, nombre: 'Diseñadora', idempleado: 3 },
// ];

// const obtenerEmpleado = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const empleado = empleados.find((e) => e.id === id);
//       if (!empleado) {
//         reject(new Error(`El empleado con id ${id} no existe`));
//       } else {
//         resolve(empleado);
//       }
//     }, 500);
//   });
// };

// const obtenerCargo = (empleado) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const registro = cargos.find((c) => c.idempleado === empleado.id);
//       if (!registro) {
//         reject(new Error(`El empleado ${empleado.nombre} no tiene cargo`));
//       } else {
//         resolve(registro.nombre);
//       }
//     }, 500);
//   });
// };

// const obtenerSalario = (empleado) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const registro = salarios.find((s) => s.idempleado === empleado.id);
//       if (!registro) {
//         reject(new Error(`El empleado ${empleado.nombre} no tiene salario`));
//       } else {
//         resolve(registro.salario);
//       }
//     }, 500);
//   });
// };

// const mostrarInformacion = async (id) => {
//   try {
//     const empleado = await obtenerEmpleado(id);
//     const cargo = await obtenerCargo(empleado);
//     const salario = await obtenerSalario(empleado);

//     console.log(`El empleado ${empleado.nombre}, ${cargo}, gana ${salario} dólares`);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// const ejecutarPruebas = async () => {
//   console.log("Iniciando consultas...\n");
  
//   await mostrarInformacion(1); // Caso 1: Todo existe con éxito
// };

// ejecutarPruebas();


//=========Por Nivel====
//===Nivel 1===
// function saludarDespuesDe(nombre, segundos, callback) {
//   // 1. Validación de segundos negativos (Convención de error primero)
//   if (segundos < 0) {
//     return callback(new Error('El tiempo de espera no puede ser negativo'), null);
//   }

//   // 2. setTimeout espera milisegundos (segundos * 1000)
//   setTimeout(() => {
//     // El primer argumento es null porque no hubo error
//     callback(null, nombre);
//   }, segundos * 1000);
// }

// function mostrarSaludo(error, nombre) {
//   // Validamos si llegó un error primero
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
  
//   console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
// }

// // --- Pruebas de funcionamiento ---

// // Caso 1: Flujo correcto (Espera 2 segundos)
// saludarDespuesDe('Ana', 2, mostrarSaludo);
// console.log('Esto se imprime primero');

// // Caso 2: Flujo con error (Se ejecuta inmediatamente sin esperar)
// // saludarDespuesDe('Carlos', -5, mostrarSaludo);


//===Nivel 2===
let panquequesListos = false;
function prepararPanqueques(callback) {
console.log('Preparando panqueques...');
setTimeout(() => {
callback('Preparando...😖'); // Llamada al callback con el mensaje
}, 1000);
setTimeout(() => {
callback('Ya casi...😍'); // Llamada al callback con el mensaje
}, 2000);
setTimeout(() => {
callback('Comida lista!!!😋'); // Llamada al callback con el mensaje
}, 3000);
while (panquequesListos === false) {
  for (let i = 0; i < 100; i++) { 
    setTimeout(() => { 
    console.log('🥞🥞🥞');
    }, 4000);
  }
  panquequesListos = prompt('¿Más hambre? (y = sí/ n = no)').toLowerCase();
  if (panquequesListos === 'y') {
    panquequesListos = false;
  } else {
    panquequesListos = true;
  }

}
// Simula 3 segundos de preparación
}
function servirDesayuno(mensaje) {
console.log(mensaje);
}
prepararPanqueques(servirDesayuno);