# Booky proyecto 6

### Estilos CSS

Los estilos están integrados en los componentes con la propiedad scoped, haciendo que estos solo se apliquen a los elementos HTML del propio componente. A pesar de esto, se sigue utilizando BEM para referirse a los estilos y mantener la semántica.

Para los estilos globales, que básicamente son reseteos de propiedades genéricas y variables. Se utiliza el archivo [style.css](https://github.com/F0rno/DWEC-Proyecto-6/blob/master/src/style.css). Se utiliza solo CSS puro.

### Lanzarlo

Lanzar antes el [backend](https://github.com/F0rno/DWES-Proyecto-6) y luego:

Crear el .env

```env
VITE_API_URL=http://localhost/api
VITE_TOKEN_KEY=Primado negativo
```

```bash
npm install && npm run build && npm run preview
```

### [Video](https://drive.google.com/file/d/1moYxvGH5LyO93XUzu_1FvbIgWmxfLjDV/view?usp=drive_link)
