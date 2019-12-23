[2]: https://github.com/yonicb
[1]: https://github.com/yonicb/wavescrollbar

<p align="center">
  <a href="https://github.com/yonicb/wavescrollbar" target="blank"><img src="https://i.ibb.co/0KhDcfW/ezgif-1-368d1a644eb7.png" width="120" alt="Wavescrollbar Logo" /></a>
</p>

<p align="center">
🚀 Wavescrollbar 🌐 es una libreria de javascript, que agrega barra de progreso moderno en la parte superior.
</p>

<p align="center" style="max-width: 450px; margin: auto;">
   <a href="https://github.com/yonicb/wavescrollbar"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
   <a href="https://www.npmjs.com/wavescrollbar" target="_blank">
   <img src="https://img.shields.io/npm/v/wavescrollbar" alt="NPM Version" /></a>
   <a href="https://www.npmjs.com/wavescrollbar" target="_blank">
   <img src="https://img.shields.io/npm/l/wavescrollbar" alt="Package License" /></a>
   <a href="https://www.npmjs.com/wavescrollbar" target="_blank">
   <img src="https://img.shields.io/npm/dm/wavescrollbar" alt="NPM Downloads" /></a>
   <a href="https://github.com/yonicb/wavescrollbar" target="_blank">
   <img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
   <a href="https://github.com/yonicb/wavescrollbar"><img src="https://img.shields.io/badge/Github%20Page-Wavescrollbar-yellow?style=flat-square&logo=github" /></a>
   <a href="https://github.com/yonicb"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
   <a href="https://twitter.com/yonicb" target="_blank">
   <img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>
</p>

## [🌍 English guide](README.md)

## 🌐 Descripcion

<p>
Wavescrollbar es una libreria para crear una barra de scroll moderno, eficientes y escalables. Utiliza JavaScript moderno, está construido con TypeScript (conserva la compatibilidad con JavaScript puro) y combina elementos de OOP (Programación Orientada a Objetos).
</p>

<p>Debajo del capó, Wavescrollbar utiliza javascript, pero también proporciona compatibilidad con una amplia gama de otras bibliotecas, como p. Ej. ReactJs, Vuejs, Angular, lo que permite un fácil uso de los innumerables complementos de terceros que están disponibles.</p>

## 📝 Filosofía

<p>Wavescrollbar tiene como objetivo proporcionar una arquitectura de aplicaciones lista para usar que permita la creación sin esfuerzo de aplicaciones con barra de progreso en la parte superior, y altamente comprobables, escalables, poco acopladas y de fácil mantenimiento.</p>


## 📦 Instalacion

Para comenzar a utilizar Wavescrollbar nesecita Instalarlo con en gestor de paquete npm o yarn, como se muestra en la siguiente seccion o descargarlo directamente!.

``` ts
// Para instalar mediante npm
npm install wavescrollbar -S

// Para instalar mediante yarn
yarn add wavescrollbar
```

<!-- ## Getting started -->
## ▶️ Empezando

<p>
<!-- Como lo habia mencionado anteriormente, Wavescroll tambien esta disponible para las biblitecas Reactjs, Vuejs y Angular. -->
</p>

### HTML
``` html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Wavescrollbar</title>
   <link rel="stylesheet" href="css/wavescrollbar.css">
</head>
<body>
   <wavescrollbar>
   </wavescrollbar>

   <script src="js/wavescrollbar.js"></script>
   <script>
      var wavescrollbar = new Wavescrollbar()
   </script>
</body>
</html>
```

Agregue el fichero de javascript y css para que funcione correctamente !

``` html
<!-- Importa el fichero de css -->
<link rel="stylesheet" href="css/wavescrollbar.css">

<!-- Importa el fichero de javascript -->
<script src="js/wavescrollbar.js"></script>
```

## 📝 Caracteristicas

| N°  | Metodo                 | Parametro |
| --- | ---------------------- | --------- |
| 1   | setAnimation           | None      |
| 2   | setContainerBackground | color     |
| 3   | setGradient            | options   |
| 4   | setBackground          | color     |
| 5   | setTransition          | options   |
| 6   | setHeight              | value     |

#### 📚 Metodo setAnimation
Ejemplo:
```js
// Instanciamos el metodo de animacion
wavescrollbar.setAnimation() // No nesecita paramentros.
```

#### 📚 Metodo setContainerBackground
Ejemplo:
``` js
/**
 * @param color
 * */
// 
// Default-> #eeeeee
const color = "#eafbea"
wavescrollbar.setContainerBackground(color)
```

#### 📚 Metodo setGradient
Ejemplo:
```js
/**
 * @param options: object
 * */

const options = {
   // default-> 90deg
   angle: "45deg", // 0deg - 360deg
   // Default-> ["#11998e", "#38ef7d"]
   colors: [
      "#11998e",
      "#38ef7d",
      "red",
      "blue"
   ]
}
wavescrollbar.setGradient(options)
```

#### 📚 Metodo setBackground
Ejemplo:
```js
/**
 * @param color
 * */
// Default-> pink
const color = "red"
wavescrollbar.setBackground(color)
```

#### 📚 Metodo setTransition
Ejemplo:
```js
/**
 * @param options
 * */

const options = {
   // Default-> .2s
   duration: "100ms",
   // Default-> 0s
   delay: '0s',
   // Default-> linear
   timing: "ease-in-out" // "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out"
}
wavescrollbar.setTransition(options)
```

#### 📚 Metodo setHeight
Ejemplo:
```js
/**
 * @param value
 * */
// Default-> 5px
const height = "10px"
wavescrollbar.setHeight(height)
```

## ⭐ Apoyo

Wavescrollbar es un proyecto de código abierto con licencia del [MIT](LICENSE). Puede crecer gracias a los patrocinadores y el apoyo de los increíbles patrocinadores. Si desea unirse a ellos, [contacteme aqui](mailto:helloyonicb@gmail.com).

## 🎩 Contribuidores

<p>

[<img src="https://avatars0.githubusercontent.com/u/58490737?s=400&v=4" alt="Yoni Stack" width="50" style="background: #fff; padding: 5px; border-radius: 50%;" />](https://github.com/yonicb)
[<img src="https://avatars0.githubusercontent.com/u/57115324?s=460&v=4" alt="Yoni Stack" width="50" style="background: #fff; padding: 5px; border-radius: 50%;" />](https://github.com/yonicalsin)

</p>

## 🎩 Mantente en contacto

* Autor [Yoni Calsin](https://github.com/yonicb)
* Twitter [Yoni Calsin](https://twitter.com/yonicalsin)

## 📜 Licencia

Wavescrollbar tiene [licencia MIT](LICENSE).

[2]: https://github.com/yonicb
[1]: https://github.com/yonicb/wavescrollbar