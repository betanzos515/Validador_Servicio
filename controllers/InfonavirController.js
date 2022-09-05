
const fs = require('fs');
const {
    rfcRegex,
    registroPatronalRegex,
    fechasRegex
} = require('../helpers/RegexInfonavit.js');
const parserDoc = require('./ParserDoc.js');

let contador= 0;
let noContados = 0;
const extraccionInfonavit = async (doc)=>{
    try{
        let dataPDF = await parserDoc(doc);
        let fechas =  dataPDF.match(fechasRegex);
        if(!(dataPDF !=='' && fechas !== null)) throw error;
        return {
            doc:doc,
            rfc : rfcRegex.exec(dataPDF)[0].replace('-','').replace('-',''),
            registroPatronal: registroPatronalRegex.exec(dataPDF)[0],
            fechas,
            mensaje:'Documento procesado correctamente',
            error:false,
            contador: contador++
        }
    }catch(erro){
        const nombre = doc.split('/');
        // fs.rename(doc,`./docs/errores/infonavit/${nombre[nombre.length - 1]}`, error =>{})
        //que hacer en caso de que el documento no se pueda leer
        return  {
            doc:doc,
            mensaje:'Error al procesar el documento',
            error:true,
            noContados: noContados++
        }
    }

}

module.exports = extraccionInfonavit;