import express from 'express'
import { Producto, ProductosService } from './Productos.js'

const app = express()
const port = process.env.PORT || 8080
const productosService = new ProductosService()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/productos/listar', (req, res) => {
    const productos = productosService.listar()
    if (productos.length <= 0) {
        return res.status(404).json({
            error: 'No hay productos cargados'
        })
    }
    res.json({productos})
})

app.get('/api/productos/listar/:id', (req, res) => {
    const { id } = req.params
    const producto = productosService.findById(id)
    if (!producto) {
        return res.status(404).json({
            error: 'Producto no encontrado'
        })
    }
    res.json(producto)
})

app.post('/api/productos/guardar', (req, res) => {
    const { title, price, thumbnail } = req.body

    if (typeof price !== 'number') {
        return res.status(400).json({
            error: 'price debe ser un numero'
        })
    }

    if (typeof title !== 'string' || typeof thumbnail !== 'string') {
        return res.status(400).json({
            error: 'title y thumbnail deben ser strings'
        })
    }

    const nuevoProducto = new Producto(title, price, thumbnail)
    productosService.guardarProducto(nuevoProducto)
    res.json(nuevoProducto)
})

app.listen(port, (err) => {
    if (err) {
        console.log(`Error en el servidor ${err}`)
    } else {
        console.log(`Servidor corriendo en el puerto ${port}`)
    }
})