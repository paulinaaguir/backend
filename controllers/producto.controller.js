import { createProducto, getAllProductos, updateProduct } from "../models/producto.js"

export const registerProducto = async (req, res) => {
    const { precio, referencia, marca } = req.body

    const createdProduct = await createProducto({
        precio, referencia, marca
    })

    if (!createdProduct) return res.status(400).json({ "message": "error al registrar producto" })
    return res.status(200).json({"message": "OK"})
}

export const getProductos = async (req, res) => {

    const allProductos = await getAllProductos()
    if (!allProductos) return res.status(400).json({ "message": "error obteniendo los productos" })
    return res.status(200).json({ "productos": allProductos })
}

export const updateProducto = async (req, res) => {
    const { precio, referencia, marca } = req.body

    const updatedProduct = await updateProduct({
        precio, referencia, marca
    })

    if (!updatedProduct) return res.status(400).json({ "message": "error al actualoizar el producto" })
    return res.status(200).json({"message": "OK"})
}