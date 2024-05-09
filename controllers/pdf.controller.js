import PDFDocument from "pdfkit";

export const GenerarPdf = (req, dataCallBack, endCallBack) => {

  // Crear un nuevo documento PDF

  const doc = new PDFDocument();
  const data = req.body;
  console.log("🚀 ~ GenerarPdf ~ data:", data)

  // Pipe its output somewhere, like to a file or HTTP response
  //   doc.pipe(fs.createWriteStream("factura.pdf"));
  doc.on('data', dataCallBack)
  doc.on('end', endCallBack)

  function fillData(datos) {
    doc.fontSize(30).text("Factura", { align: "center" });
    datos.forEach(element => {

      doc.fontSize(20).text("Nombre:" + element.nombre, { align: "center" });
      doc.fontSize(20).text("Valor:" + element.precio, { align: "center" });
    });
  }

  // Título de la factura
  doc.fontSize(20).text("Factura#", { align: "center" });

  // Información del cliente
  // doc.fontSize(12).text("Cliente: Juan Pérez");
  // doc.fontSize(12).text("Dirección: Calle 123, Ciudad");
  // doc.fontSize(12).text("Fecha: 2024-04-12");
  fillData(data)
  // Finalizar y cerrar el documento
  doc.end();
};
