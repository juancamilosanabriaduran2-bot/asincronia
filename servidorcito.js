console.log('1. Pido la pizza');
console.log('2. Pago');
console.log('3. Me voy');
// Salida: 1, 2, 3. Sin sorpresas.
console.log('1. Pido la pizza');
setTimeout(() => {
    console.log('2. La pizza está lista');
}, 0); // ¡cero milisegundos!
    console.log('3. Mientras tanto, veo televisión');