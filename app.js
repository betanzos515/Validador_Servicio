//librerias
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//configuración
dotenv.config();
const whitelist = require('./config.json');
const dominiosPermitidos = whitelist.WHITELIST;
const app = express();

//rutas
const acuseIvaRoutes = require('./routes/acuseIvaRoutes.js');
const acuseIMSSRoutes = require('./routes/acuseIMSSRoutes.js');
const declaracionIVARoutes = require('./routes/declaracionIVARoutes.js');
const infonavitRoutes = require('./routes/infonavitRoutes.js');
const repseRoutes = require('./routes/RepseRoutes.js');
const suaRoutes = require('./routes/SUARoutes.js');


const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin)!== -1){
            //el origen al request está permitidos
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
} 

app.use(cors(corsOptions))

app.use('/api/acuseIva',acuseIvaRoutes);
app.use('/api/acuseIMSS',acuseIMSSRoutes);
app.use('/api/declaracionIva',declaracionIVARoutes);
app.use('/api/infonavit',infonavitRoutes);
app.use('/api/STPS',repseRoutes);
app.use('/api/SUA',suaRoutes);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor Escuchando en el puerto ${port}`);
});