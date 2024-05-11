import express from "express"
import { getProductos, registerProducto, updateProducto, deleteProductos, setUpdateStock } from "../controllers/producto.controller.js"
const router = express.Router()

router.get("/get_productos", getProductos)
router.post("/register_producto", registerProducto)
router.post("/updateProducto", updateProducto)
router.post("/deleteProducto",deleteProductos)
router.post("/getStock",setUpdateStock)

export default router