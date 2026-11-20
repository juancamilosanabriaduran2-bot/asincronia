# PARTE 1

## 1. Predicción del ejemplo con setTimeout
El orden es 1, 3, 2. Aunque el tiempo sea cero, la función de setTimeout se ejecuta después de que termine el código síncrono actual.

## 2. ¿Qué pasa si cambias 0 por 2000? ¿Cambia el orden?
No cambia el orden relativo: primero se imprimen 1 y 3. El mensaje 2 aparece aproximadamente dos segundos después, porque el temporizador programa la función para más adelante.

## 3. Dos operaciones asíncronas en una app de domicilios
- Consultar restaurantes y sus menús en el servidor: la aplicación debe seguir respondiendo mientras espera la información.
- Consultar la ubicación del repartidor: la posición llega periódicamente y no debe congelar la pantalla ni impedir que el usuario navegue.

# PARTE 2

## 1. ¿Qué pasa si en dividir quitas el return después de llamar al callback con el error?
La función no se detiene después de informar el error. Continúa y ejecuta también `callback(null, a / b)`, por lo que el callback se llama dos veces: primero con el error y después con un resultado. El `return` evita esa segunda llamada.

## 2. ¿Por qué conviene que el error sea el primer parámetro?
Porque quien recibe el callback puede revisar primero si hubo un error y detener el flujo antes de utilizar el resultado. Es una convención uniforme: `callback(error, resultado)`; si todo sale bien, el primer argumento es `null`.

# PARTE 3

## 1. ¿Por qué Promise.all tarda unos 2 segundos?
Las tres promesas empiezan prácticamente al mismo tiempo. El conjunto termina cuando termina la más lenta: 2 segundos. No se suman 2 + 1 + 1.5. El arreglo conserva el orden original de las promesas, no el orden en que terminan.

## 2. ¿Qué pasa si olvidas return dentro de un then?
El callback del `.then()` devuelve `undefined` de forma implícita. Por eso, el siguiente `.then()` recibe `undefined` y no espera ninguna promesa que se haya creado pero no retornado.

```js
Promise.resolve("Carlos")
  .then((nombre) => {
    const saludo = `Hola, ${nombre}`;
    // Falta return saludo;
  })
  .then((resultado) => {
    console.log(resultado); // undefined
  });
```

# PARTE 4

## 1. ¿Por qué console.log(saludar()) no imprime “Hola”?
Porque una función declarada con `async` siempre devuelve una promesa. El valor `"Hola"` es el resultado futuro de esa promesa, no el objeto que se imprime directamente. Para obtenerlo se usa `.then()` o `await` dentro de otra función `async`.

## 2. Perfil, clima y noticias: secuencia o paralelo
Primero se consulta el perfil. Cuando llega, se obtiene la ciudad del usuario y entonces se consulta el clima: esas operaciones van en secuencia porque la segunda depende del resultado de la primera. Las noticias no dependen del perfil ni de la ciudad, así que pueden solicitarse en paralelo con la consulta del perfil mediante `Promise.all()`.

# CASO DE ESTUDIO: EMPLEADOS Y SALARIOS

## 1. ¿En qué orden salen los tres mensajes y por qué?
Si se invoca `mostrarInformacion(1)`, luego `mostrarInformacion(3)` y después `mostrarInformacion(4)` sin usar `await`, las tres operaciones empiezan sin esperar a las anteriores. En el ejemplo, las consultas tienen la misma demora, por lo que normalmente se muestran en el orden de inicio; no obstante, el orden no está garantizado si las demoras son distintas. Cada llamada maneja su propia promesa.

## 2. ¿Cómo consultar los tres en orden?
Hay que esperar cada llamada antes de iniciar la siguiente:

```js
const ejecutarPruebas = async () => {
  await mostrarInformacion(1);
  await mostrarInformacion(2);
  await mostrarInformacion(3);
};

ejecutarPruebas();
```

## 3. ¿En cuál versión fue más fácil agregar el cargo?
En async/await. Puedo guardar cada resultado en una variable local y utilizarlo en el siguiente paso. Con callbacks hay que anidar otra función y con promesas hay que retornar correctamente cada promesa y conservar los datos necesarios.

# EJERCICIOS POR NIVEL

# NIVEL 1: CALLBACKS

## Ejercicio 1. Saludar después de un tiempo
La función espera la cantidad de segundos indicada y entrega el nombre mediante el callback. Si el tiempo es negativo, informa un error con la convención error primero.

## Ejercicio 2. Preparar un desayuno
La preparación de panqueques tarda tres segundos. Cuando termina, se llama al callback para servirlos. En el reto, la preparación del jugo se inicia dentro del callback que sirve los panqueques; así se garantiza que no comience antes.

## Ejercicio 3. Descargar, procesar y notificar
La solución tiene tres niveles de callbacks anidados y tres comprobaciones `if (err)`: una para la descarga, otra para el procesamiento y otra para el envío del correo. Si falla la descarga, el `return` detiene el flujo y no se ejecutan los pasos siguientes.

# NIVEL 2: PROMESAS

## Ejercicio 4. Reescribir con promesas
En la versión con promesas ya no se revisa `if (err)` en cada función consumidora. Los fallos se propagan como rechazos y se manejan en un único `.catch()` al final de la cadena. El `.finally()` se ejecuta tanto si la operación se cumple como si se rechaza.

