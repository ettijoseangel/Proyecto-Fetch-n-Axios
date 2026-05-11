# Proyecto Fetch y Axios - Módulo 5: Desarrollo Avanzado en JavaScript

> El método fetch es una herramienta esencial para cualquier desarrollador JavaScript que desee trabajar con datos externos. Ofrece una forma moderna, limpia y eficiente de realizar solicitudes HTTP. Aunque es importante manejar los errores correctamente y comprender sus limitaciones, fetch es una opción poderosa y flexible para cualquier proyecto web. Axios es una herramienta poderosa y flexible para manejar solicitudes HTTP en JavaScript. Su facilidad de uso y características avanzadas lo hacen ideal para una variedad de aplicaciones, desde consumo de APIs hasta sistemas complejos.
---

## 🔴 Objetivo del proyecto
El objetivo es que desarrolles las habilidades necesarias para realizar solicitudes HTTP y manejar datos obtenidos de APIs, utilizando tanto `fetch` como Axios. Además, practicarás el manejo de errores y la representación de datos en una interfaz gráfica sencilla.
---

## Problema: Consumo de APIs con Fetch y Axios
En este proyecto, crearás una aplicación web sencilla que permita obtener información de personajes de una API de tu elección (como la de Star Wars o Rick & Morty). La aplicación deberá mostrar los datos obtenidos en la interfaz de usuario y ofrecerá dos botones para realizar las mismas solicitudes, uno utilizando `fetch` y otro utilizando `axios`. Esto te permitirá comparar el uso de ambas herramientas.
---

## Instrucciones para resolver el problema:
1. Crea un proyecto nuevo con un archivo HTML y un archivo JavaScript.
2. Enlaza el archivo JavaScript al HTML y configura un entorno básico con un contenedor para los datos y dos botones.
    1. Las estructuras de HTML y JavaScript sugeridaa se encuentra en el siguiente enlace: https://gist.github.com/heladio-devf-mx/16af1b03cbf6adc855fe4352159f1633
3. Selecciona una API pública (por ejemplo, la API de Rick & Morty: https://rickandmortyapi.com/). Familiarízate con las rutas que usarás, como `/character` para obtener una lista de personajes (consulta la documentación en: https://rickandmortyapi.com/documentation/#get-all-characters).
4. Escribe una función que utilice `fetch` para obtener los datos de la API y los muestre en el `div` con id `data-container`.
5. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.
6. Crea una función para mostrar los personajes en el contenedor `data-container`.
7. Por ejemplo, podrías mostrar el nombre y la imagen de cada personaje.
8. Toma los archivos con código como base para tu solución, sigue las recomendaciones (pistas) y complementa el código faltante.