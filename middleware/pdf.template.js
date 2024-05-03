import { generarPdf } from "../controllers/pdf.controller.js";

export function PdfMiddleware(req, res){
    const stream = res.writeHead(200,{
        "Content-type": "application/pdf",
        "Content-Disposition": "attachment; filename=factura.pdf"
    });
    generarPdf(
        req,
        (data)=> stream.write(data), 
        ()=> stream.end()
        )
   
}