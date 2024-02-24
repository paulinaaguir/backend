import express from "express"
import { getProductos, registerProducto, updateProducto, deleteProductos } from "../controllers/producto.controller.js"
const router = express.Router()

router.get("/get_productos", getProductos)
router.post("/register_producto", registerProducto)
router.post("/updateProducto", updateProducto)
router.post("/deleteProducto",deleteProductos)

export default router