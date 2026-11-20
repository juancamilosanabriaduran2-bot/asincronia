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
//===Ejercicio 1===
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

//===Ejercicio 2===
// let panquequesListos = false;
// function prepararPanqueques(callback) {
// console.log('Preparando panqueques...');
// setTimeout(() => {
// callback('Preparando...😖'); // Llamada al callback con el mensaje
// }, 1000);
// setTimeout(() => {
// callback('Ya casi...😍'); // Llamada al callback con el mensaje
// }, 2000);
// setTimeout(() => {
// callback('Comida lista!!!😋'); // Llamada al callback con el mensaje
// }, 3000);
//  for (let i = 0; i < 100; i++) {
//     setTimeout(() => {
//     console.log('🥞🥞🥞');
//     }, 4000);
//   }
// // Simula 3 segundos de preparación
// }
// function servirDesayuno(mensaje) {
// console.log(mensaje);
// }
// prepararPanqueques(servirDesayuno);

//===Ejercicio 3===
// function descargarArchivo(nombre, callback) {
//   console.log(`Descargando ${nombre}...`);
//   setTimeout(() => {
//     const fallo = Math.random() < 0.3; // 30% de probabilidad de fallo
//     if (fallo) {
//       callback(new Error(`Falló la descarga de ${nombre}`));
//     } else {
//       callback(null, `Archivo ${nombre} descargado con éxito.`);
//     }
//   }, 4000);
// }

// function procesarArchivo(nombre, callback) {
//   console.log("Procesando archivo...");
//   setTimeout(() => {
//     // Esta función no especifica fallos en el enunciado
//     callback(null, "Archivo procesado");
//   }, 2000);
// }

// function enviarCorreo(callback) {
//   setTimeout(() => {
//     // Esta función no especifica fallos en el enunciado
//     callback(null, "Correo de confirmación enviado");
//   }, 1000);
// }

// // Ejecución del proceso (Pirámide de la perdición / Callback Hell)
// descargarArchivo("datos.txt", function (err, archivoDescargado) {
//   if (err) {
//     console.error(err.message);
//     return;
//   }

//   procesarArchivo(archivoDescargado, function (err, archivoProcesado) {
//     if (err) {
//       console.error(err.message);
//       return;
//     }

//     enviarCorreo(function (err, correoEnviado) {
//       if (err) {
//         console.error(err.message);
//         return;
//       }

//       console.log(correoEnviado);
//       console.log("Proceso terminado");
//     });
//   });
// });

//===Nivel 2===


// ============================================================
// TALLER COMPLETADO - EJERCICIOS POR NIVEL
// Las funciones quedan definidas para poder probar cada ejercicio.
// Descomenta la llamada de prueba que quieras ejecutar.
// ============================================================

// ==================== NIVEL 1: CALLBACKS ====================

// Ejercicio 1
function saludarDespuesDe(nombre, segundos, callback) {
  if (segundos < 0) {
    callback(new Error('El tiempo no puede ser negativo'), null);
    return;
  }

  setTimeout(() => {
    callback(null, nombre);
  }, segundos * 1000);
}

function mostrarSaludo(err, nombre) {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
}

// Prueba:
// saludarDespuesDe('Ana', 2, (err, nombre) => {
//   if (err) return console.log(err.message);
//   mostrarSaludo(null, nombre);
// });
// console.log('Esto se imprime primero');

// Ejercicio 2
function prepararPanqueques(callback) {
  console.log('Preparando panqueques...');
  setTimeout(() => {
    callback(null, 'Panqueques listos para servir');
  }, 3000);
}

function servirDesayuno(mensaje) {
  console.log(mensaje);
}

function prepararJugo(callback) {
  console.log('Preparando jugo de naranja...');
  setTimeout(() => {
    callback(null, 'Jugo de naranja listo');
  }, 1000);
}

// Prueba normal:
// prepararPanqueques((err, mensaje) => {
//   if (err) return console.log(err.message);
//   servirDesayuno(mensaje);
// });
// Reto: el jugo comienza después de servir los panqueques.
// prepararPanqueques((err, mensaje) => {
//   if (err) return console.log(err.message);
//   servirDesayuno(mensaje);
//   prepararJugo((error, jugo) => {
//     if (error) return console.log(error.message);
//     servirDesayuno(jugo);
//   });
// });

// Ejercicio 3
function descargarArchivo(nombre, callback) {
  console.log(`Descargando ${nombre}...`);
  setTimeout(() => {
    if (Math.random() < 0.3) {
      callback(new Error(`Falló la descarga de ${nombre}`), null);
      return;
    }
    callback(null, nombre);
  }, 4000);
}

function procesarArchivo(nombre, callback) {
  console.log('Procesando archivo...');
  setTimeout(() => {
    callback(null, 'Archivo procesado');
  }, 2000);
}

