export class ProductosService {
    listado = []

    listar () {
        return this.listado
    }

    findById (id) {
        return this.listado.find(item => item.id == id)
    }

    guardarProducto (producto) {
        producto.setId(this.listado.length + 1)
        this.listado.push(producto)
    }
}

export class Producto {
    title
    price
    thumbnail
    id
    constructor(
        title,
        price,
        thumbnail,
        id
    ) {
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.id = id
    }

    setId (id) {
        this.id = id
    }
}