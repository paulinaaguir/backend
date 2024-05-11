import PDFDocument from "pdfkit";

export const GenerarPdf = (req, dataCallBack, endCallBack) => {
  // Crear un nuevo documento PDF
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  doc.on('data', dataCallBack)
  doc.on('end', endCallBack)
  
  function fillData(datos, startX, startY) {
    // Agregar encabezado
    doc.fontSize(24).text("Factura", { align: 'center' });
    doc.moveDown();

    // Agregar detalles de la compra
    datos.forEach(element => {
      doc.fontSize(14).text(`Producto: ${element.nombre}`, startX, startY);
      doc.fontSize(14).text(`Precio: $${element.precio}`, startX, startY + 20);
      doc.fontSize(14).text(`cantidad: ${element.cantidad}`, startX, startY + 40);
      startY += 40; // Incrementa la posición Y para el siguiente elemento
    });

    // Calcular el total
    const total = datos.reduce((acc, curr) =>parseFloat(acc) + parseFloat(curr.precio), 0);
    
    // Agregar total
    doc.moveDown();
    doc.fontSize(16).text(`Total: $${total}`, { align: 'right' });
  }

  fillData(req.body, 50, 100);

  // Finalizar y cerrar el documento
  doc.end();
  
};
