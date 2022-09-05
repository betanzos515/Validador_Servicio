const fs = require('fs');
// const pdfParse = require('pdf-parse');
const { periodoYFecha, rfcRegex, razonSocialRegex, saltosRegex} = require('../helpers/RegexAcuseIva.js');
const parserDoc = require('./ParserDoc.js');

let correctos = 0;
let noLeidos = 0;

const extraerAcuseIva = async (doc)=>{
    try{
        const dataPDF = await parserDoc(doc);
        // let data = await pdfParse(doc);
        // let dataPDF = data.text.trim().replace(saltosRegex,' ');
        // return data.text.trim().replace(saltosRegex,' ');
        return {
            periodo : periodoYFecha.exec(dataPDF)[0].replace('Período de la declaración:','').replace(/Ejercicio:[0-9]{4}/,''),
            ejercicio:periodoYFecha.exec(dataPDF)[0].replace(/(Per).+(:)/,''),
            rfc : rfcRegex.exec(dataPDF)[0],
            razonSocial: razonSocialRegex.exec(dataPDF)[0].replace(/(Nombre:|social:)/,'').replace(/Tipo.+/,'').trim(),
            correctos: correctos++
        }
    }catch(erro){
        const nombre = doc.split('/');
        fs.rename(doc,`./docs/errores/acuseIva/${nombre[nombre.length - 1]}`, error =>{})
        // que hacer en caso de que el documento no se pueda leer
        return { error:`Error al procesar el documento: ${doc}`, noLeidos : noLeidos++ }
    }
}

module.exports = extraerAcuseIva;