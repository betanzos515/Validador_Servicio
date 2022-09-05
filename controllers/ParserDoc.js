const pdfParse = require('pdf-parse');
const { saltosRegex } = require('../helpers/RegexAcuseIva');

const parserDoc = async (doc)=>{
    let data = await pdfParse(doc);
    return data.text.trim().replace(saltosRegex,' ');
}

module.exports = parserDoc;