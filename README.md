# Proyecto de API REST para Gestión de Productos

Este es un proyecto de ejemplo de una **API REST** utilizando **Spring Boot** 
que permite gestionar productos (crear, leer, actualizar y eliminar). Está documentado con **Swagger UI** para 
facilitar la interacción con la API y proporcionar una interfaz visual para las pruebas.


### Descripción de las carpetas y archivos:

- **`controller/`**: Contiene los controladores REST, donde se definen los endpoints de la API.
- **`model/`**: Define las entidades de la base de datos (en este caso, `Producto`).
- **`repository/`**: Define los repositorios JPA para interactuar con la base de datos.
- **`service/`**: Contiene la lógica de negocio que interactúa con los repositorios.
- **`config/`**: Configura Swagger para generar la documentación de la API.

## Requisitos

- JDK 11 o superior
- Maven 3.x o superior
- Una base de datos mySQL


### Clonar el Repositorio

Para empezar, clona este repositorio en tu máquina local:
git clone https://github.com/Lidiagarmu/servicio-web-REST-productos-app.git



 ## Despliegue

1. Arranca servidor Apache con XAMPP
2. Run file: DemoApplication.java
3. Abrir en navegador: localhost:8080/productos