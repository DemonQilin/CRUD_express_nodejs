# CRUD TO DO LIST
Este proyecto fue realizado como ejercicio de práctica de la construcción de REST API con express y Nodejs.

Cada tarea debe seguir la siguiente estructura:
```javascript
{
    "title": "Titulo de la tarea",
    "description": "Descripción de la tarea",
    "completed": true
}
```
Donde,
- **title:** Es un *string* que representa el nombre de la tarea.
- **description:** Es un *string* que explica lo que se debe realizar en la tarea.
- **completed:** Es un *booleano* que representa si la tarea ya fue realizada.

## Rutas

```
http://localhost:8000/api/v1/tasks
```
A la ruta raíz se puede hacer dos tipos de solicitudes:
- get
- post

```
http://localhost:8000/api/v1/tasks/ID
```
A la ruta raíz más el ID de una tarea se puede hacer las siguientes solicitudes:
- get (tarea por ID)
- put
- patch
- delete
