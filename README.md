## Rutas

- GET /api/productos/listar
- GET /api/productos/listar/:id
- POST /api/productos/guardar

Ejemplo de body esperado para guardar un producto

```
{
    "title": "Test 8",
    "price": 150.00,
    "thumbnail": "test.com/image/test-8",
}
```