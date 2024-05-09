import { GenerarPdf } from "../controllers/pdf.controller.js";

export function PdfMiddleware(req, res) {
    const stream = res.writeHead(200, {
        "Content-type": "application/pdf",
        "Content-Disposition": "attachment; filename=Factura.pdf"
    });
    GenerarPdf(
        req,
        (data) => stream.write(data),
        () => stream.end()
    )

}