const pdfParse = require('pdf-parse');
const fs = require('fs');
const {
    rfcRegex,
    razonSocialRegex,
    limpiarRazonSocial,
    ejercicio,
    periodo
} = require('../helpers/RegexDeclaracionIva.js');
const parserDoc = require('./ParserDoc.js');
let leidos = 0;
let noLeidos = 0;
const extraearDeclaracionIva = async (doc)=>{
    try{
        let dataPDF = await parserDoc(doc);
        if(dataPDF === '') throw error

        return {
            rfc : rfcRegex.exec(dataPDF)[0],
            razonSocial: razonSocialRegex.exec(dataPDF)[0].replace(limpiarRazonSocial,'').trim(),
            ejercicio: ejercicio.exec(dataPDF)[0].replace('EJERCICIO',''),
            periodo: periodo.exec(dataPDF)[0].replace('PERIODO',''),
            leidos: leidos++
        }
    }catch(error){
        const nombre = doc.split('/');
        fs.rename(doc,`./docs/errores/declaracionIVA/${nombre[nombre.length - 1]}`, error =>{})
        return {
        error:`Hubo un error con el documento: ${doc}`,
        noLeidos: noLeidos++
        }
    }
}

module.exports = extraearDeclaracionIva;