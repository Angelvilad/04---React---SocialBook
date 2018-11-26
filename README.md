# SOCIALBOOK

## Descripción

Práctica front-end usando REACT para crear una UI de una red social, en la que los usuarios pueden subscribirse entre sí para poder leer los mensajes publicados en el perfil del autor.
Esto es, el usuario loggeado podrá:
- Dejar publicados mensajes en su página de perfil. Estos sólo podran ser vistos por otros usuarios si son amigos/seguidores.
- Solicitar seguir/ser amigo de otro usuario.
- Aceptar o denegar peticiones de seguimiento/amistad por parte de otros usuarios.

Para esta practica se ha utilizado entre otras:
- REACT para crear componentos de UI.
- REDUX para trabajar con un estado global en los componentes.
- STYLED-COMPONENTES para dar estilo (a los componentes de REACT, y a la pagina globalmente)

## Instalación y uso

Instalar dependecias: *npm install*

Iniciar la aplicacion en modo desarrollo: *npm start*

Crear un *build* para producción: *npm run build*

## Base de datos

Se utiliza, a modo de mockdata, una lista de usuarios proporcionada por el API: https://randomuser.me/api/?results=10&seed=abc

Tambien se hace uso del LocalStorage para los datos de los usuarios:
- friends: [], friendRequestReceived: [], friendRequestSended: [], articles: []

## Login

Podras logearte con cualquiera de los usuarios proporcionados por el API de usuarios (mockdata): https://randomuser.me/api/?results=10&seed=abc

En el objeto servido, propiedad results.login encontramos las propiedades username y password para poder logear

Ejemplo: (A fecha de hoy 11/2018, con la seed utilizada, estos son algunos de los usuarios provistos)
- angryostrich988 : r2d2
- angryduck156 : 0101
- orangepanda844 : wonderboy
....