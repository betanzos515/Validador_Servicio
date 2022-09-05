/* 
  Data que utilizamos para la validacion es :
    * RFC,
    * Razon Social,
    * REPSE,
    
  Cotejamos probablemente en DB o con el usuario que mande la validacion.
  */
const pdfParse = require('pdf-parse');
const fs = require('fs');
let contador =0;
let contadorError = 0;
 
const extraerSTPS = async (doc)=>{
  //Expresiones regulares utilizadas
  let saltosRegex = /(\r\n|\n|\r)/gm
  let RFCRegex = /[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]/
  let repseRegex = /AR[0-9]{3,6}\/[0-9]{4}/
  let espaciosRegex = /\s+/g
  let eliminarInicio = /por parte de|\sla\spersona:\s|\(Moral\)|\(Física\)/gmi
  let eliminarFinal = /(\scon\sRegistro|,con\sRegistro)|\sCon Curp/gmi

  try {
    let parser = await pdfParse(doc);
    let getDataPDF = parser.text.replace(saltosRegex,' ');
    let nombreExpresion = /por\s+parte.+?(con\s+Registro|\s+con\s+Curp)/gmi
    if(getDataPDF.trim() === '' || getDataPDF === null) throw error;
    obj = {
      rfc: RFCRegex.exec(getDataPDF)[0],
      repse: repseRegex.exec(getDataPDF)[0],
      razonSocial: nombreExpresion.exec(getDataPDF)[0].trim().replace(espaciosRegex,' ').replace(eliminarInicio,'').replace(eliminarFinal,'').trim(),
      contador: contador++ 
    }
    if(obj === null) throw error;
    return obj;
  }catch (error) {
    const nombre = doc.split('/');
    fs.rename(doc,`./docs/errores/STPS/${nombre[nombre.length - 1]}`, error =>{})
    return {
      error:`Hubo un error con el documento: ${doc}`,
      noLeidos : contadorError++
    }
  }
}  

module.exports = extraerSTPS;