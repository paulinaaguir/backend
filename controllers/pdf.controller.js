import PDFDocument from "pdfkit";

export const GenerarPdf = (req, dataCallBack, endCallBack) => {
  // Crear un nuevo documento PDF
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  doc.on('data', dataCallBack)
  doc.on('end', endCallBack)
  function sumatoriaTotal(datos) {
    let suma = 0;
    datos.forEach(element => {
      suma += element.precio * element.cantidad;
    });;
    return suma;
  }
  function fillData(datos, startX, startY) {
    // Agregar encabezado
    doc.fontSize(24).text("Factura", { align: 'center' });
    doc.moveDown();

    // Agregar detalles de la compra
    datos.forEach(element => {
      doc.fontSize(14).text(`${element.cantidad}`, startX -15, startY);
      doc.fontSize(14).text(`Producto: ${element.nombre}`, startX + 40 , startY );
      doc.fontSize(14).text("------------------: ", startX + 260 , startY );
      doc.fontSize(14).text( "$"+element.precio, startX + 360, startY);
     
      startY += 40; // Incrementa la posición Y para el siguiente elemento
    });

    // Calcular el total
    const total = sumatoriaTotal(datos)
    
    // Agregar total
    doc.moveDown();
    doc.fontSize(16).text(`Total: $${total}`, 338, startY + 100 );
  }

  fillData(req.body, 60, 120);

  // Finalizar y cerrar el documento
  doc.end();
  
};
