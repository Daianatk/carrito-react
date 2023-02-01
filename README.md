# Carrito de Compras en React

![image](public/React_App.gif)

##### E-commerce
# _Tienda Libre_ 

### Instalación del Proyecto:

1. Debe clonar el repositorio utlizando git clone https://github.com/Daianatk/carrito-react
2. Luego deberá instalar todas las dependencias del proyecto, para eso deberá ejecutar npm install (también puede utilizar npm i)
3. Por último, puede ejecutar el proyecto y realizar las pruebas utilizando npm start. Si no desea instalar el proyecto, puede utilizarlo ingresando al siguiente enlace: https://celebrated-souffle-ad56f0.netlify.app/

## Funcionalidad del Proyecto: 

### NavBar:

- Puedes navegar a las distintas secciones en forma SPA.
- Secciones a mostrar: Home / Categoria / Cart
- Muestra el carrito de compras con la cantidad de productos cuando este tenga algun producto dentro.

### Sección Home:

- Muestra todos los productos en venta.
- Muestra el filtrado de productos por separado.

### Detalle del Producto:

- Al ingresar al detalle del producto se muestra:
  - Nombre
  - Precio
  - Stock
  - Categoria.
- Puede volver al Home a seguir comprando.
  
### CartShop:

- En el CartSop se muestra los productos agregados al carrito para visualizar la cantidad y el precio total de lo que se va comprar.
- Se puede eliminar los productos.
- Se puede volver a la pantalla de Home.
- Se puede limpiar el Carrito por completo.
- Finalizar la compra de productos.
- El cliente visualiza su número de compra.

### CheckOut:

- Pide llenar un formulario con los datos para el envio de la compra.
- El formulario no se puede enviar si no estan todos los campos llenos.
- Al finalizar la compra el Carrito queda vacio y puedes volver al Home a seguir comprando.

## Estructura de firebase
En firebase se tiene una estructura de los datos de la siguiente forma:

### Colecciones
Productos
~~~
products (id) {
    categoria,
    foto,  
    name, 
    price,
    stock
}
~~~
Pedidos
~~~
orders (id) {
    buyer {
        email,
        name, 
        phone
    }, 
    ítems [
        {
            id,
            name, 
            price
        }
    ],
    total
}
~~~
## Dependencias
Las dependencias usadas en este proyecto son las siguientes:
|Dependencia |Versión|
| ------ | ------ |
|firebase| 9.15.0|
|react| 17.0.2|
|react-dom |17.0.2|
|react-router-dom |6.4.4|

## Demo Online
Para ver el demo visite el siguiente enlace: [Tienda Libre]( https://celebrated-souffle-ad56f0.netlify.app/)

## Prueba Local
- Para probarlo en local
- Descargue el repositorio como archivo zip
- Descomprímalo e una ubicación conveniente
- Ábralo con Visual Studio Code
- Ejecute en la carpeta del proyecto el comando *npm install*
- Por último, ejecute el comando *npm start*
