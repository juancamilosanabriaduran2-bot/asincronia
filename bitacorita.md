# PARTE 1

## Antes de ejecutarlo, escribe tu predicción. La salida reales 1, 3, 2, aunque la espera sea de cero milisegundos.
 El orden es así porque setTimeout lo pone en una cola de espera, mientras las otras cosas se cumplen.

## ¿Qué se imprime si cambias el 0 por 2000? ¿Cambia el orden?
No cambia el orden, simplemente el programa espera más tiempo. En este caso, el 2000 son 2 segundos.

## Menciona dos operaciones de una aplicación real (por ejemplo, una app de domicilios) que deberían ser asíncronas y explica por qué.
Supongo que DiDi y Rappi, porque son aplicaciones que necesitas colas de espera, para manejar más cómodamente la administración de pedidos.

# PARTE 2

## 1. ¿Qué pasa si en dividir quitas el return después de llamar al callback con el error? Pruébalo.
No arroja el resultado en la consola

## 2. ¿Por qué conviene que el error sea el primer parámetro y no el segundo?
Para que funcione como filtros de errores, o sea que detecte primero el error, y no después, cuando ya haya sido ejecutado

# PARTE 3

## 1. En el ejemplo de Promise.all, ¿por qué el tiempo total es de unos 2 segundos?
Porque como el tiempo en este caso no es acumulativo, .timeEnd toma el tiempo que más dure de las promesas ingresadas, en este caso 2 segundos.

## 2. ¿Qué pasa si en una cadena olvidas el return dentro de un .then()? Escribe un ejemplo y observa qué recibe el siguiente .then().
El siguiente valor de la cadena recibirá un Undefined. Ejemplo:
// Simulamos una promesa que obtiene el nombre de un usuario
Promise.resolve("Carlos")
  .then((nombre) => {
    console.log("Primer .then:", nombre); 
    // ERROR: Olvidamos el 'return' aquí
    // El código procesa algo, pero no devuelve nada
    let saludo = `Hola, ${nombre}`;
  })
  .then((resultadoSiguiente) => {
    // Observamos qué recibe este .then
    console.log("Segundo .then:", resultadoSiguiente); 
  });

# PARTE 4