function enviarCorreo(callback) {
  setTimeout(() => {
    callback(null, 'Correo de confirmación enviado');
  }, 1000);
}

function ejecutarDescarga() {
  descargarArchivo('datos.txt', (err, archivo) => {
    if (err) {
      console.log(err.message);
      return;
    }

    procesarArchivo(archivo, (error, resultado) => {
      if (error) {
        console.log(error.message);
        return;
      }

      enviarCorreo((fallo, mensaje) => {
        if (fallo) {
          console.log(fallo.message);
          return;
        }

        console.log(resultado);
        console.log(mensaje);
        console.log('Proceso terminado');
      });
    });
  });
}

// ==================== NIVEL 2: PROMESAS ====================

// Ejercicio 4: versiones con promesas de los ejercicios 1, 2 y 3.
function saludarDespuesDePromesa(nombre, segundos) {
  return new Promise((resolve, reject) => {
    if (segundos < 0) {
      reject(new Error('El tiempo no puede ser negativo'));
      return;
    }

    setTimeout(() => resolve(nombre), segundos * 1000);
  });
}

function prepararPanquequesPromesa() {
  console.log('Preparando panqueques...');
  return new Promise((resolve) => {
    setTimeout(() => resolve('Panqueques listos para servir'), 3000);
  });
}

function prepararJugoPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Jugo de naranja listo'), 1000);
  });
}

