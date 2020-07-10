Proyecto de estudio de React
.

## ¿Qué es TypeScript?

TypeScript es un lenguaje para JavaScript que agrega agrega tipos, clases y módulos opcionales a JavaScript. TypeScript compila a JavaScript legible, basado en estándares.

## Instalación de TypeScript
### Al crear un proyecto nuevo

    // con npm
    npx create-react-app my-app --typescript

    // con yarn
    yarn create react-app my-app --typescript

### Al agregar TS a un proyecto creado con CRA

    // con npm
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest

    // con yarn 
    yarn add typescript @types/node @types/react @types/react-dom @types/jest



### Tipos de elementos JSX que TS distingue

Se distinguen dos tipos de elementos JSX: los intrínsecos y los creados por el desarrollador (value-based). 

Los elementos intrínsecos estan definidos en la definición de tipos de React, mediante:

    interface IntrinsicElements

Este tipo de elementos no es necesario realizar el *import* para que esten disponibles. Algunos ejemplos son:
 - div
 - span
 - a
 - input
 - main
 - etc

Además de los elementos definidos en forma "intrínseca" hay algunos atributos que se definen de esta misma manera, por ejemplo:
  - key

Cuando veamos un error que diga algo de "intrinsec elements" o props, en realidad probablemente quiera decir que el elemento no existe dentro de los importados ni en los intrínsecos, o que la propiedad no existe ni en las declaradas ni en las intrínsecas
