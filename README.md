# Booky frontend

[Documentación del proyecto](./docs/doc.md)

### Despliegue

Lanzar antes el [backend](https://github.com/F0rno/DWES-Proyecto-6) y luego:

Crear el `.env`

```env
VITE_API_URL=http://localhost/api
VITE_TOKEN_KEY=Primado negativo
```

Ya puedes lanzar el `docker-compose.yml`, [http://localhost:4321/](http://localhost:4321/)

## [Video](https://drive.google.com/file/d/171x0KN6y_9P7u_kLv_XnhC87xfbUwPng/view?usp=drive_link)

## [Figma](https://www.figma.com/file/tJoWKNAPJVyoGHG60eB6kB/Proyecto-6?type=design&node-id=4%3A2&mode=design&t=hDb3nXUaGTQIkYum-1)

## [Informe de accesibilidad](./docs/doc.md#informe-de-accesibilidad)

### [Guía de estilos y prototipado](./docs/doc.md#guía-de-estilos-y-prototipado)

#### Estilos CSS

Los estilos están integrados en los componentes con la propiedad scoped, haciendo que estos solo se apliquen a los elementos HTML del propio componente. A pesar de esto, se sigue utilizando BEM para referirse a los estilos y mantener la semántica.

Para los estilos globales, que básicamente son reseteos de propiedades genéricas y variables. Se utiliza el archivo [style.css](https://github.com/F0rno/DWEC-Proyecto-6/blob/master/src/style.css). Se utiliza solo CSS puro.

#### Colores

* **Verde Claro:** #ECE3CE
* **Verde Medio:** #739072
* **Verde Oscuro:** #4F6F52
* **Verde Más Oscuro:** #3A4D39
* **Blanco:** #FFFFFF
* **Negro:** #000000
* **Rojo:** #FF0000
* **Amarillo:** #FFD700

#### Fuentes

* **Principal:** Roboto, sans-serif
* **Secundaria:** Oswald, sans-serif
* **Monoespaciada:** Roboto Mono, monospace

#### Estilos Generales

* Se utiliza Roboto como la fuente principal en peso 500 para el contenido general.
* Se utiliza Oswald como fuente secundaria para encabezados y elementos destacados.
* Se han definido variables de color para mantener la consistencia y facilitar los cambios en la paleta de colores en toda la aplicación (dark mode).
* Se ha aplicado un reset de estilos básico para eliminar márgenes, rellenos y bordes predeterminados, proporcionando una base limpia y consistente para los estilos adicionales.

#### Prototipado

La herramienta principal para crear la interfaz ha sido [Figma](https://www.figma.com/file/tJoWKNAPJVyoGHG60eB6kB/Proyecto-6?type=design&node-id=4%3A2&mode=design&t=L4coyayPd0K2P6I0-1).
