# PARTE 1

## 1. Antes de ejecutarlo, escribe tu predicción. La salida reales 1, 3, 2, aunque la espera sea de cero milisegundos.
 El orden es así porque setTimeout lo pone en una cola de espera, mientras las otras cosas se cumplen.

## 2. ¿Qué se imprime si cambias el 0 por 2000? ¿Cambia el orden?
No cambia el orden, simplemente el programa espera más tiempo. En este caso, el 2000 son 2 segundos.

## 3. Menciona dos operaciones de una aplicación real (por ejemplo, una app de domicilios) que deberían ser asíncronas y explica por qué.
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

## 1. ¿Por qué console.log(saludar()) no imprime “Hola”?
Porque él retorna Promise, no texto.

## 2. Tienes que traer el perfil de un usuario y, con su ciudad, el clima de esa ciudad. Además, traer las noticias del día. ¿Qué tareas van en secuencia y cuáles en paralelo?
- Secuencia: perfil del usuario, ciudad, clima.
- Paralelo: noticias del día. 

# Caso de estudio: empleados y salarios en tres versiones

## 1. En la versión 3, ¿en qué orden salen los tres mensajes? ¿Por qué no esperan uno al otro?
En la versión 3, el resultado el empleado de id 1, luego el 3 y uno inexistente porque no existe el id 4. Como funciona por llamado, el orden depende de lo que se llame.

## 2. Si quisieras que los tres se consultaran en orden, uno después del otro, ¿cómo lo escribirías?
mostrarInformacion(1); 
mostrarInformacion(2); 
mostrarInformacion(3); 

## 3. Agrega a los datos una tabla cargos (id, nombre del cargo, idempleado) y una función obtenerCargo. Modifica las tres versiones para mostrar: “El empleado Miguel, Instructor, gana 1000 dólares”. ¿En cuál de las tres fue más fácil?
Fue infinitamente más fácil en Async/Await (Versión 3). Porque No tuve que lidiar con la pirámide de la muerte ni anidamientos complejos (Callbacks), ni tampoco tuve que crear variables globales/externas incómodas para recordar los pasos anteriores (Promesas). Simplemente añadimos una línea de código limpia (const cargo = await obtenerCargo(empleado);) y la variable quedó disponible directamente en el ámbito local para usarla en el console.log.