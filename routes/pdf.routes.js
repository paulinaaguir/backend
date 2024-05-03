import express from "express"
import { PdfMiddleware } from "../middleware/pdf.template.js"
const router = express.Router()

router.post("/invoice", PdfMiddleware)
export default router