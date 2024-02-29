import { createProducto, getAllProductos, updateProduct, deleteProduct } from "../models/producto.js"

export const registerProducto = async (req, res) => {
    const { precio, referencia, marca,nombre,tipo,url } = req.body

    const createdProduct = await createProducto({
        precio, referencia, marca,nombre,tipo,url
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
    const { precio, referencia, marca,nombre,tipo} = req.body

    const updatedProduct = await updateProduct({
        precio, referencia, marca,nombre,tipo,url
    })

    if (!updatedProduct) return res.status(400).json({ "message": "error al actualizar el producto" })
    return res.status(200).json({"message": "OK"})
}

export const deleteProductos = async (req, res) => {
    console.log(req.body)
    const {referencia} = req.body

    const deleteProducto = await deleteProduct({
         referencia
    })

    if (!deleteProducto) return res.status(400).json({ "message": "error al borrar producto" })
    return res.status(200).json({"message": "OK"})
}