
-----

# **Trabajo Integrador: API REST de Productos 🛍️**

API RESTful desarrollada como trabajo integrador para el curso de Backend de UNTREF. El objetivo es gestionar un catálogo de productos, permitiendo operaciones de creación, lectura, actualización y eliminación (CRUD), así como búsquedas especializadas.

## **Características Principales**

* **Gestión de Productos:** Implementación de un CRUD completo para los productos.
* **Búsquedas Avanzadas:** Endpoints especializados para buscar productos por nombre, filtrar por categoría y rango de precios.
* **Carga Masiva:** Capacidad de agregar múltiples productos en una sola petición.
* **Base de Datos NoSQL:** Uso de MongoDB con Mongoose para una gestión de datos flexible.
* **Variables de Entorno:** Configuración segura de la base de datos utilizando archivos `.env`.

## **Tecnologías Utilizadas**

* **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
* **Express.js:** Framework para la construcción de la API REST.
* **MongoDB:** Base de datos NoSQL orientada a documentos.
* **Mongoose:** ODM (Object Data Modeling) para modelar y conectarse a MongoDB.
* **Dotenv:** Para la gestión de variables de entorno.

---

## **Instalación y Puesta en Marcha**

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### **1. Prerrequisitos**

Asegúrate de tener instalado lo siguiente:

* [Node.js](https://nodejs.org/es/) (versión LTS recomendada)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### **2. Clonar el Repositorio**

```bash
git clone https://github.com/Mauri9291/unTref-api-productos.git
```

### **3. Instalar Dependencias**

Navega a la carpeta del proyecto e instala las dependencias de `npm`.

```bash
cd unTref-api-productos
npm install
```

### **4. Configurar Variables de Entorno**

1. Crea un archivo llamado `.env` en la raíz del proyecto.
2. Añade la siguiente línea para configurar la conexión a tu base de datos local:

   ```
   MONGO_URI=mongodb://127.0.0.1:27017/catalogoDB
   ```

### **5. Poblar la Base de Datos**

Este proyecto utiliza como datos iniciales el archivo:

```
/data/productos-supermercado.json
```

Este archivo contiene un catálogo de productos de supermercado con la siguiente estructura de campos:

* `codigo` (string): Identificador único del producto.
* `nombre` (string): Nombre del producto.
* `precio` (number): Precio del producto.
* `categoria` (array de strings): Categorías a las que pertenece el producto.

Para cargar estos datos en la base de datos, ejecuta el siguiente comando:

```bash
node seed.js
```

Este comando borra los datos anteriores de la colección y luego inserta los productos del archivo `/data/productos-supermercado.json` en la base de datos MongoDB especificada en tu archivo `.env`.

> 💡 *Si deseas utilizar otro conjunto de datos de la carpeta `/data`, modifica la ruta al archivo en el script `seed.js` antes de ejecutar el comando.*

### **6. Iniciar el Servidor**

Ejecuta el siguiente comando para iniciar la aplicación. El servidor se iniciará en `http://localhost:3000`.

```bash
node app.js
```

---

## **Documentación de la API**

La API cuenta con los siguientes endpoints para gestionar los productos.

### **CRUD Básico**

| Método   | Endpoint             | Descripción                                       |
| :------- | :------------------- | :------------------------------------------------ |
| `GET`    | `/productos`         | Obtiene la lista completa de todos los productos. |
| `GET`    | `/productos/:codigo` | Obtiene un único producto por su código único.    |
| `POST`   | `/productos`         | Crea un nuevo producto. (Requiere un body JSON).  |
| `PUT`    | `/productos/:codigo` | Actualiza un producto existente por su código.    |
| `DELETE` | `/productos/:codigo` | Elimina un producto existente por su código.      |

### **Endpoints Adicionales**

| Método | Endpoint                       | Descripción                                                                             |
| :----- | :----------------------------- | :-------------------------------------------------------------------------------------- |
| `GET`  | `/productos/buscar`            | Busca productos cuyo nombre coincida con el término enviado por query param (`?q=...`). |
| `GET`  | `/productos/categoria/:nombre` | Filtra los productos que pertenecen a una categoría específica.                         |
| `GET`  | `/productos/precio/:min-:max`  | Filtra los productos que se encuentran en un rango de precios.                          |
| `POST` | `/productos/masivo`            | Permite crear múltiples productos enviando un array de objetos en el body.              |

### **Ejemplos de Body para POST / PUT**

```json
{
  "codigo": "ABC-123",
  "nombre": "Producto de Ejemplo",
  "precio": 99.99,
  "categoria": ["ejemplo", "nuevo"]
}
```

---

## **Probando la API**

Para facilitar las pruebas, este proyecto incluye un archivo `api.http`. Puedes usar la extensión **[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)** para Visual Studio Code.

Una vez instalada, abre el archivo `api.http` y haz clic en `Send Request` sobre cada petición para probar los endpoints directamente desde el editor.

---
