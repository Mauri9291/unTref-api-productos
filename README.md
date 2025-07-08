
-----

# **Trabajo Integrador: API REST de Productos 🛍️**

API RESTful desarrollada como proyecto final para el curso de Backend de UNTREF. El objetivo es gestionar un catálogo de productos, permitiendo operaciones de creación, lectura, actualización y eliminación (CRUD), así como búsquedas especializadas.

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

-----

## **Instalación y Puesta en Marcha**

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### **1. Prerrequisitos**

Asegúrate de tener instalado lo siguiente:

  * [Node.js](https://nodejs.org/es/) (versión LTS recomendada)
  * [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### **2. Clonar el Repositorio**

```bash
git clone https://github.com/[TU_USUARIO_DE_GITHUB]/[EL_NOMBRE_DE_TU_REPOSITORIO].git
```

### **3. Instalar Dependencias**

Navega a la carpeta del proyecto e instala las dependencias de `npm`.

```bash
cd [EL_NOMBRE_DE_TU_REPOSITORIO]
npm install
```

### **4. Configurar Variables de Entorno**

1.  Crea un archivo llamado `.env` en la raíz del proyecto.
2.  Añade la siguiente línea para configurar la conexión a tu base de datos local:
    ```
    MONGO_URI=mongodb://127.0.0.1:27017/catalogoDB
    ```

### **5. Poblar la Base de Datos**

Ejecuta el siguiente script para cargar el catálogo de productos inicial en tu base de datos. Este comando borrará los datos anteriores para evitar duplicados.

*(Nota: para cambiar el set de datos, modifica el nombre del archivo dentro de `seed.js`)*

```bash
node seed.js
```

### **6. Iniciar el Servidor**

Ejecuta el siguiente comando para iniciar la aplicación. El servidor se iniciará en `http://localhost:3000`.

```bash
node app.js
```

-----

## **Documentación de la API**

La API cuenta con los siguientes endpoints para gestionar los productos.

### **CRUD Básico**

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/productos` | Obtiene la lista completa de todos los productos. |
| `GET` | `/productos/:codigo` | Obtiene un único producto por su código único. |
| `POST` | `/productos` | Crea un nuevo producto. (Requiere un body JSON). |
| `PUT` | `/productos/:codigo` | Actualiza un producto existente por su código. |
| `DELETE` | `/productos/:codigo` | Elimina un producto existente por su código. |

### **Endpoints Adicionales**

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/productos/buscar` | Busca productos cuyo nombre coincida con el término enviado por query param (`?q=...`). |
| `GET` | `/productos/categoria/:nombre` | Filtra los productos que pertenecen a una categoría específica. |
| `GET` | `/productos/precio/:min-:max` | Filtra los productos que se encuentran en un rango de precios. |
| `POST` | `/productos/masivo` | Permite crear múltiples productos enviando un array de objetos en el body. |

### **Ejemplos de Body para POST / PUT**

```json
{
  "codigo": "ABC-123",
  "nombre": "Producto de Ejemplo",
  "precio": 99.99,
  "categoria": ["ejemplo", "nuevo"]
}
```

-----

## **Probando la API**

Para facilitar las pruebas, este proyecto incluye un archivo `api.http`. Puedes usar la extensión **[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)** para Visual Studio Code.

Una vez instalada, abre el archivo `api.http` y haz clic en `Send Request` sobre cada petición para probar los endpoints directamente desde el editor.

-----