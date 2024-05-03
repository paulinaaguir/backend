import PDFDocument from "pdfkit";

export const generarPdf = (req,dataCallBack,endCallBack) => {
  // Crear un nuevo documento PDF
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
//   doc.pipe(fs.createWriteStream("factura.pdf"));
doc.on('data',dataCallBack)
doc.on('end',endCallBack)
// Título de la factura
  doc.fontSize(20).text("Factura", { align: "center" });

  // Información del cliente
  doc.fontSize(12).text("Cliente: Juan Pérez");
  doc.fontSize(12).text("Dirección: Calle 123, Ciudad");
  doc.fontSize(12).text("Fecha: 2024-04-12");

  // Detalles de la factura
  doc.fontSize(16).text("Detalles:", { underline: true });
  doc.fontSize(12).text("- Producto 1: $50");
  doc.fontSize(12).text("- Producto 2: $30");
  doc.fontSize(12).text("- Total: $80");

  // Finalizar y cerrar el documento
  doc.end();
};