## Ejercicio 5. Pedido en el restaurante
Los tiempos por cocinero son:
- Laura: 1500 + 500 = 2000 ms.
- Andrés: 1000 ms.
- Sofía: 1200 + 800 = 2000 ms.

El pedido completo tarda aproximadamente 2000 ms, porque los tres cocineros trabajan en paralelo y el pedido espera al más lento. Si una preparación falla, `Promise.all()` rechaza el conjunto; `Promise.allSettled()` permite revisar el resultado individual de cada cocinero y mostrar cuáles terminaron y cuáles fallaron.

# NIVEL 3: ASYNC/AWAIT

## Ejercicio 6. ¿Por qué no usar forEach para esperar cada producto?
`forEach` no espera las promesas que devuelve una función `async`. Por eso, el mensaje final podría aparecer antes de que terminen las consultas. `for...of` con `await` permite hacerlas una por una; `map()` junto con `Promise.all()` permite iniciarlas en paralelo.

# RETO INTEGRADOR: VENTAS Y ARTÍCULOS

## 1. ¿Cómo supiste que ya habían llegado todos los artículos con callbacks? ¿Qué hace Promise.all?
Con callbacks se necesita un contador: cada respuesta aumenta el contador y el reporte se imprime cuando el número de respuestas coincide con el número de artículos consultados. `Promise.all()` realiza esa coordinación: espera a que todas las promesas se cumplan y entrega sus resultados en un arreglo.

## 2. ¿Cuánto tarda en secuencia y en paralelo?
Hay cuatro artículos distintos (101, 102, 103 y 104). Cada consulta tarda 300 ms. En secuencia, el tiempo de las consultas es aproximadamente 4 × 300 = 1200 ms. En paralelo, tarda aproximadamente 300 ms, porque las cuatro consultas comienzan juntas. A ambos casos se suma la consulta inicial de ventas, que tarda 500 ms: el total aproximado sería 1700 ms en secuencia y 800 ms en paralelo.

## 3. ¿En qué se parece a una relación 1 a N en MongoDB?
Un artículo puede estar relacionado con muchas ventas, mientras cada venta referencia un artículo mediante `idarticulo`. Primero se obtienen las ventas y luego se agrupan por ese identificador para calcular las unidades. Después se consultan los documentos de artículos correspondientes, de forma parecida a resolver una relación mediante referencias y consultas adicionales.

## Prueba de error con Promise.allSettled
Si se agrega una venta del artículo 105, la suma de unidades incluye ese artículo, pero la consulta de su documento falla porque no existe. Con `Promise.all()` el rechazo hace fallar el reporte completo. Con `Promise.allSettled()` se pueden conservar los artículos válidos e imprimir “No se encontró el artículo 105” para el que falló.

# CONSUMO DE APIS REALES

## Ejercicio 7. Bitcoin
La petición se realiza con `fetch`. Se debe comprobar `respuesta.ok` antes de convertir el cuerpo a JSON, y luego mostrar los valores USD y COP usando `Intl.NumberFormat`. El precio es variable, así que no existe una salida numérica fija.

## Ejercicio 8. Películas con TMDB
Se envía el nombre de la película y el idioma a la API. Si la lista `results` está vacía, se muestra “No se encontró la película”. Eso no es un fallo de red: la petición pudo completarse correctamente y simplemente no hubo coincidencias. La clave debe guardarse fuera del código, por ejemplo en una variable de entorno.

## Ejercicio 9. Noticias con NewsAPI
La función recibe una palabra clave y consulta el endpoint con idioma español y cinco resultados. Para dos búsquedas independientes se usa `Promise.all()`; después se comparan los valores `totalResults`. La clave debe permanecer en una variable de entorno y no subirse al repositorio.

## Ejercicio 10. MercadoLibre
Es opcional. Antes de desarrollarlo hay que comprobar en la documentación oficial si el endpoint de búsqueda de Colombia permite consultas sin token. No conviene asumir que la autenticación sigue igual.

## 1. ¿Por qué fetch revisa respuesta.ok y axios no lo necesita?
`fetch` resuelve la promesa incluso cuando el servidor responde con estados HTTP como 404 o 500; por eso hay que revisar `respuesta.ok` y lanzar un error manualmente. Axios, en su configuración predeterminada, rechaza la promesa ante respuestas HTTP fuera del rango 2xx.

## 2. Diferencia entre petición fallida y petición sin resultados
Una petición fallida ocurre cuando hay un problema de red, autenticación o respuesta HTTP no exitosa. Una petición sin resultados puede ser una respuesta HTTP exitosa cuyo arreglo de resultados está vacío. El código debe manejar por separado los errores de la petición y la ausencia de coincidencias.

---

# NOTAS SOBRE EL DESARROLLO

Las respuestas anteriores se redactaron conservando un estilo directo, con explicaciones breves y ejemplos cuando ayudan a demostrar el razonamiento. Se ajustaron algunas afirmaciones para que describan con precisión el comportamiento de JavaScript. Las salidas de APIs externas dependen de la respuesta del servicio y de las credenciales disponibles.
