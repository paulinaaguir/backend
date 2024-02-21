import express from "express"
import { getProductos, registerProducto, updateProducto } from "../controllers/producto.controller.js"
const router = express.Router()

router.get("/get_productos", getProductos)
router.post("/register_producto", registerProducto)
router.post("/updateProducto", updateProducto)

export default router