# **DOGS** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

## **⚠️ IMPORTANTE**

Actualmente las versiónes en este proyecto son:

-  **Node**: 20.3.1
-  **NPM**: 9.7.2

**ACLARACIÓN:** las dependencias actuales del proyecto

-  **react**: 18.2.0
-  **react-dom**: 18.2.0
-  **react-router-dom**: 6.16.0
-  **redux**: 4.2.1
-  **react-redux**: 8.1.3

<br />

---
<br />

# **A continuación** se da a conocer los rubros que se siguieron para esta aplicación.

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API [**TheDogApi**](https://thedogapi.com/) y en la que se pueda:

-  Buscar perros.
-  Visualizar la información de los perros.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos perros.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

---

<br />

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
-  Sector en el que se vea un listado de cards con los perros. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /dogs`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Temperamentos.
   -  Peso.
-  Cuando se le hace click a una Card deberá redirigir al detalle de esa raza específica.
-  Botones/Opciones para **filtrar** por temperamentos, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente las razas de perros por orden alfabético y por peso.
-  Paginado: el listado de razas de perros se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 8 perros por página.

**⚠️ IMPORTANTE**: se deben mostrar tanto las razas de perros traidas desde la API como así también las de la base de datos, pero **NO** está permitido almacenar en la base de datos las razas de perros de la API. **Solamente se pueden guardar aquellas creadas desde el form**.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un perro:

-  ID.
-  Imagen.
-  Nombre.
-  Altura.
-  Peso.
-  Temperamentos.
-  Años de vida.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una nueva raza de perro.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Altura **(diferenciar entre altura mínima y máxima de la raza)**.
-  Peso **(diferenciar entre peso mínimo y máximo de la raza)**.
-  Años de vida.
-  Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
-  Botón para crear la nueva raza.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la raza no pueda contener números, o que el peso/altura mínimo no pueda ser mayor al máximo.

<br />
