# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

Luego de indicarte algunos detalles sobre el ***Cifrado César***, podrás familiarizarte mucho más con el modo de funcionamiento de **Secret Bank**. 

# Secret Banck

![Secret-Bank](https://c.files.bbci.co.uk/DAED/production/_98254065_quantum-encryption.jpg)

**Secret Bank** es una página web orientada unicamente para aquellas personas que confían sus ingresos y finanzas a distintas entidades bancarias, donde nuestra principal función es resguardar aquello por lo que trabajaste tanto con solo un click.

Este servicio se creó con el fin de resguardar y proteger tu esfuerzo, como son tu cuenta de ahorros, tarjetas de crédito, cuentas bancarias en general; donde ante cualquier imprevisto como lo es ser víctimas de un robo, hurto e incluso extravío, podrás con solo un **cick** bloquear toda información e ingresos anexados a tus cuentas bancarias.

**¿Cómo lo hago?**
Al ingresar a ***Secret Bank*** visualizar dos métodos de entrada que te permitirán ingresar datos que solo tú conoces y que sean sencillos de recordar. 






Esta clave secreta será la que bloqueará tus cuentas bancarias **de cualquier entidad** de forma inmediata, por lo tanto se inhabilitará el acceso hasta que los usuarios lo puedan regularizar llamando a su banco posteriormente e indicando la clave secreta.


Consideraciones adicionales, apta para personas mayores de 18 años, personas con nacionalidad peruana y dentro de la pea (población economicamente activa).

Secret Bank es un servicio gratuito, sin fines de lucro.

#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.





01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:

- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist

Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
