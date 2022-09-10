const fs = require('fs');
const extraerAcuseIva = require('./controllers/AcuseIvacontroller.js');
const extraearDeclaracionIva = require('./controllers/DeclaracionIvaController.js');
const extraccionInfonavit = require('./controllers/InfonavirController.js');
const extraerSTPS = require("./controllers/STPScontroller.js");

let docsSTPS = fs.readdirSync('./docs/STPS');
// let docsAcuseIva = fs.readdirSync('./docs/acuseIva');
// let docDeclaracionIva = fs.readdirSync('./docs/declaracionIva');
// let docsInfonavit = fs.readdirSync('./docs/infonavit');

// docsInfonavit.map( documento =>{
//     extraccionInfonavit(`./docs/infonavit/${documento}`)
//     .then(data =>{
//         console.log(data);
//         // fs.writeFileSync('./nuevaData.txt', JSON.stringify(data)+'\n\n\n', { flag: 'a+' }, err =>{})
//     });
// });

docsSTPS.map( documento =>{
    extraerSTPS(`./docs/STPS/${documento}`).then(data =>{
        // fs.writeFileSync('./nuevaData.txt', JSON.stringify(data)+'\n\n\n\n', { flag : 'a+' },err =>{});
        console.log(data);
    });  
});

// docsAcuseIva.map( documento =>{
//     let path = `./docs/acuseIva/${documento}`
//     extraerAcuseIva(path).then(data=>{
//         console.log(data);
//     });
// });

// docDeclaracionIva.map( documento => {
//     extraearDeclaracionIva(`./docs/declaracionIva/${documento}`).then(data=>{
//         console.log(data);
//         // fs.writeFileSync('./declaracionIva.txt', JSON.stringify(data)+'\n\n\n', { flag: 'a+' }, error => {});
//     })
// });