function descargarArchivoPromesa(nombre) {
  console.log(`Descargando ${nombre}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error(`Falló la descarga de ${nombre}`));
      } else {
        resolve(nombre);
      }
    }, 4000);
  });
}

function procesarArchivoPromesa(nombre) {
  console.log('Procesando archivo...');
  return new Promise((resolve) => {
    setTimeout(() => resolve('Archivo procesado'), 2000);
  });
}

function enviarCorreoPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Correo de confirmación enviado'), 1000);
  });
}

function ejecutarDescargaPromesa() {
  return descargarArchivoPromesa('datos.txt')
    .then((archivo) => procesarArchivoPromesa(archivo))
    .then((resultado) => {
      console.log(resultado);
      return enviarCorreoPromesa();
    })
    .then((mensaje) => {
      console.log(mensaje);
      console.log('Proceso terminado');
    })
    .catch((err) => console.log(err.message))
    .finally(() => console.log('Fin del intento'));
}

// Ejercicio 5: pedido con Promise.all.
const ingredientes = [
  { nombre: 'Pollo', tiempo: 1500 },
  { nombre: 'Arroz', tiempo: 1000 },
  { nombre: 'Verduras', tiempo: 1200 },
  { nombre: 'Salsa', tiempo: 800 },
  { nombre: 'Especias', tiempo: 500 },
];

const cocineros = [
  { nombre: 'Laura', ingredientes: ['Pollo', 'Especias'] },
  { nombre: 'Andrés', ingredientes: ['Arroz'] },
  { nombre: 'Sofía', ingredientes: ['Verduras', 'Salsa'] },
];

function prepararIngrediente(ingrediente) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ingrediente.nombre), ingrediente.tiempo);
  });
}

async function cocinar(cocinero) {
  const preparados = [];

  for (const nombre of cocinero.ingredientes) {
    const ingrediente = ingredientes.find((item) => item.nombre === nombre);
    const listo = await prepararIngrediente(ingrediente);
    preparados.push(listo);
  }

  const tiempo = cocinero.ingredientes.reduce((total, nombre) => {
    const ingrediente = ingredientes.find((item) => item.nombre === nombre);
    return total + ingrediente.tiempo;
  }, 0);

  return `${cocinero.nombre} terminó: ${preparados.join(', ')} (${tiempo} ms)`;
}

async function prepararPedido() {
  console.time('Pedido');
  try {
    const resultados = await Promise.all(cocineros.map((cocinero) => cocinar(cocinero)));
    resultados.forEach((resultado) => console.log(resultado));
    console.log('Pedido listo');
  } catch (err) {
    console.log('Un cocinero no pudo terminar:', err.message);
  } finally {
    console.timeEnd('Pedido');
  }
}

// Para probar Promise.allSettled, cada cocinero debe devolver una promesa
// que pueda rechazarse. Este ejemplo muestra el estado individual.
async function revisarCocineros() {
  const tareas = cocineros.map((cocinero, indice) => {
    if (indice === 1) {
      return Promise.reject(new Error('Se quemó un ingrediente'));
    }
    return cocinar(cocinero);
  });

  const resultados = await Promise.allSettled(tareas);
  resultados.forEach((resultado, indice) => {
    if (resultado.status === 'fulfilled') {
      console.log(resultado.value);
    } else {
      console.log(`${cocineros[indice].nombre} no terminó: ${resultado.reason.message}`);
    }
  });
}

// ==================== NIVEL 3: ASYNC/AWAIT ====================

// Ejercicio 6: las funciones de promesas no cambian.
// for...of espera cada promesa antes de pasar al siguiente ingrediente.
// No usamos forEach porque no espera las funciones async que ejecuta.
async function prepararPedidoAsync() {
  console.time('Pedido async');
  try {
    const resultados = await Promise.all(cocineros.map((cocinero) => cocinar(cocinero)));
    resultados.forEach((resultado) => console.log(resultado));
    console.log('Pedido listo');
  } catch (err) {
    console.log(err.message);
  } finally {
    console.timeEnd('Pedido async');
  }
}

async function ejecutarDescargaAsync() {
  try {
    const archivo = await descargarArchivoPromesa('datos.txt');
    const resultado = await procesarArchivoPromesa(archivo);
    const correo = await enviarCorreoPromesa();
    console.log(resultado);
    console.log(correo);
    console.log('Proceso terminado');
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('Fin del intento');
  }
}

// ==================== RETO INTEGRADOR ====================

const ventas = [
  { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
  { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
  { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
  { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
  { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
  { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
  { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
  { id: 8, idarticulo: 101, cantidad: 1, fecha: '2024-08-04' },
  { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
  { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' },
];

const articulos = [
  { idarticulo: 101, nombre: 'Artículo A' },
  { idarticulo: 102, nombre: 'Artículo B' },
  { idarticulo: 103, nombre: 'Artículo C' },
  { idarticulo: 104, nombre: 'Artículo D' },
];

function obtenerVentasCallback(callback) {
  setTimeout(() => callback(null, ventas), 500);
}

function obtenerArticuloCallback(id, callback) {
  setTimeout(() => {
    const articulo = articulos.find((item) => item.idarticulo === id);
    if (!articulo) {
      callback(new Error(`El artículo ${id} no existe`), null);
      return;
    }
    callback(null, articulo);
  }, 300);
}

function obtenerVentas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ventas), 500);
  });
}

function obtenerArticulo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const articulo = articulos.find((item) => item.idarticulo === id);
      if (!articulo) {
        reject(new Error(`El artículo ${id} no existe`));
      } else {
        resolve(articulo);
      }
    }, 300);
  });
}

function agruparVentas(listaVentas) {
  return listaVentas.reduce((acumulado, venta) => {
    acumulado[venta.idarticulo] = (acumulado[venta.idarticulo] || 0) + venta.cantidad;
    return acumulado;
  }, {});
}

// Versión callbacks: el contador permite saber cuándo llegaron todas las respuestas.
function reporteConCallbacks() {
  obtenerVentasCallback((err, listaVentas) => {
    if (err) return console.log(err.message);

    const totales = agruparVentas(listaVentas);
    const ids = Object.keys(totales).filter((id) => totales[id] > 3);
    const resultados = [];
    let respuestas = 0;

    if (ids.length === 0) {
      console.log('No hay artículos que cumplan la regla.');
      return;
    }

    ids.forEach((id) => {
      obtenerArticuloCallback(Number(id), (error, articulo) => {
        respuestas++;

        if (error) {
          resultados.push({ error: error.message, id });
        } else {
          resultados.push({ nombre: articulo.nombre, id, unidades: totales[id] });
        }

        if (respuestas === ids.length) {
          resultados
            .filter((item) => !item.error)
            .sort((a, b) => b.unidades - a.unidades)
            .forEach((item) => {
              console.log(`${item.nombre} (id=${item.id}) vendió ${item.unidades} unidades`);
            });
        }
      });
    });
  });
}

// Versión promesas: las consultas de artículos se ejecutan en paralelo.
async function reporteConPromesas() {
  try {
    const listaVentas = await obtenerVentas();
    const totales = agruparVentas(listaVentas);
    const ids = Object.keys(totales).filter((id) => totales[id] > 3);

    const resultados = await Promise.all(
      ids.map(async (id) => {
        const articulo = await obtenerArticulo(Number(id));
        return { ...articulo, unidades: totales[id] };
      })
    );

    resultados
      .sort((a, b) => b.unidades - a.unidades)
      .forEach((item) => {
        console.log(`${item.nombre} (id=${item.idarticulo}) vendió ${item.unidades} unidades`);
      });
  } catch (err) {
    console.log(err.message);
  }
}

// Versión async/await.
async function reporteAsync() {
  try {
    const listaVentas = await obtenerVentas();
    const totales = agruparVentas(listaVentas);
    const ids = Object.keys(totales).filter((id) => totales[id] > 3);

    const consultas = ids.map((id) => obtenerArticulo(Number(id)));
    const articulosEncontrados = await Promise.all(consultas);

    articulosEncontrados
      .map((articulo) => ({
        ...articulo,
        unidades: totales[articulo.idarticulo],
      }))
      .sort((a, b) => b.unidades - a.unidades)
      .forEach((item) => {
        console.log(`${item.nombre} (id=${item.idarticulo}) vendió ${item.unidades} unidades`);
      });
  } catch (err) {
    console.log(err.message);
  }
}

// Prueba con artículo 105 inexistente: Promise.allSettled conserva los válidos.
async function reporteConErrores() {
  const ventasPrueba = [
    ...ventas,
    { id: 11, idarticulo: 105, cantidad: 6, fecha: '2024-08-06' },
  ];

  const totales = agruparVentas(ventasPrueba);
  const ids = Object.keys(totales).filter((id) => totales[id] > 3);

  const resultados = await Promise.allSettled(
    ids.map(async (id) => {
      const articulo = await obtenerArticulo(Number(id));
      return { ...articulo, unidades: totales[id] };
    })
  );

  const validos = [];
  resultados.forEach((resultado, indice) => {
    if (resultado.status === 'fulfilled') {
      validos.push(resultado.value);
    } else {
      console.log(`No se encontró el artículo ${ids[indice]}`);
    }
  });

  validos
    .sort((a, b) => b.unidades - a.unidades)
    .forEach((item) => {
      console.log(`${item.nombre} (id=${item.idarticulo}) vendió ${item.unidades} unidades`);
    });
}

// ==================== CONSUMO DE APIS ====================

// Ejercicio 7: fetch no rechaza automáticamente ante HTTP 404/500.
async function obtenerJSON(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }
  return respuesta.json();
}

async function consultarCriptomonedas() {
  try {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,cop&include_24hr_change=true';
    const datos = await obtenerJSON(url);
    const monedaCOP = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
    const monedaUSD = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    console.log('Bitcoin:', monedaUSD.format(datos.bitcoin.usd), monedaCOP.format(datos.bitcoin.cop));
    console.log('Ethereum:', monedaUSD.format(datos.ethereum.usd), monedaCOP.format(datos.ethereum.cop));
    console.log('Cambio Bitcoin 24 h:', datos.bitcoin.usd_24h_change);
    console.log('Cambio Ethereum 24 h:', datos.ethereum.usd_24h_change);
  } catch (err) {
    console.log('No fue posible consultar los precios:', err.message);
  }
}

// Ejercicios 8 y 9 requieren claves personales. No se incluyen claves en el repositorio.
// Para ejecutarlos: npm install axios dotenv y guardar TMDB_API_KEY y NEWS_API_KEY en .env.
// Agregar .env a .gitignore antes de subir el proyecto.
async function buscarPelicula(nombre) {
  const axios = require('axios');
  require('dotenv').config();

  try {
    const respuesta = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        query: nombre,
        language: 'es-MX',
        api_key: process.env.TMDB_API_KEY,
      },
    });

    const pelicula = respuesta.data.results[0];
    if (!pelicula) {
      console.log('No se encontró la película');
      return;
    }

    console.log('Título:', pelicula.title);
    console.log('Año:', pelicula.release_date ? pelicula.release_date.slice(0, 4) : 'Sin fecha');
    console.log('Sinopsis:', pelicula.overview || 'Sin sinopsis');
  } catch (err) {
    console.log('Error al buscar película:', err.message);
  }
}

async function buscarNoticias(palabraClave) {
  const axios = require('axios');
  require('dotenv').config();

  const respuesta = await axios.get('https://newsapi.org/v2/everything', {
    params: {
      q: palabraClave,
      language: 'es',
      pageSize: 5,
      apiKey: process.env.NEWS_API_KEY,
    },
  });

  return respuesta.data;
}

async function consultarNoticias() {
  try {
    const [tecnologia, musica] = await Promise.all([
      buscarNoticias('tecnología'),
      buscarNoticias('música'),
    ]);

    console.log('Resultados tecnología:', tecnologia.totalResults);
    console.log('Resultados música:', musica.totalResults);
    const mayor = tecnologia.totalResults >= musica.totalResults ? 'tecnología' : 'música';
    console.log('Más resultados:', mayor);

    tecnologia.articles.forEach((noticia) => {
      console.log(noticia.title, noticia.source.name, noticia.publishedAt);
    });
  } catch (err) {
    console.log('Error al consultar noticias:', err.message);
  }
}

// Para ejecutar una prueba, descomenta UNA llamada:
// ejecutarDescarga();
// ejecutarDescargaPromesa();
// prepararPedido();
// revisarCocineros();
// prepararPedidoAsync();
// ejecutarDescargaAsync();
// reporteConCallbacks();
// reporteConPromesas();
// reporteAsync();
// reporteConErrores();
// consultarCriptomonedas();
// buscarPelicula('Interestelar');
// consultarNoticias();
