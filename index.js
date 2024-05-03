import express from "express"
import cors from "cors"
import productoRoutes from "./routes/producto.routes.js"
import authRoutes from "./routes/auth.routes.js"
import pdfRoutes from "./routes/pdf.routes.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(productoRoutes, authRoutes,pdfRoutes)

app.listen({
    port: "3000",
    host: "localhost"
})